import { NextResponse } from "next/server";
import { budgetFormSchema } from "@/lib/validations";
import prisma from "@/lib/prisma";
import { appendToSheet } from "@/lib/google-sheets";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    // 1. Obtener y parsear el cuerpo de la petición
    const body = await request.json();

    // 2. Validar los datos con Zod (seguridad en servidor)
    const validatedData = budgetFormSchema.parse(body);

    // 3. Guardar el registro en PostgreSQL vía Prisma
    const newRequest = await prisma.budgetRequest.create({
      data: {
        serviceType: validatedData.serviceType,
        description: validatedData.description,
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        address: validatedData.address || null,
        preferredDate: validatedData.preferredDate || null,
        status: "PENDIENTE",
      },
    });

    // 4. Preparar el array posicional y guardar en Google Sheets
    // El orden debe coincidir exactamente con las columnas A-H de tu documento
    const sheetData = [
      newRequest.id, // Columna A: ID generado por Postgres
      new Date().toLocaleDateString("es-ES"), // Columna B: Fecha
      validatedData.serviceType, // Columna C: Servicio
      validatedData.name, // Columna D: Nombre
      validatedData.email, // Columna E: Email
      validatedData.phone, // Columna F: Teléfono
      validatedData.address || "N/A", // Columna G: Dirección
      validatedData.description, // Columna H: Descripción
    ];

    await appendToSheet(sheetData);

    // 5. Devolver código 200 OK al cliente
    return NextResponse.json(
      { 
        message: "Presupuesto recibido y procesado correctamente",
        id: newRequest.id 
      },
      { status: 200 }
    );

 } catch (error) {
    console.error("Error en el endpoint POST /api/presupuesto:", error);

    if (error instanceof z.ZodError) {
      // Usamos el método .flatten() o .errors de Zod directamente 
      // para obtener los errores sin necesidad de usar 'any'
      return NextResponse.json(
        { 
          error: "Datos de entrada inválidos", 
          details: error.issues // 'issues' es la propiedad interna de ZodError con los detalles
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Error interno del servidor al procesar la solicitud" },
      { status: 500 }
    );
  }
}