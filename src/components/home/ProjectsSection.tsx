import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/data/projects";

const categoryLabels = {
  reformas: "Reformas",
  albañileria: "Albañilería",
  restauracion: "Restauración",
  construccion: "Construcción",
  otros: "Otros",
};

export function ProjectsSection() {
  // Mostrar solo los primeros 6 proyectos
  const featuredProjects = projects.slice(0, 6);

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <SectionHeading
          subtitle="Nuestros Trabajos"
          title="Proyectos Realizados"
          description="Descubre algunos de nuestros proyectos más destacados y la calidad de nuestro trabajo"
          centered
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Imagen placeholder - reemplazar con imágenes reales */}
              <div className="relative h-64 bg-gradient-to-br from-neutral-200 to-neutral-300 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🏗️</div>
                    <p className="text-sm">Imagen del proyecto</p>
                  </div>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={`/proyectos#${project.id}`}
                    className="text-white font-semibold flex items-center"
                  >
                    Ver Detalles
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">
                    {categoryLabels[project.category]}
                  </Badge>
                  {project.location && (
                    <div className="flex items-center text-xs text-neutral-800/60">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </div>
                  )}
                </div>
                <h3 className="font-heading text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-800/70 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/proyectos">
              Ver Todos los Proyectos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
