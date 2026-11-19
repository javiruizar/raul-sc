import { siteConfig } from "@/config/site";
import type { MailSender } from "@/config/mail-senders";

// Plantilla corporativa de los correos que se escriben desde el panel.
// Es una función pura (sin dependencias de servidor) para poder usarla también
// en la vista previa del navegador: lo que se ve es exactamente lo que se envía.

const COLORS = {
  primary: "#D4581E",
  text: "#2C3E50",
};

// PNG pequeño: muchos clientes de correo no muestran webp. Solo se ve una vez desplegado.
const LOGO_URL = `${siteConfig.url}/logo-email.png`;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Formato de una línea ya escapada: **negrita** y enlaces http(s) automáticos
function formatInline(escaped: string): string {
  return escaped
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/https?:\/\/[^\s<]+[^\s<.,;:!?)]/g, (url) => `<a href="${url}" style="color:${COLORS.primary}">${url}</a>`);
}

/**
 * Convierte el texto escrito en el panel en HTML seguro.
 * Todo se escapa primero, así que no se puede inyectar HTML. Formato admitido:
 * - párrafos separados por una línea en blanco (un salto simple es un <br>)
 * - líneas que empiezan por "- " forman una lista
 * - **negrita** y enlaces http(s) automáticos
 */
export function bodyToHtml(body: string): string {
  const paragraphStyle = "margin:0 0 16px 0;font-size:15px;line-height:1.6";

  return body
    .replace(/\r\n/g, "\n")
    .trim()
    .split(/\n{2,}/)
    .map((block) => {
      const lines = block.split("\n").map((line) => formatInline(escapeHtml(line)));
      const rawLines = block.split("\n");

      if (rawLines.every((line) => line.trimStart().startsWith("- "))) {
        const items = lines
          .map((line) => `<li style="margin:0 0 6px 0">${line.replace(/^\s*- /, "")}</li>`)
          .join("");
        return `<ul style="${paragraphStyle};padding-left:22px">${items}</ul>`;
      }

      return `<p style="${paragraphStyle}">${lines.join("<br>")}</p>`;
    })
    .join("");
}

interface CorporateEmailInput {
  sender: MailSender;
  subject: string;
  body: string;
  // Solo para la vista previa: ruta relativa para cargar el logo del servidor actual
  // (en desarrollo, o antes de desplegar, el de producción todavía no existe)
  logoUrl?: string;
}

export function renderCorporateEmail({ sender, subject, body, logoUrl = LOGO_URL }: CorporateEmailInput): {
  html: string;
  text: string;
} {
  // Sin enlaces tel: ni a Google Maps: Resend avisa de que los enlaces a otros dominios
  // pueden activar los filtros de spam. Todos los enlaces apuntan a la web.
  const { phoneDisplay } = siteConfig.contact;
  const siteHost = siteConfig.url.replace(/^https?:\/\//, "");
  const signatureHtml = sender.signature
    .map((line, index) => (index === 0 ? `<strong>${escapeHtml(line)}</strong>` : escapeHtml(line)))
    .join("<br>");

  // Estilo "carta", no "boletín": fondo blanco, texto, firma con el logo pequeño y pie discreto.
  // Gmail manda a Promociones los correos que parecen marketing (logo grande en cabecera,
  // bandas de color, tarjetas sobre fondo gris), así que se evitan a propósito.
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:${COLORS.text}">
<div style="max-width:600px;padding:16px">
  ${bodyToHtml(body)}
  <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;border-top:2px solid ${COLORS.primary}">
    <tr>
      <td style="padding:12px 16px 0 0;vertical-align:top">
        <img src="${logoUrl}" width="110" alt="${escapeHtml(siteConfig.shortName)}" style="display:block;width:110px;height:auto;border:0">
      </td>
      <td style="padding:12px 0 0 0;vertical-align:top;font-size:14px;line-height:1.5">
        ${signatureHtml}<br>
        Tel. y WhatsApp: ${phoneDisplay}<br>
        <a href="${siteConfig.url}" style="color:${COLORS.primary}">${siteHost}</a>
      </td>
    </tr>
  </table>
</div>
</body>
</html>`;

  const text = [
    body.replace(/\r\n/g, "\n").trim().replace(/\*\*(.+?)\*\*/g, "$1"),
    "",
    "--",
    ...sender.signature,
    `Tel. y WhatsApp: ${phoneDisplay}`,
    siteConfig.url,
  ].join("\n");

  return { html, text };
}
