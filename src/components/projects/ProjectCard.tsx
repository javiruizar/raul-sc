import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import type { Project } from "@/types";

const categoryLabels = {
  reformas: "Reformas",
  albañileria: "Albañilería",
  restauracion: "Restauración",
  construccion: "Construcción",
  otros: "Otros",
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  // Formatear fecha
  const formattedDate = new Date(project.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
  });

  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      {/* Imagen placeholder */}
      <div className="relative h-64 bg-gradient-to-br from-neutral-200 to-neutral-300 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
          <div className="text-center">
            <div className="text-6xl mb-2">🏗️</div>
            <p className="text-sm">Imagen del proyecto</p>
          </div>
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white font-semibold text-lg">Ver detalles →</p>
          </div>
        </div>

        {/* Badge de categoría */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary hover:bg-primary-dark">
            {categoryLabels[project.category]}
          </Badge>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-800/70 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center justify-between text-xs text-neutral-800/60">
          {project.location && (
            <div className="flex items-center">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              {project.location}
            </div>
          )}
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            {formattedDate}
          </div>
        </div>
      </div>
    </div>
  );
}
