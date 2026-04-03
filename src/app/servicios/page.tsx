import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { ServicesFAQ } from "@/components/services/ServicesFAQ";
import { ArrowRight, Phone } from "lucide-react";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Servicios de Albañilería y Reformas | Raúl Albañil",
  description:
    "Ofrecemos servicios completos de albañilería, reformas integrales, restauración de casas antiguas, reformas de baños y cocinas, y mucho más.",
  keywords: [
    "servicios albañilería",
    "reformas integrales",
    "restauración casas antiguas",
    "reformas baños",
    "reformas cocinas",
    "fachadas",
    "trabajos piedra",
  ],
};

export default function ServiciosPage() {
  // Destacar el servicio de restauración (índice 1)
  const featuredServiceId = "restauracion-casas-antiguas";

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge className="mb-6 bg-primary hover:bg-primary-dark">
              Servicios Profesionales
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Nuestros Servicios de Albañilería y Reformas
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Soluciones completas para todo tipo de proyectos de construcción,
              reforma y restauración. Calidad garantizada y más de 20 años de
              experiencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link href="/presupuesto">
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-white hover:bg-white/90">
                <a href="tel:+34600000000">
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar Ahora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Lo que hacemos"
            title="Todos Nuestros Servicios"
            description="Ofrecemos una amplia gama de servicios para cubrir todas tus necesidades"
            centered
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                featured={service.id === featuredServiceId}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Why Choose Our Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Nuestro Compromiso"
            title="¿Por qué confiar en nosotros?"
            centered
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl">🏆</span>
                </div>
              </div>
              <h3 className="font-heading text-lg font-bold text-secondary mb-2">
                Experiencia Comprobada
              </h3>
              <p className="text-sm text-neutral-800/70">
                Más de 20 años en el sector con cientos de proyectos exitosos
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl">✓</span>
                </div>
              </div>
              <h3 className="font-heading text-lg font-bold text-secondary mb-2">
                Calidad Garantizada
              </h3>
              <p className="text-sm text-neutral-800/70">
                Materiales de primera calidad y garantía de 2 años en todos los trabajos
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl">⏱️</span>
                </div>
              </div>
              <h3 className="font-heading text-lg font-bold text-secondary mb-2">
                Cumplimiento de Plazos
              </h3>
              <p className="text-sm text-neutral-800/70">
                Respetamos los tiempos acordados y te mantenemos informado
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl">💰</span>
                </div>
              </div>
              <h3 className="font-heading text-lg font-bold text-secondary mb-2">
                Presupuestos Sin Sorpresas
              </h3>
              <p className="text-sm text-neutral-800/70">
                Presupuestos detallados y transparentes, sin costes ocultos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ServicesFAQ />

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solicita un presupuesto gratuito y sin compromiso. Te respondemos en 24-48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/presupuesto">
                Solicitar Presupuesto Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-white hover:bg-white/90">
              <Link href="/proyectos">Ver Proyectos Realizados</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
