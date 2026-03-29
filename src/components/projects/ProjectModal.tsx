"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import type { Project } from "@/types";

const categoryLabels = {
  reformas: "Reformas",
  albanileria: "Albañilería",
  restauracion: "Restauración",
  construccion: "Construcción",
  otros: "Otros",
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  // Formatear fecha
  const formattedDate = new Date(project.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
  });

  // Reset image index cuando cambia el proyecto
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setCurrentImageIndex(0);
      onClose();
    }
  };

  return (
    <Dialog open={!!project} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-heading font-bold text-secondary mb-2">
                {project.title}
              </DialogTitle>
              <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-800/60">
                <Badge>{categoryLabels[project.category]}</Badge>
                {project.location && (
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                )}
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formattedDate}
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Carousel de imágenes */}
        <div className="relative mt-4">
          <div className="relative h-96 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-lg overflow-hidden">
            {/* Placeholder de imagen */}
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
              <div className="text-center">
                <div className="text-8xl mb-4">🏗️</div>
                <p className="text-lg">
                  Imagen {currentImageIndex + 1} de {project.images.length}
                </p>
                <p className="text-sm mt-2 text-neutral-500">
                  {project.images[currentImageIndex]}
                </p>
              </div>
            </div>

            {/* Controles del carousel */}
            {project.images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "w-8 bg-white"
                          : "w-2 bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Descripción */}
        <DialogDescription className="text-base text-neutral-800 leading-relaxed mt-6">
          {project.description}
        </DialogDescription>

        {/* Información adicional */}
        <div className="mt-6 p-6 bg-neutral-50 rounded-lg">
          <h4 className="font-semibold text-secondary mb-3">
            Detalles del Proyecto
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-neutral-800/60">Categoría:</span>
              <span className="ml-2 font-medium text-secondary">
                {categoryLabels[project.category]}
              </span>
            </div>
            <div>
              <span className="text-neutral-800/60">Fecha:</span>
              <span className="ml-2 font-medium text-secondary">
                {formattedDate}
              </span>
            </div>
            {project.location && (
              <div>
                <span className="text-neutral-800/60">Ubicación:</span>
                <span className="ml-2 font-medium text-secondary">
                  {project.location}
                </span>
              </div>
            )}
            <div>
              <span className="text-neutral-800/60">Imágenes:</span>
              <span className="ml-2 font-medium text-secondary">
                {project.images.length}
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button asChild className="flex-1">
            <a href="/presupuesto">Solicitar Presupuesto Similar</a>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <a href="/contacto">Contactar</a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
