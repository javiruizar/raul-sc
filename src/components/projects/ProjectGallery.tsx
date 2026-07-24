"use client";

import { useState } from "react";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectCard } from "./ProjectCard";
import type { Project, ProjectCategory } from "@/types";

interface ProjectGalleryProps {
  projects: Project[];
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <ProjectFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        projectCount={filteredProjects.length}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-lg text-neutral-800/60">
            No hay proyectos en esta categoría.
          </p>
        </div>
      )}
    </>
  );
}
