import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Phone, Mail, Clock, Navigation } from "lucide-react";

const coverageAreas = [
  "Pozoblanco",
  "Villanueva de Córdoba",
  "Alcaracejos",
  "Añora",
  "Dos Torres",
  "Pedroche",
  "El Viso",
  "Villaralto",
  "Hinojosa del Duque",
  "Belalcázar",
  "Cardeña",
  "Santa Eufemia"
];

export function CoverageSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="Dónde Trabajamos"
          title="Zona de Cobertura"
          description="Ofrecemos nuestros servicios en Pozoblanco y la comarca de Los Pedroches"
          centered
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mapa Real Embebido */}
          <div>
            <div className="aspect-square bg-neutral-200 rounded-xl overflow-hidden relative shadow-md border border-neutral-200">
              <iframe
                src="https://maps.google.com/maps?q=Pozoblanco&t=&z=10&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de cobertura en Pozoblanco"
              ></iframe>
              
              {/* Etiqueta flotante */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md pointer-events-none z-10 border border-neutral-100">
                <div className="flex items-center text-sm">
                  <Navigation className="h-4 w-4 text-primary mr-2" />
                  <span className="font-semibold text-secondary">Radio: 30km</span>
                </div>
              </div>
            </div>
          </div>

          {/* Información */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-secondary mb-4">
              Principales Áreas de Servicio
            </h3>
            <p className="text-neutral-800/80 mb-6">
              Trabajamos principalmente en Pozoblanco y municipios cercanos, con un
              radio de cobertura de aproximadamente 30 kilómetros. Para
              proyectos especiales, podemos valorar distancias mayores.
            </p>

            {/* Lista de áreas */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {coverageAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm text-neutral-800/70"
                >
                  <div className="h-2 w-2 bg-primary rounded-full mr-2 shrink-0"></div>
                  <span className="truncate">{area}</span>
                </div>
              ))}
            </div>

            {/* Contacto rápido */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-secondary mb-4">
                  ¿Tu zona no aparece en la lista?
                </h4>
                <p className="text-sm text-neutral-800/70 mb-4">
                  Contáctanos y te diremos si podemos trabajar en tu ubicación.
                  Siempre intentamos adaptarnos a las necesidades de nuestros
                  clientes.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+34647684443"
                    className="flex items-center text-sm text-primary hover:text-primary-dark transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    647 684 443
                  </a>
                  <a
                    href="mailto:contacto@raulalbanil.com"
                    className="flex items-center text-sm text-primary hover:text-primary-dark transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    contacto@raulalbanil.com
                  </a>
                  <div className="flex items-center text-sm text-neutral-800/60">
                    <Clock className="h-4 w-4 mr-2" />
                    Lun - Vie: 8:00 - 18:00
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}