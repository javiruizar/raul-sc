import { z } from "zod";

// Límites y validación del correo del panel, compartidos por el formulario y la API.

// Vercel corta las peticiones de más de 4,5 MB, así que los adjuntos se limitan a 4 MB en total
export const MAX_ATTACHMENTS_BYTES = 4 * 1024 * 1024;
export const MAX_ATTACHMENTS = 5;
export const MAX_RECIPIENTS = 5;
export const ALLOWED_ATTACHMENT_EXTENSIONS = [
  "pdf",
  "jpg",
  "jpeg",
  "png",
  "webp",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "odt",
  "ods",
];

// "a@b.com, c@d.com" → ["a@b.com", "c@d.com"]
export function parseRecipients(value: string): string[] {
  return value
    .split(/[,;\s]+/)
    .map((address) => address.trim())
    .filter(Boolean);
}

export const adminMailSchema = z.object({
  senderId: z.string().min(1, "Elige un remitente"),
  to: z
    .array(z.email("Hay un email de destino no válido"))
    .min(1, "Indica al menos un destinatario")
    .max(MAX_RECIPIENTS, `Máximo ${MAX_RECIPIENTS} destinatarios`),
  subject: z.string().trim().min(1, "Escribe un asunto").max(200, "El asunto es demasiado largo"),
  body: z.string().trim().min(1, "Escribe el mensaje").max(20000, "El mensaje es demasiado largo"),
  sendCopy: z.boolean(),
});

export function hasAllowedExtension(filename: string): boolean {
  const extension = filename.split(".").pop()?.toLowerCase() ?? "";
  return ALLOWED_ATTACHMENT_EXTENSIONS.includes(extension);
}
