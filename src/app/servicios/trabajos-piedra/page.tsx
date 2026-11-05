import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceContent } from "@/components/services/ServiceContent";
import { RelatedProjects } from "@/components/services/RelatedProjects";
import { RelatedServices } from "@/components/services/RelatedServices";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Trabajos en piedra natural en Pozoblanco",
  description: "Especialistas en la construcción y restauración de muros de piedra, revestimientos rústicos y mampostería tradicional en la comarca de Los Pedroches.",
  path: "/servicios/trabajos-piedra",
});

export default function TrabajosPiedraPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Trabajos en Piedra Natural",
    serviceType: "Trabajos en Piedra",
    description:
      "Especialistas en la construcción y restauración de muros de piedra, revestimientos rústicos y mampostería tradicional en la comarca de Los Pedroches.",
    provider: { "@id": siteConfig.businessId },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Los Pedroches, Córdoba",
    },
    url: "https://raul.javierruiz.org/servicios/trabajos-piedra",
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge className="mb-6 bg-primary hover:bg-primary-dark">
              Servicio Artesanal
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Trabajos en piedra natural en Pozoblanco
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Mampostería tradicional y revestimientos en piedra natural. Aportamos durabilidad y la estética inconfundible de la arquitectura de la zona.
            </p>
          </div>
        </div>
      </section>

      <ServiceContent serviceId="trabajos-piedra" />
      <RelatedProjects serviceId="trabajos-piedra" />
      <RelatedServices currentId="trabajos-piedra" />
    </>
  );
}
