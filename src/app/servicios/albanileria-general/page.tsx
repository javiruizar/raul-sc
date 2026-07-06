import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Albañilería General en Pozoblanco | Raúl Sánchez",
  description: "Trabajos de albañilería general en Pozoblanco y comarca. Construcción de muros, solados, tabiquería y pequeñas reparaciones por profesionales.",
  alternates: {
    canonical: "https://raul.javierruiz.org/servicios/albanileria-general",
  },
};

export default function AlbanileriaGeneralPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge className="mb-6 bg-primary hover:bg-primary-dark">
              Servicio Profesional
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Albañilería General
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Realizamos cualquier trabajo de albañilería que necesites, desde pequeños arreglos hasta grandes proyectos estructurales.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Calidad y Eficiencia"
            title="Todos los Trabajos de Albañilería"
            description="Soluciones eficaces y duraderas para el mantenimiento o modificación de tu vivienda."
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-8 text-neutral-800">
            <div>
              <p className="mb-4 leading-relaxed">
                Nuestros más de 20 años de oficio en Pozoblanco nos permiten garantizar un acabado excelente en cualquier tarea relacionada con el mortero, el ladrillo o el cemento.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Muros y tabiquería:</strong> Levantamiento de tabiques y modificaciones espaciales.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Solados y alicatados:</strong> Colocación de pavimentos, suelos cerámicos y gres porcelánico.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Enfoscados y revocos:</strong> Preparación y alisado de paredes interiores y exteriores.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Reparaciones:</strong> Arreglos de humedades, grietas y pequeñas modificaciones estructurales.</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold font-heading text-secondary mb-4">Pide presupuesto hoy mismo</h3>
              <p className="text-neutral-600 mb-8">
                No importa si el trabajo es grande o pequeño, ofrecemos precios competitivos y resultados profesionales.
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contacto">
                  Contactar Ahora <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
