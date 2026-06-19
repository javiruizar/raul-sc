import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 md:py-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Badge className="mb-6 bg-primary hover:bg-primary-dark">
            Tu Albañil de Confianza en Pozoblanco
          </Badge>
          <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
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
            <Button asChild size="lg" variant="outline" className="text-lg text-black bg-white hover:bg-white/90">
              <Link href="/proyectos">Ver Proyectos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}