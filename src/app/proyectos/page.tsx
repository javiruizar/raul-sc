import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ArrowRight, Award, Users } from "lucide-react";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Obras y reformas en Los Pedroches",
  description:
    "Obras y reformas realizadas en Pozoblanco y Los Pedroches: reformas integrales, restauración de casas antiguas, patios y tejados. Más de 50 proyectos.",
  path: "/proyectos",
});

export default function ProyectosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">            <Badge className="mb-6 bg-primary hover:bg-primary-dark">
              Nuestros Trabajos
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Obras y reformas en Los Pedroches
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Explora nuestra galería de proyectos completados con éxito. Cada
              trabajo refleja nuestro compromiso con la calidad y la satisfacción
              del cliente.
            </p>
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center">
                <Award className="h-6 w-6 mr-2 text-accent" />
                <span className="font-semibold">50+ Proyectos</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-accent" />
                <span className="font-semibold">20+ Años</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Galería"
            title="Explora Nuestros Trabajos"
            description="Filtra por categoría para ver proyectos específicos"
            centered
            className="mb-12"
          />

          <ProjectGallery projects={projects} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 text-center max-w-3xl mx-auto">
            <div className="p-8 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <h3 className="font-heading text-lg font-semibold text-secondary mb-2">
                Proyectos Completados
              </h3>
              <p className="text-sm text-neutral-800/70">
                Más de dos décadas transformando hogares
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <h3 className="font-heading text-lg font-semibold text-secondary mb-2">
                Años de Experiencia
              </h3>
              <p className="text-sm text-neutral-800/70">
                Podemos enseñarte obras terminadas que ya usan sus propietarios
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            ¿Te gustaría un proyecto similar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Cuéntanos tu idea y te ayudaremos a hacerla realidad con la misma
            calidad que ves en nuestros proyectos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/presupuesto">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-white hover:bg-white/90">
              <Link href="/servicios">Ver Nuestros Servicios</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
