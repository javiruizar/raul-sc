import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  ADMIN_SESSION_SECONDS,
  checkAdminPassword,
  createSessionToken,
  describeAdminConfigProblems,
  isAdminConfigured,
  isSameOrigin,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Origen no permitido" }, { status: 403 });
  }

  if (!isAdminConfigured()) {
    console.warn(`Panel de administración desactivado: ${describeAdminConfigProblems().join("; ")}.`);
    return NextResponse.json({ error: "El panel no está configurado" }, { status: 503 });
  }

  let password = "";
  try {
    const body = await request.json();
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    // cuerpo inválido: se trata como contraseña vacía
  }

  if (!(await checkAdminPassword(password))) {
    // Pequeña espera para frenar los intentos por fuerza bruta
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, await createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: ADMIN_SESSION_SECONDS,
  });
  return response;
}
