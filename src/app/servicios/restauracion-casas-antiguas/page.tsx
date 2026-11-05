import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceContent } from "@/components/services/ServiceContent";
import { RelatedProjects } from "@/components/services/RelatedProjects";
import { RelatedServices } from "@/components/services/RelatedServices";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Restauración de casas antiguas en Pozoblanco",
  description: "Expertos en restauración y rehabilitación de casas antiguas y rústicas en Los Pedroches. Conservamos bóvedas, muros de piedra y el encanto original.",
  path: "/servicios/restauracion-casas-antiguas",
});

export default function RestauracionCasasPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Restauración de Casas Antiguas",
    serviceType: "Restauración y Rehabilitación de Edificaciones Históricas",
    description:
      "Expertos en restauración y rehabilitación de casas antiguas y rústicas en Los Pedroches. Conservamos bóvedas, muros de piedra y el encanto original.",
    provider: { "@id": siteConfig.businessId },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Los Pedroches, Córdoba",
    },
    url: "https://raul.javierruiz.org/servicios/restauracion-casas-antiguas",
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
              Restauración de casas antiguas en Pozoblanco
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Recuperamos el esplendor de las edificaciones históricas de Los Pedroches combinando técnicas tradicionales con confort moderno.
            </p>
          </div>
        </div>
      </section>

      <ServiceContent serviceId="restauracion-casas-antiguas" />
      <RelatedProjects serviceId="restauracion-casas-antiguas" />
      <RelatedServices currentId="restauracion-casas-antiguas" />
    </>
  );
}
