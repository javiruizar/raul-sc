import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceContent } from "@/components/services/ServiceContent";
import { RelatedProjects } from "@/components/services/RelatedProjects";
import { RelatedServices } from "@/components/services/RelatedServices";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Fachadas y tejados en Pozoblanco",
  description: "Reparación de goteras, retejados e impermeabilización de tejados y fachadas en Pozoblanco y Los Pedroches. Visita y presupuesto gratis.",
  path: "/servicios/fachadas-tejados",
});

export default function FachadasTejadosPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fachadas y Tejados",
    serviceType: "Rehabilitación de Fachadas y Tejados",
    description:
      "Reparación de goteras, retejados e impermeabilización de tejados y fachadas en Pozoblanco y Los Pedroches. Visita y presupuesto gratis.",
    provider: { "@id": siteConfig.businessId },
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
              Fachadas y tejados en Pozoblanco
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Protege tu hogar de las inclemencias del tiempo. Solucionamos problemas de humedad, goteras y envejecimiento estructural en exteriores.
            </p>
          </div>
        </div>
      </section>

      <ServiceContent serviceId="fachadas-tejados" />
      <RelatedProjects serviceId="fachadas-tejados" />
      <RelatedServices currentId="fachadas-tejados" />
    </>
  );
}
