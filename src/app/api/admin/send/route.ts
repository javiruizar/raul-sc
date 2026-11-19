import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Resend } from "resend";
import { ADMIN_COOKIE, isSameOrigin, verifySessionToken } from "@/lib/admin-auth";
import {
  adminMailSchema,
  hasAllowedExtension,
  MAX_ATTACHMENTS,
  MAX_ATTACHMENTS_BYTES,
  parseRecipients,
} from "@/lib/admin-mail";
import { getMailSender } from "@/config/mail-senders";
import { renderCorporateEmail } from "@/lib/corporate-email";

// Envía un correo con la plantilla corporativa desde el panel de administración
export async function POST(request: Request) {
  // El middleware ya protege la ruta; se vuelve a comprobar aquí por si acaso
  const cookieStore = await cookies();
  if (!(await verifySessionToken(cookieStore.get(ADMIN_COOKIE)?.value))) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Origen no permitido" }, { status: 403 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Falta RESEND_API_KEY en el servidor" }, { status: 503 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Petición no válida" }, { status: 400 });
  }

  const parsed = adminMailSchema.safeParse({
    senderId: formData.get("senderId"),
    to: parseRecipients(String(formData.get("to") ?? "")),
    subject: formData.get("subject"),
    body: formData.get("body"),
    sendCopy: formData.get("sendCopy") === "true",
  });
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Datos no válidos" }, { status: 400 });
  }
  const { senderId, to, subject, body, sendCopy } = parsed.data;

  // Solo se puede enviar desde las direcciones de la configuración
  const sender = getMailSender(senderId);
  if (!sender) {
    return NextResponse.json({ error: "Remitente no permitido" }, { status: 400 });
  }

  // Adjuntos
  const files = formData.getAll("attachments").filter((item): item is File => item instanceof File && item.size > 0);
  if (files.length > MAX_ATTACHMENTS) {
    return NextResponse.json({ error: `Máximo ${MAX_ATTACHMENTS} adjuntos` }, { status: 400 });
  }
  const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
  if (totalBytes > MAX_ATTACHMENTS_BYTES) {
    return NextResponse.json({ error: "Los adjuntos superan los 4 MB en total" }, { status: 400 });
  }
  const invalidFile = files.find((file) => !hasAllowedExtension(file.name));
  if (invalidFile) {
    return NextResponse.json({ error: `Tipo de archivo no permitido: ${invalidFile.name}` }, { status: 400 });
  }
  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
    }))
  );

  const { html, text } = renderCorporateEmail({ sender, subject, body });

  const { data, error } = await new Resend(apiKey).emails.send({
    from: `${sender.displayName} <${sender.address}>`,
    to,
    // Copia oculta al correo de respuestas: así queda constancia de lo enviado
    bcc: sendCopy ? [sender.replyTo] : undefined,
    replyTo: sender.replyTo,
    subject,
    html,
    text,
    attachments: attachments.length ? attachments : undefined,
  });

  if (error) {
    console.error("Error al enviar el correo del panel:", error);
    return NextResponse.json({ error: `No se ha podido enviar: ${error.message}` }, { status: 502 });
  }

  // El id permite buscar el correo en el panel de Resend (Emails) y ver si se entregó
  console.info(`Correo del panel aceptado por Resend: id=${data?.id} desde=${sender.address}`);
  return NextResponse.json({ id: data?.id ?? null });
}
