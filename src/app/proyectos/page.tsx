import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ArrowRight, Award, CheckCircle2, Users } from "lucide-react";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyectos Realizados | Raúl Albañil",
  description:
    "Descubre nuestra galería de proyectos completados: reformas integrales, restauración de casas antiguas, trabajos de albañilería y más. Calidad garantizada.",
  keywords: [
    "proyectos albañilería",
    "reformas realizadas",
    "galería proyectos",
    "trabajos completados",
    "restauración casas",
    "antes y después",
  ],
};

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
              Proyectos Realizados
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Explora nuestra galería de proyectos completados con éxito. Cada
              trabajo refleja nuestro compromiso con la calidad y la satisfacción
              del cliente.
            </p>
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center">
                <Award className="h-6 w-6 mr-2 text-accent" />
                <span className="font-semibold">500+ Proyectos</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-6 w-6 mr-2 text-accent" />
                <span className="font-semibold">100% Satisfacción</span>
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
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <h3 className="font-heading text-lg font-semibold text-secondary mb-2">
                Proyectos Completados
              </h3>
              <p className="text-sm text-neutral-800/70">
                Más de dos décadas transformando hogares
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <h3 className="font-heading text-lg font-semibold text-secondary mb-2">
                Clientes Satisfechos
              </h3>
              <p className="text-sm text-neutral-800/70">
                Valoración perfecta en todos nuestros trabajos
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">2 años</div>
              <h3 className="font-heading text-lg font-semibold text-secondary mb-2">
                Garantía Incluida
              </h3>
              <p className="text-sm text-neutral-800/70">
                Respaldamos la calidad de nuestro trabajo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-2xl">★</span>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-neutral-800 italic leading-relaxed mb-6">
  &quot;Raúl restauró nuestra casa rural del siglo XIX con un cuidado
  excepcional. Respetó cada detalle original mientras modernizaba
  las instalaciones. Un trabajo impecable.&quot;
</blockquote>
              <div>
                <p className="font-semibold text-secondary">María González</p>
                <p className="text-sm text-neutral-800/60">Propietaria Casa Rural</p>
              </div>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/contacto">Ver Más Testimonios</Link>
            </Button>
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
