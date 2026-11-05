import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceContent } from "@/components/services/ServiceContent";
import { RelatedProjects } from "@/components/services/RelatedProjects";
import { RelatedServices } from "@/components/services/RelatedServices";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Reformas integrales en Pozoblanco",
  description: "Reformas integrales de viviendas, casas de pueblo y pisos en Pozoblanco, Villanueva de Córdoba y Los Pedroches. Presupuesto sin compromiso.",
  path: "/servicios/reformas-integrales",
});

export default function ReformasIntegralesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reformas Integrales",
    serviceType: "Reformas Integrales de Viviendas",
    description:
      "Reformas integrales de viviendas, casas de pueblo y pisos en Pozoblanco, Villanueva de Córdoba y Los Pedroches. Presupuesto sin compromiso.",
    provider: { "@id": siteConfig.businessId },
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
              Reformas integrales en Pozoblanco
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Transformamos completamente tu vivienda, desde la planificación inicial hasta la entrega de llaves. 
              Servicio profesional en Pozoblanco y Los Pedroches.
            </p>
          </div>
        </div>
      </section>

      <ServiceContent serviceId="reformas-integrales" />
      <RelatedProjects serviceId="reformas-integrales" />
      <RelatedServices currentId="reformas-integrales" />
    </>
  );
}
