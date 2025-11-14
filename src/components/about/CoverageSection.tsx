import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const coverageAreas = [
  "Madrid Capital",
  "Alcalá de Henares",
  "Torrejón de Ardoz",
  "Alcobendas",
  "Las Rozas",
  "Majadahonda",
  "Pozuelo de Alarcón",
  "Getafe",
  "Leganés",
  "Móstoles",
  "Fuenlabrada",
  "Parla",
];

export function CoverageSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="Dónde Trabajamos"
          title="Zona de Cobertura"
          description="Ofrecemos nuestros servicios en Madrid y alrededores"
          centered
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mapa placeholder */}
          <div>
            <div className="aspect-square bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                <div className="text-center">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <p className="text-lg font-semibold">Mapa de Cobertura</p>
                  <p className="text-sm mt-2">Madrid y 50km alrededor</p>
                </div>
              </div>
              {/* Decorative pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="h-12 w-12 bg-primary rounded-full animate-ping absolute opacity-75"></div>
                  <div className="h-12 w-12 bg-primary rounded-full relative flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
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
              Trabajamos principalmente en Madrid y municipios cercanos, con un
              radio de cobertura de aproximadamente 50 kilómetros. Para
              proyectos especiales, podemos valorar distancias mayores.
            </p>

            {/* Lista de áreas */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {coverageAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm text-neutral-800/70"
                >
                  <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                  {area}
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
                    href="tel:+34600000000"
                    className="flex items-center text-sm text-primary hover:text-primary-dark transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    600 000 000
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
