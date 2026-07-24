import { NextResponse } from "next/server";
import { budgetFormSchema } from "@/lib/validations";
import prisma from "@/lib/prisma";
import { appendToSheet } from "@/lib/google-sheets";
import { z } from "zod";
import { uploadImageToCloudinary } from "@/lib/cloudinary";
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Extraer y validar campos de texto
    const rawData = {
      serviceType: formData.get("serviceType"),
      description: formData.get("description"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      // Añadir || undefined a los campos opcionales
      address: formData.get("address") || undefined, 
      preferredDate: formData.get("preferredDate") || undefined,
    };

    const validatedData = budgetFormSchema.parse(rawData);

    // 2. Crear registro inicial en PostgreSQL para obtener el ID
    const newRequest = await prisma.budgetRequest.create({
      data: {
        serviceType: validatedData.serviceType,
        description: validatedData.description,
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        address: validatedData.address || null,
        preferredDate: validatedData.preferredDate || null,
        fileUrls: [], // Se actualizará luego
        status: "PENDIENTE",
      },
    });

    // 3. Procesar archivos y subirlos a Cloudinary en subcarpeta
    const files = formData.getAll("files") as File[];
    const uploadedFilePaths: string[] = [];
    const MAX_FILE_SIZE = 60 * 1024 * 1024; // Límite individual de 60MB
    const MAX_REQUEST_STORAGE = 300 * 1024 * 1024; // Límite de 300MB por petición
    let uploadWarning: string | null = null;

    if (files.length > 0 && files[0].name !== "undefined") {
      if (!process.env.CLOUDINARY_CLOUD_NAME && !process.env.CLOUDINARY_URL) {
        console.error("Cloudinary no está configurado.");
        uploadWarning = "No hemos podido guardar los archivos adjuntos debido a un error de configuración. Por favor, envíelos por email.";
      } else {
        const incomingSize = files.reduce((acc, file) => acc + file.size, 0);

        if (incomingSize > MAX_REQUEST_STORAGE) {
          uploadWarning = "El tamaño total de los archivos supera los 300MB permitidos. Por favor, envíelos por email o use archivos más pequeños.";
        } else {
          for (const file of files) {
            if (file.size === 0) continue;
            
            if (file.size > MAX_FILE_SIZE) {
              return NextResponse.json(
                { error: `El archivo ${file.name} supera el límite individual de 60MB` },
                { status: 400 }
              );
            }

            try {
              // Subir a carpeta especifica con el ID del presupuesto
              const folderName = `presupuestos/${newRequest.id}`;
              const cloudinaryUrl = await uploadImageToCloudinary(file, folderName);
              uploadedFilePaths.push(cloudinaryUrl);
            } catch (err) {
              console.error(`Error subiendo ${file.name} a Cloudinary:`, err);
              uploadWarning = "Hubo un problema guardando uno o más archivos. Puede que algunos no se hayan adjuntado correctamente.";
            }
          }
        }
      }
    }

    // Actualizar registro con las URLs si se subieron archivos
    if (uploadedFilePaths.length > 0) {
      await prisma.budgetRequest.update({
        where: { id: newRequest.id },
        data: { fileUrls: uploadedFilePaths }
      });
    }

    // 4. Guardar en Google Sheets
    const sheetData = [
     newRequest.id,
      validatedData.preferredDate || "N/A",
      validatedData.serviceType,
      validatedData.name,
      validatedData.email,
      validatedData.phone,
      validatedData.address || "N/A",
      validatedData.description,
      uploadedFilePaths.join(", "),
      validatedData.preferredDate || "N/A",
      newRequest.createdAt.toISOString(),
    ];

    await appendToSheet(sheetData);

    return NextResponse.json(
      { 
        message: "Presupuesto recibido y procesado correctamente", 
        id: newRequest.id,
        warning: uploadWarning // Se envía al frontend
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error en el endpoint POST /api/presupuesto:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Datos de entrada inválidos", details: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Error interno del servidor al procesar la solicitud" }, { status: 500 });
  }
}
