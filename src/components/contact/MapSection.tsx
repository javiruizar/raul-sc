import { SectionHeading } from "@/components/shared/SectionHeading";
import { MapPin, Navigation } from "lucide-react";

export function MapSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <SectionHeading
          subtitle="Dónde Estamos"
          title="Nuestra Zona de Trabajo"
          description="Trabajamos en Madrid y alrededores con un radio de cobertura de 50km"
          centered
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Mapa Placeholder */}
          <div className="relative aspect-[4/3] bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                <p className="text-lg font-semibold mb-2">Mapa Interactivo</p>
                <p className="text-sm">Google Maps se integrará aquí</p>
                <p className="text-xs mt-2 text-neutral-500">
                  Madrid y 50km alrededor
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="h-16 w-16 bg-primary/20 rounded-full animate-ping absolute"></div>
                <div className="h-16 w-16 bg-primary rounded-full relative flex items-center justify-center shadow-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* Radius indicator */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
              <div className="flex items-center text-sm">
                <Navigation className="h-4 w-4 text-primary mr-2" />
                <span className="font-semibold">Radio: 50km</span>
              </div>
            </div>
          </div>

          {/* Información */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-bold text-secondary mb-4">
                Cobertura Completa en Madrid
              </h3>
              <p className="text-neutral-800/80 leading-relaxed mb-4">
                Nuestro equipo se desplaza por toda la Comunidad de Madrid y
                municipios cercanos. Trabajamos principalmente en un radio de
                50 kilómetros desde el centro de Madrid.
              </p>
              <p className="text-neutral-800/80 leading-relaxed">
                Para proyectos especiales o de mayor envergadura, podemos
                valorar distancias superiores. No dudes en consultarnos tu
                ubicación específica.
              </p>
            </div>

            {/* Principales zonas */}
            <div>
              <h4 className="font-semibold text-secondary mb-3">
                Principales Zonas de Servicio:
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Madrid Capital",
                  "Zona Norte",
                  "Zona Sur",
                  "Zona Este",
                  "Zona Oeste",
                  "Corredor del Henares",
                ].map((zone, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-neutral-800/70 bg-white p-3 rounded-lg"
                  >
                    <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                    {zone}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-semibold text-secondary mb-2">
                ¿No estás seguro si llegamos a tu zona?
              </h4>
              <p className="text-sm text-neutral-800/70 mb-4">
                Contáctanos y te confirmaremos si podemos trabajar en tu ubicación.
              </p>
              <a
                href="tel:+34600000000"
                className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Llamar ahora: 600 000 000 →
              </a>
            </div>
          </div>
        </div>

        {/* Nota sobre Google Maps */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-800/60">
            💡 <strong>Nota:</strong> Para integrar Google Maps real, necesitarás
            obtener una API key en{" "}
            <a
              href="https://console.cloud.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Cloud Console
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
