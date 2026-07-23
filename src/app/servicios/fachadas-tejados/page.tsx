import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Arreglo de Fachadas y Tejados en Pozoblanco | Raúl Sánchez",
  description: "Reparación de goteras, rehabilitación de tejados e impermeabilización de fachadas en Pozoblanco y Los Pedroches. Especialistas en altura.",
  alternates: {
    canonical: "https://raul.javierruiz.org/servicios/fachadas-tejados",
  },
};

export default function FachadasTejadosPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fachadas y Tejados",
    serviceType: "Rehabilitación de Fachadas y Tejados",
    description:
      "Reparación de goteras, rehabilitación de tejados e impermeabilización de fachadas en Pozoblanco y Los Pedroches. Especialistas en altura.",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Raúl Sánchez Construcciones",
      url: "https://raul.javierruiz.org",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Los Pedroches, Córdoba",
    },
    url: "https://raul.javierruiz.org/servicios/fachadas-tejados",
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge className="mb-6 bg-primary hover:bg-primary-dark">
              Servicio Exterior
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Fachadas y Tejados
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Protege tu hogar de las inclemencias del tiempo. Solucionamos problemas de humedad, goteras y envejecimiento estructural en exteriores.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Impermeabilización y Aislamiento"
            title="El exterior de tu casa como nuevo"
            description="Una fachada o tejado en mal estado puede derivar en graves problemas estructurales. Nosotros lo prevenimos."
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-8 text-neutral-800">
            <div>
              <p className="mb-4 leading-relaxed">
                Tanto si necesitas limpiar o pintar tu fachada, como si tienes urgencias por filtraciones y goteras en la cubierta, actuamos con rapidez y usamos materiales hidrófugos de alta calidad.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Reparación de tejados:</strong> Sustitución de tejas rotas y reconstrucción de la cubierta (teja árabe, mixta o pizarra).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Impermeabilizaciones:</strong> Sellado de azoteas, terrazas y cubiertas planas para evitar goteras.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Rehabilitación de fachadas:</strong> Picado de mortero viejo, enfoscado y recubrimientos (monocapa o pintura aislante).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Saneamiento:</strong> Tratamientos antihumedad y limpieza.</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold font-heading text-secondary mb-4">Actúa antes de las lluvias</h3>
              <p className="text-neutral-600 mb-8">
                No esperes a tener daños mayores en el interior. Pide la valoración de un albañil experto.
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contacto">
                  Contactar para Revisión <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
