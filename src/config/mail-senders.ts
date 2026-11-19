import { siteConfig } from "@/config/site";

// Direcciones desde las que se puede escribir en el panel de administración.
// Para añadir otra basta con meter una entrada nueva: el dominio ya está verificado
// en Resend, así que cualquier dirección @raul.javierruiz.org funciona.
// La API solo acepta remitentes de esta lista (nunca direcciones escritas a mano).
export interface MailSender {
  // Identificador estable: es lo que envía el formulario del panel
  id: string;
  address: string;
  // Nombre que ve el cliente en su bandeja de entrada
  displayName: string;
  // Firma que se añade al final de cada correo (una línea por elemento)
  signature: string[];
  // A dónde llegan las respuestas del cliente. Mientras el panel no reciba correo,
  // es el correo personal de Javier.
  replyTo: string;
}

export const mailSenders: MailSender[] = [
  {
    id: "contacto",
    address: "contacto@raul.javierruiz.org",
    displayName: "Raúl Sánchez · Albañilería y reformas",
    signature: ["Raúl Sánchez", "Albañilería y reformas · Pozoblanco (Córdoba)"],
    replyTo: siteConfig.contact.email,
  },
];

export function getMailSender(id: string): MailSender | undefined {
  return mailSenders.find((sender) => sender.id === id);
}
