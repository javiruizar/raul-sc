import Link from "next/link";
import { getImageProps } from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const heroImage = {
  alt: "Albañil realizando reforma en Pozoblanco, Los Pedroches",
  fill: true,
  sizes: "100vw",
  quality: 85,
} as const;

// Un solo <img> con <picture>: cada dispositivo descarga solo su imagen. Con dos
// <Image priority> ocultas por CSS, el navegador precargaba las dos en móvil.
const { props: desktopImage } = getImageProps({ ...heroImage, src: "/images/hero-image-pool.webp" });
const { props: mobileImage } = getImageProps({ ...heroImage, src: "/images/hero-image.webp" });

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex items-center min-h-[80vh] py-20 md:py-32 overflow-hidden"
    >
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktopImage.srcSet} sizes={heroImage.sizes} />
        {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element -- el alt llega en mobileImage */}
        <img {...mobileImage} loading="eager" fetchPriority="high" className="object-cover object-center" />
      </picture>

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
            Albañil en Pozoblanco y Los Pedroches
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Más de 20 años reformando viviendas en la comarca de Los Pedroches.
            Especialistas en restauración de casas antiguas, reformas integrales
            y albañilería en Pozoblanco, Villanueva de Córdoba,
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