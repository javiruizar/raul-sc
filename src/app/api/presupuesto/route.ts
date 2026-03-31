import { NextResponse } from "next/server";
import { budgetFormSchema } from "@/lib/validations";
import prisma from "@/lib/prisma";
import { appendToSheet } from "@/lib/google-sheets";
import { z } from "zod";
import { writeFile, mkdir, readdir, stat } from "fs/promises"; // Añadidos readdir y stat
import path from "path";

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

// 2. Procesar archivos
    const files = formData.getAll("files") as File[];
    const uploadedFilePaths: string[] = [];
    const MAX_FILE_SIZE = 60 * 1024 * 1024;
    const MAX_SERVER_STORAGE = 100 * 1024 * 1024;
    let uploadWarning: string | null = null; // Variable para la advertencia

    if (files.length > 0 && files[0].name !== "undefined") {
      const uploadDir = path.join(process.cwd(), "public/uploads");
      const currentStorageSize = await getDirectorySize(uploadDir);
      const incomingSize = files.reduce((acc, file) => acc + file.size, 0);

      if (currentStorageSize + incomingSize > MAX_SERVER_STORAGE) {
        // Asignamos la advertencia y saltamos el guardado físico de archivos
        uploadWarning = "No hemos podido guardar los archivos adjuntos. Por favor, envíelos por email indicando el código de referencia facilitado.";
      } else {
        try { await mkdir(uploadDir, { recursive: true }); } catch (e) {
          console.error("Error al crear el directorio de uploads:", e);
        }

        for (const file of files) {
          if (file.size === 0) continue;
          
          if (file.size > MAX_FILE_SIZE) {
            return NextResponse.json(
              { error: `El archivo ${file.name} supera el límite de 60MB` },
              { status: 400 }
            );
          }

          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);
          const fileName = `${Date.now()}-${file.name.replaceAll(" ", "_")}`;
          const filePath = path.join(uploadDir, fileName);
          
          await writeFile(filePath, buffer);
          uploadedFilePaths.push(`/uploads/${fileName}`);
        }
      }
    }

    // 3. Guardar en PostgreSQL
    const newRequest = await prisma.budgetRequest.create({
     data: {
        serviceType: validatedData.serviceType,
        description: validatedData.description,
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        address: validatedData.address || null,
        preferredDate: validatedData.preferredDate || null,
        fileUrls: uploadedFilePaths,
        status: "PENDIENTE",
      },
    });

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

async function getDirectorySize(dirPath: string): Promise<number> {
  try {
    let totalSize = 0;
    const files = await readdir(dirPath);
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const fileStat = await stat(filePath);
      if (fileStat.isFile()) {
        totalSize += fileStat.size;
      }
    }
    return totalSize;
  } catch (error: unknown) {
    const fsError = error as NodeJS.ErrnoException;
    if (fsError.code === 'ENOENT') return 0;
    throw error;
  }
}