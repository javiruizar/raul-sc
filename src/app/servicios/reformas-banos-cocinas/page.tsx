import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Reformas de Baños y Cocinas en Pozoblanco | Raúl Sánchez",
  description: "Reformamos y modernizamos tu baño o cocina en Pozoblanco y Los Pedroches. Alicatados, cambios de bañera por ducha y fontanería.",
  alternates: {
    canonical: "https://raul.javierruiz.org/servicios/reformas-banos-cocinas",
  },
};

export default function ReformasBanosCocinasPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reformas de Baños y Cocinas",
    serviceType: "Reformas de Baños y Cocinas",
    description:
      "Reformamos y modernizamos tu baño o cocina en Pozoblanco y Los Pedroches. Alicatados, cambios de bañera por ducha y fontanería.",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Raúl Sánchez Construcciones",
      url: "https://raul.javierruiz.org",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Los Pedroches, Córdoba",
    },
    url: "https://raul.javierruiz.org/servicios/reformas-banos-cocinas",
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
              Reformas de Baños y Cocinas
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Moderniza los espacios más importantes de tu vivienda y mejora el confort diario con materiales resistentes y actuales.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Renovación Total"
            title="Funcionalidad y Diseño"
            description="Actualizamos tus estancias húmedas para hacerlas más cómodas, seguras y visualmente espectaculares."
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-8 text-neutral-800">
            <div>
              <p className="mb-4 leading-relaxed">
                En Raúl Sánchez Albañil nos enorgullece nuestro meticuloso trabajo de alicatado y solado, garantizando que tanto baños como cocinas queden perfectamente impermeabilizados y nivelados.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Cambio de bañera a ducha:</strong> Reformas rápidas para aumentar la accesibilidad y seguridad del baño.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Solados y alicatados premium:</strong> Instalación de cerámicas modernas, gres, mosaicos, y gran formato.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Renovación de instalaciones:</strong> Sustitución de tuberías de fontanería antiguas y nuevo cableado eléctrico.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Pladur e iluminación:</strong> Techos de escayola o pladur con focos empotrados.</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold font-heading text-secondary mb-4">¿Soñando con un baño nuevo?</h3>
              <p className="text-neutral-600 mb-8">
                Realizamos presupuestos rápidos y detallados para reformas de baños y cocinas en Pozoblanco y la comarca.
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/presupuesto">
                  Pedir Presupuesto Gratis <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
