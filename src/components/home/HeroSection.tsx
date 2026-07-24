import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex items-center min-h-[80vh] py-20 md:py-32 overflow-hidden"
    >
      {/*
       * LCP optimizado: Next.js <Image priority> emite automáticamente
       * <link rel="preload" as="image"> en el <head>, garantizando que
       * el browser descargue la imagen Hero antes de renderizar.
       *
       * Dos imágenes: mobile (hero-image) / desktop (hero-image-pool).
       * Se ocultan con Tailwind para respetar el diseño responsive original.
       */}

      {/* Imagen móvil / tablet — oculta en lg */}
      <Image
        src="/images/hero-image.webp"
        alt="Albañil realizando reforma en Pozoblanco — Raúl Sánchez Construcciones"
        fill
        priority
        fetchPriority="high"
        quality={85}
        sizes="100vw"
        className="object-cover object-center block lg:hidden"
      />

      {/* Imagen desktop — visible solo en lg+ */}
      <Image
        src="/images/hero-image-pool.webp"
        alt="Obra de construcción en Los Pedroches — Raúl Sánchez Construcciones"
        fill
        priority
        fetchPriority="high"
        quality={85}
        sizes="100vw"
        className="object-cover object-center hidden lg:block"
      />

      {/* Overlay: mantiene el gradiente del diseño original */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-black/80" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white drop-shadow-sm">
          <Badge className="mb-6 bg-primary hover:bg-primary-dark">
            Tu Albañil de Confianza en Pozoblanco
          </Badge>
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
          >
            Reformas y Construcción en Pozoblanco y Los Pedroches
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Más de 20 años reformando viviendas en la comarca de Los Pedroches.
            Especialistas en restauración de casas antiguas, reformas integrales
            y construcción tradicional en Pozoblanco, Villanueva de Córdoba,
            Hinojosa del Duque y toda la comarca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="/presupuesto">
                Solicitar Presupuesto
                <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg text-black bg-white hover:bg-white/90"
            >
              <Link href="/proyectos">Ver Proyectos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}