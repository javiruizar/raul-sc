import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Award, Users, Clock } from "lucide-react";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { QuickContactSection } from "@/components/home/QuickContactSection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary hover:bg-primary-dark">
              Más de 20 años de experiencia
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              Especialistas en Reformas de Casas Antiguas
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transformamos tu hogar con calidad, profesionalidad y respeto por
              la arquitectura tradicional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/presupuesto">
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-white hover:bg-white/90">
                <Link href="/proyectos">Ver Proyectos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-neutral-50 border-y">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-1">20+</div>
              <div className="text-sm text-neutral-800/70">Años de Experiencia</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-1">500+</div>
              <div className="text-sm text-neutral-800/70">Proyectos Completados</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-1">100%</div>
              <div className="text-sm text-neutral-800/70">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-1">24/48h</div>
              <div className="text-sm text-neutral-800/70">Respuesta Presupuesto</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg text-neutral-800/80 max-w-2xl mx-auto">
              Combinamos tradición y modernidad para ofrecerte el mejor servicio
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Experiencia Comprobada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Más de 20 años especializándonos en restauración de casas
                  antiguas y reformas integrales.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Calidad Garantizada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Utilizamos materiales de primera calidad y técnicas
                  tradicionales combinadas con innovación.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Compromiso Total</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Cumplimos plazos, respetamos presupuestos y mantenemos una
                  comunicación constante.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Quick Contact Section */}
      <QuickContactSection />

      {/* Final CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            ¿Listo para transformar tu hogar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solicita un presupuesto sin compromiso y descubre cómo podemos ayudarte
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/presupuesto">
              Solicitar Presupuesto Gratuito
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
