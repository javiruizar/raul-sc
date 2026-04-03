import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { StorySection } from "@/components/about/StorySection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { CoverageSection } from "@/components/about/CoverageSection";
import { ArrowRight, Award, Target, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Raúl Albañil",
  description:
    "Conoce nuestra historia, valores y compromiso. Más de 20 años especializados en reformas y restauración de casas antiguas en Madrid.",
  keywords: [
    "sobre nosotros",
    "historia",
    "albañil Madrid",
    "empresa reformas",
    "valores",
    "experiencia",
  ],
};

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge className="mb-6 bg-primary hover:bg-primary-dark">
              Sobre Nosotros
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Construyendo Confianza Desde Hace Más de 20 Años
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Somos especialistas en reformas y restauración de casas antiguas.
              Cada proyecto es una oportunidad para demostrar nuestra pasión por
              la construcción y el respeto por la arquitectura tradicional.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <StorySection />

      {/* Mission & Vision */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-secondary mb-3">
                  Nuestra Misión
                </h3>
                <p className="text-neutral-800/70">
                  Transformar espacios preservando su esencia, utilizando
                  técnicas tradicionales y materiales de calidad para crear
                  hogares únicos y duraderos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-secondary mb-3">
                  Nuestra Visión
                </h3>
                <p className="text-neutral-800/70">
                  Ser el referente en restauración y reformas, reconocidos por
                  nuestra excelencia, compromiso y respeto por el patrimonio
                  arquitectónico.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-secondary mb-3">
                  Nuestro Compromiso
                </h3>
                <p className="text-neutral-800/70">
                  Garantizar la satisfacción total de nuestros clientes,
                  cumpliendo plazos, respetando presupuestos y manteniendo una
                  comunicación transparente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection />

      {/* Coverage Section */}
      <CoverageSection />

      {/* Certifications/Awards Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Experiencia y Profesionalidad
            </h2>
            <p className="text-lg text-neutral-800/80 mb-8">
              Contamos con todas las certificaciones necesarias y trabajamos
              cumpliendo estrictamente la normativa vigente. Nuestra experiencia
              y profesionalidad nos avalan.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-neutral-800/60">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-neutral-800/60">Proyectos completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-neutral-800/60">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">2</div>
                <div className="text-sm text-neutral-800/60">Años de garantía</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-800/60">
              <div className="flex items-center">
                <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                Certificado profesional
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                Seguro de responsabilidad civil
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                Gestor autorizado de residuos
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                Normativa vigente
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            ¿Quieres conocernos mejor?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Visita nuestros proyectos o contáctanos para hablar de tu próxima
            reforma. Estaremos encantados de atenderte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/proyectos">
                Ver Nuestros Proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-white hover:bg-white/90">
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
