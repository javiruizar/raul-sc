import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceContent } from "@/components/services/ServiceContent";
import { RelatedProjects } from "@/components/services/RelatedProjects";
import { RelatedServices } from "@/components/services/RelatedServices";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Albañilería general en Pozoblanco",
  description: "Trabajos de albañilería general en Pozoblanco y comarca. Construcción de muros, solados, tabiquería y pequeñas reparaciones por profesionales.",
  path: "/servicios/albanileria-general",
});

export default function AlbanileriaGeneralPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Albañilería General",
    serviceType: "Albañilería General",
    description:
      "Trabajos de albañilería general en Pozoblanco y comarca. Construcción de muros, solados, tabiquería y pequeñas reparaciones por profesionales.",
    provider: { "@id": siteConfig.businessId },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Los Pedroches, Córdoba",
    },
    url: "https://raul.javierruiz.org/servicios/albanileria-general",
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge className="mb-6 bg-primary hover:bg-primary-dark">
              Servicio Profesional
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Albañilería general en Pozoblanco
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Realizamos cualquier trabajo de albañilería que necesites, desde pequeños arreglos hasta muros, soleras y patios completos.
            </p>
          </div>
        </div>
      </section>

      <ServiceContent serviceId="albanileria-general" />
      <RelatedProjects serviceId="albanileria-general" />
      <RelatedServices currentId="albanileria-general" />
    </>
  );
}
