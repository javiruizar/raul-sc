"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // Añadido para poder renderizar las imágenes
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
      {/* Ajustado el ancho y padding en móviles (w-[95vw], p-4) */}
      <DialogContent className="bg-neutral-100 max-w-4xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full p-4 sm:p-6 rounded-xl">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4 mt-2 sm:mt-0">
            <div className="flex-1 text-left">
              <DialogTitle className="text-xl sm:text-2xl font-heading font-bold text-secondary mb-3 leading-tight">
                {project.title}
              </DialogTitle>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-600 font-medium">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                  {categoryLabels[project.category]}
                </Badge>
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
        </DialogHeader>

        {/* Carousel de imágenes */}
        <div className="relative mt-2 sm:mt-4">
          {/* Ajuste de altura responsive: h-64 en móvil, h-96 en PC */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full bg-neutral-100 rounded-lg overflow-hidden shadow-inner">
            
            <AnimatePresence mode="wait">
    <motion.div
      key={currentImageIndex} // Esto es clave para que detecte el cambio
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="absolute inset-0 h-full w-full"
    >
      <Image
        src={project.images[currentImageIndex]}
        alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 800px"
        priority
      />
    </motion.div>
  </AnimatePresence>

            {/* Controles del carousel */}
            {project.images.length > 1 && (
              <>
                {/* Botón Anterior: Fondo blanco 90% y texto oscuro para máximo contraste */}
                <Button
                  size="icon"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-900 shadow-md rounded-full h-10 w-10 sm:h-12 sm:w-12 z-10 transition-transform hover:scale-105"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
                </Button>
                
                {/* Botón Siguiente */}
                <Button
                  size="icon"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-900 shadow-md rounded-full h-10 w-10 sm:h-12 sm:w-12 z-10 transition-transform hover:scale-105"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
                </Button>

                {/* Indicadores (Puntitos abajo) */}
                {/* Se añade un fondo negro semitransparente para que los puntos blancos destaquen sobre fotos claras */}
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 bg-black/40 px-3 py-1.5 rounded-full z-10 backdrop-blur-sm">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "w-5 sm:w-8 bg-white"
                          : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/80"
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
        <DialogDescription className="text-sm sm:text-base text-neutral-700 leading-relaxed mt-4 sm:mt-6">
          {project.description}
        </DialogDescription>

        {/* Información adicional */}
        <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-neutral-50 border border-neutral-100 rounded-lg">
          <h4 className="font-semibold text-secondary mb-3 text-sm sm:text-base">
            Detalles del Proyecto
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center">
              <span className="text-neutral-500 w-20">Categoría:</span>
              <span className="font-medium text-secondary">
                {categoryLabels[project.category]}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-neutral-500 w-20">Fecha:</span>
              <span className="font-medium text-secondary">
                {formattedDate}
              </span>
            </div>
            {project.location && (
              <div className="flex items-center">
                <span className="text-neutral-500 w-20">Ubicación:</span>
                <span className="font-medium text-secondary">
                  {project.location}
                </span>
              </div>
            )}
            <div className="flex items-center">
              <span className="text-neutral-500 w-20">Imágenes:</span>
              <span className="font-medium text-secondary">
                {project.images.length}
              </span>
            </div>
          </div>
        </div>

        {/* CTA (Botones de acción) */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button asChild variant="outline" className="flex-1 w-full text-sm sm:text-base h-11 sm:h-10">
            <a href="/presupuesto">Solicitar Presupuesto Similar</a>
          </Button>
          <Button asChild variant="secondary" className="flex-1 w-full text-sm sm:text-base h-11 sm:h-10 ">
            <a href="/contacto">Contactar</a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}