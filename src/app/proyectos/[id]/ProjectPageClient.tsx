"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-video lg:h-[600px] bg-neutral-100 rounded-xl overflow-hidden shadow-inner">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} — imagen ${currentIndex + 1} de ${images.length}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 900px"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <Button
            size="icon"
            aria-label="Imagen anterior"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-900 shadow-md rounded-full h-10 w-10 sm:h-12 sm:w-12 z-10 transition-transform hover:scale-105"
          >
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
          </Button>

          <Button
            size="icon"
            aria-label="Imagen siguiente"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-900 shadow-md rounded-full h-10 w-10 sm:h-12 sm:w-12 z-10 transition-transform hover:scale-105"
          >
            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 px-3 py-1.5 rounded-full z-10 backdrop-blur-sm">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Ir a imagen ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex
                  ? "w-5 sm:w-8 bg-white"
                  : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/80"
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
