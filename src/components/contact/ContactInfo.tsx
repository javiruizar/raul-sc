import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Teléfono",
    primary: "600 000 000",
    secondary: "Llamadas y WhatsApp",
    link: "tel:+34600000000",
    color: "text-green-600",
  },
  {
    icon: Mail,
    title: "Email",
    primary: "contacto@raulalbanil.com",
    secondary: "Respuesta en 24-48h",
    link: "mailto:contacto@raulalbanil.com",
    color: "text-blue-600",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    primary: "Madrid y alrededores",
    secondary: "Radio de 50km",
    link: null,
    color: "text-red-600",
  },
  {
    icon: Clock,
    title: "Horario",
    primary: "Lun - Vie: 8:00 - 18:00",
    secondary: "Sáb: 9:00 - 14:00",
    link: null,
    color: "text-orange-600",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold text-secondary mb-2">
          Información de Contacto
        </h2>
        <p className="text-neutral-800/70">
          Estamos disponibles para atenderte. Elige el método que prefieras.
        </p>
      </div>

      <div className="grid gap-4">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          const content = (
            <Card
              className={`hover:shadow-lg transition-all duration-300 ${
                method.link ? "cursor-pointer hover:border-primary" : ""
              }`}
            >
              <CardContent className="flex items-start space-x-4 p-6">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 ${method.color} flex-shrink-0`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-secondary mb-1">
                    {method.title}
                  </h3>
                  <p className="text-neutral-800 font-medium break-words">
                    {method.primary}
                  </p>
                  <p className="text-sm text-neutral-800/60 mt-1">
                    {method.secondary}
                  </p>
                </div>
              </CardContent>
            </Card>
          );

          return method.link ? (
            <a key={index} href={method.link}>
              {content}
            </a>
          ) : (
            <div key={index}>{content}</div>
          );
        })}
      </div>

      {/* WhatsApp CTA */}
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white flex-shrink-0">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-secondary mb-1">
                ¿Prefieres WhatsApp?
              </h3>
              <p className="text-sm text-neutral-800/70 mb-3">
                Escríbenos directamente y te responderemos lo antes posible.
              </p>
              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
              >
                Abrir WhatsApp →
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <div className="p-6 bg-neutral-50 rounded-lg">
        <h4 className="font-semibold text-secondary mb-3">
          Información Adicional
        </h4>
        <ul className="space-y-2 text-sm text-neutral-800/70">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Presupuestos gratuitos y sin compromiso</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Respuesta en 24-48 horas laborables</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Visitas a domicilio para valoración</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Atención personalizada en todo momento</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
