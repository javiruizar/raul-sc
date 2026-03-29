"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsSection() {
  const router = useRouter();
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
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => router.push(`/proyectos#${project.id}`)}
            />
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