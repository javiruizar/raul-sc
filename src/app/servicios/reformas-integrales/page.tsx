import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Reformas Integrales en Pozoblanco y Los Pedroches | Raúl Sánchez",
  description: "Especialistas en reformas integrales de viviendas y locales en Pozoblanco, Villanueva de Córdoba y toda la comarca de Los Pedroches. Presupuesto sin compromiso.",
  alternates: {
    canonical: "https://raul.javierruiz.org/servicios/reformas-integrales",
  },
};

export default function ReformasIntegralesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reformas Integrales",
    serviceType: "Reformas Integrales de Viviendas",
    description:
      "Especialistas en reformas integrales de viviendas y locales en Pozoblanco, Villanueva de Córdoba y toda la comarca de Los Pedroches. Presupuesto sin compromiso.",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Raúl Sánchez Construcciones",
      url: "https://raul.javierruiz.org",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Los Pedroches, Córdoba",
    },
    url: "https://raul.javierruiz.org/servicios/reformas-integrales",
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge className="mb-6 bg-primary hover:bg-primary-dark">
              Servicio Especializado
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Reformas Integrales
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Transformamos completamente tu vivienda, desde la planificación inicial hasta la entrega de llaves. 
              Servicio profesional en Pozoblanco y Los Pedroches.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="¿Qué incluye?"
            title="Tu reforma en buenas manos"
            description="Gestionamos y ejecutamos todos los oficios necesarios para que no tengas que preocuparte por nada."
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-8 text-neutral-800">
            <div>
              <p className="mb-4 leading-relaxed">
                Entendemos que una reforma integral es una decisión importante. Por eso, nos encargamos de todo el proceso de transformación de tu casa, piso o local comercial en Pozoblanco y municipios cercanos.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Demolición y limpieza:</strong> Retirada de escombros y preparación estructural.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Albañilería y tabiquería:</strong> Redistribución de espacios según tus necesidades.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Instalaciones completas:</strong> Renovación de fontanería, electricidad y climatización.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Acabados impecables:</strong> Solados, alicatados, pintura y carpintería de calidad.</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold font-heading text-secondary mb-4">¿Hablamos de tu proyecto?</h3>
              <p className="text-neutral-600 mb-8">
                Cuéntanos qué tienes en mente y te elaboraremos un presupuesto detallado sin coste y sin compromiso.
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/presupuesto">
                  Solicitar Presupuesto Gratuito <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
