"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight, ChevronRight } from "lucide-react"; // Importado ChevronRight
import { projects } from "@/data/projects";
import { ProjectModal } from "@/components/projects/ProjectModal";
import type { Project } from "@/types";

export function ProjectsSection() {
  // Estado para controlar qué proyecto está seleccionado
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Solo mostramos los primeros 3 proyectos en la home
  const recentProjects = projects.slice(0, 3);

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            subtitle="Nuestro Trabajo"
            title="Proyectos Destacados"
            description="Explora algunos de nuestros últimos trabajos de reforma y restauración"
            className="mb-0"
          />
          <Button asChild variant="outline" className="shrink-0 border-neutral-300 text-neutral-700 hover:bg-neutral-100">
            <Link href="/proyectos">
              Ver Todos los Proyectos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-neutral-100 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 shrink-0">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">Ver detalles →</p>
                  </div>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3 gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none capitalize text-xs px-2.5 py-0.5 rounded-full font-medium">
                    {project.category}
                  </Badge>
                  <span className="text-xs text-neutral-500 font-medium">
                    {new Date(project.date).getFullYear()}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-secondary mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-700 text-sm line-clamp-2 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                {/* Botón inferior de 'Ver Más' (mismos estilos que en la galería) */}
                <div className="mt-5 pt-4 border-t border-neutral-100">
                  <Button 
                    variant="ghost" 
                    className="w-full text-primary hover:text-primary-dark hover:bg-primary/5 text-sm font-semibold justify-between px-2 h-9"
                    onClick={() => setSelectedProject(project)}
                  >
                    Ver Detalles
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integración del Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}