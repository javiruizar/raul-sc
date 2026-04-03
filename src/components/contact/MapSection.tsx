import { SectionHeading } from "@/components/shared/SectionHeading";
import { Navigation } from "lucide-react";

export function MapSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <SectionHeading
          subtitle="Dónde Estamos"
          title="Nuestra Zona de Trabajo"
          description="Trabajamos en Pozoblanco y la comarca de Los Pedroches con un radio de cobertura de 30km"
          centered
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Mapa Real Embebido de Google Maps */}
          <div className="relative aspect-[4/3] bg-neutral-200 rounded-xl overflow-hidden shadow-md border border-neutral-200">
            <iframe
              src="https://maps.google.com/maps?q=Pozoblanco,Cordoba,Spain&t=&z=10&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de cobertura en Pozoblanco"
            ></iframe>

            {/* Etiqueta de radio flotante sobre el mapa */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md pointer-events-none z-10 border border-neutral-100">
              <div className="flex items-center text-sm">
                <Navigation className="h-4 w-4 text-primary mr-2" />
                <span className="font-semibold text-secondary">Radio: 30km</span>
              </div>
            </div>
          </div>

          {/* Información y zonas */}
          <div className="space-y-6 text-left">
            <div>
              <h3 className="font-heading text-2xl font-bold text-secondary mb-4">
                Cobertura en Los Pedroches
              </h3>
              <p className="text-neutral-800/80 leading-relaxed mb-4">
                Nuestro equipo se desplaza por toda la comarca de Los Pedroches y
                municipios cercanos. Trabajamos principalmente en un radio de
                30 kilómetros desde Pozoblanco.
              </p>
              <p className="text-neutral-800/80 leading-relaxed">
                Para proyectos especiales o de mayor envergadura, podemos
                valorar distancias superiores. No dudes en consultarnos tu
                ubicación específica.
              </p>
            </div>

            {/* Principales zonas (Actualizadas a la comarca) */}
            <div>
              <h4 className="font-semibold text-secondary mb-3">
                Principales Zonas de Servicio:
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Pozoblanco",
                  "Villanueva de Córdoba",
                  "Alcaracejos",
                  "Añora",
                  "Dos Torres",
                  "Pedroche",
                ].map((zone, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-neutral-800/70 bg-white p-3 rounded-lg shadow-sm border border-neutral-100"
                  >
                    <div className="h-2 w-2 bg-primary rounded-full mr-2 shrink-0"></div>
                    <span className="truncate">{zone}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA con el teléfono real */}
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-semibold text-secondary mb-2">
                ¿No estás seguro si llegamos a tu zona?
              </h4>
              <p className="text-sm text-neutral-800/70 mb-4">
                Contáctanos y te confirmaremos si podemos trabajar en tu ubicación.
              </p>
              <a
                href="tel:+34647684443"
                className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Llamar ahora: 647 684 443 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}