import { Resend } from "resend";
import { siteConfig } from "@/config/site";
import { getBudgetServiceName } from "@/data/budget-services";

// Datos de una solicitud de presupuesto que se usan en los emails
export interface BudgetNotification {
  requestId: string;
  serviceType: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  description: string;
  preferredDate?: string;
  fileUrls: string[];
  requestDate: string;
}

const BASE_URL = "https://raul.javierruiz.org";
// Remitente por defecto de Resend: solo puede enviar al email de la cuenta de Resend
const RESEND_TEST_FROM = "Web Raúl Sánchez <onboarding@resend.dev>";

// Escapa los datos del usuario antes de meterlos en el HTML del email
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Envía un email con Resend. El SDK no lanza excepciones (devuelve { data, error }),
// así que convertimos el error en excepción para que el llamador lo registre.
async function sendEmail(options: {
  apiKey: string;
  from: string;
  to: string[];
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) {
  const { apiKey, ...email } = options;
  const { error } = await new Resend(apiKey).emails.send(email);

  if (error) {
    throw new Error(`Resend: ${error.name} - ${error.message}`);
  }
}

/**
 * Envía un email de aviso al dueño del negocio cuando llega una solicitud de presupuesto.
 * Si falta la configuración de Resend, no hace nada (solo deja un aviso en el log).
 * Lanza un error si el envío falla.
 */
export async function sendBudgetNotification(data: BudgetNotification) {
  const apiKey = process.env.RESEND_API_KEY;
  // Admite varios destinatarios separados por comas
  const to = (process.env.NOTIFY_EMAIL_TO || "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
  // Mientras el dominio no esté verificado en Resend, se usa el remitente de pruebas
  const from = process.env.EMAIL_FROM || RESEND_TEST_FROM;

  if (!apiKey || to.length === 0) {
    console.warn("Email de aviso no enviado: faltan RESEND_API_KEY o NOTIFY_EMAIL_TO.");
    return;
  }

  const serviceName = getBudgetServiceName(data.serviceType);

  const rows: [string, string][] = [
    ["Servicio", serviceName],
    ["Nombre", data.name],
    ["Teléfono", data.phone],
    ["Email", data.email],
    ["Dirección", data.address || "No indicada"],
    ["Fecha preferida", data.preferredDate || "No indicada"],
    ["Fecha de solicitud", data.requestDate],
    ["Referencia", data.requestId],
  ];

  const filesHtml = data.fileUrls.length
    ? `<ul>${data.fileUrls
        .map((url) => `<li><a href="${escapeHtml(url)}">${escapeHtml(url)}</a></li>`)
        .join("")}</ul>`
    : "<p>Sin archivos adjuntos.</p>";

  const html = `
    <h2>Nueva solicitud de presupuesto</h2>
    <table style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:6px;font-weight:bold;vertical-align:top">${label}</td><td style="padding:6px">${escapeHtml(value)}</td></tr>`
        )
        .join("")}
    </table>
    <h3>Descripción</h3>
    <p style="white-space:pre-wrap">${escapeHtml(data.description)}</p>
    <h3>Archivos adjuntos</h3>
    ${filesHtml}
  `;

  const text = [
    "Nueva solicitud de presupuesto",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Descripción:",
    data.description,
    "",
    "Archivos adjuntos:",
    ...(data.fileUrls.length ? data.fileUrls : ["Sin archivos adjuntos."]),
  ].join("\n");

  await sendEmail({
    apiKey,
    from,
    to,
    // Al pulsar "Responder" se contesta directamente al cliente
    replyTo: data.email,
    subject: `Nuevo presupuesto: ${serviceName} - ${data.name}`,
    text,
    html,
  });
}

/**
 * Envía al cliente un email confirmando que se ha recibido su solicitud de presupuesto.
 * Necesita un dominio verificado en Resend (EMAIL_FROM): con el remitente de pruebas
 * Resend no deja enviar a terceros, así que sin EMAIL_FROM no se envía.
 * Lanza un error si el envío falla.
 *
 * Como cualquiera puede escribir el email de destino en el formulario, el texto es fijo:
 * no se incluye la descripción y el nombre se recorta, para que no se pueda usar
 * para enviar spam desde nuestro dominio.
 */
export async function sendBudgetConfirmation(data: BudgetNotification) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;

  if (!apiKey || !from) {
    console.warn("Email de confirmación no enviado: faltan RESEND_API_KEY o EMAIL_FROM (dominio verificado).");
    return;
  }

  const name = data.name.trim().slice(0, 60);
  const serviceName = getBudgetServiceName(data.serviceType);
  const { phoneDisplay, phoneLink } = siteConfig.contact;

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#2C3E50;line-height:1.6">
      <div style="background:#D4581E;color:#ffffff;padding:20px 24px;border-radius:8px 8px 0 0">
        <h1 style="margin:0;font-size:20px">Hemos recibido tu solicitud</h1>
      </div>
      <div style="padding:24px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px">
        <p>Hola ${escapeHtml(name)},</p>
        <p>Gracias por confiar en nosotros. Hemos recibido correctamente tu solicitud de presupuesto para <strong>${escapeHtml(serviceName)}</strong>.</p>
        <p>En los próximos días nos pondremos en contacto contigo para afinar los detalles del trabajo o para facilitarte directamente el presupuesto.</p>
        <p>Si necesitas algo antes, puedes llamarnos o escribirnos por WhatsApp al <a href="tel:${phoneLink}" style="color:#D4581E">${phoneDisplay}</a>.</p>
        <p style="font-size:13px;color:#6b7280">Referencia de tu solicitud: ${escapeHtml(data.requestId)}</p>
        <p>Un saludo,<br><strong>Raúl Sánchez</strong><br>Albañilería y reformas · Pozoblanco (Córdoba)<br>
        <a href="${BASE_URL}" style="color:#D4581E">raul.javierruiz.org</a></p>
      </div>
    </div>
  `;

  const text = [
    `Hola ${name},`,
    "",
    `Gracias por confiar en nosotros. Hemos recibido correctamente tu solicitud de presupuesto para ${serviceName}.`,
    "",
    "En los próximos días nos pondremos en contacto contigo para afinar los detalles del trabajo o para facilitarte directamente el presupuesto.",
    "",
    `Si necesitas algo antes, puedes llamarnos o escribirnos por WhatsApp al ${phoneDisplay}.`,
    "",
    `Referencia de tu solicitud: ${data.requestId}`,
    "",
    "Un saludo,",
    "Raúl Sánchez",
    "Albañilería y reformas · Pozoblanco (Córdoba)",
    BASE_URL,
  ].join("\n");

  await sendEmail({
    apiKey,
    from,
    to: [data.email],
    // Si el cliente responde, le llega al email de contacto del negocio
    replyTo: siteConfig.contact.email,
    subject: "Hemos recibido tu solicitud de presupuesto",
    text,
    html,
  });
}
