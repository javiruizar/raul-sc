import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Restauración de Casas Antiguas en Los Pedroches | Raúl Sánchez",
  description: "Expertos en restauración y rehabilitación de casas antiguas y rústicas en Los Pedroches. Conservamos bóvedas, muros de piedra y el encanto original.",
  alternates: {
    canonical: "https://raul.javierruiz.org/servicios/restauracion-casas-antiguas",
  },
};

export default function RestauracionCasasPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge className="mb-6 bg-primary hover:bg-primary-dark">
              Servicio Especializado
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Restauración de Casas Antiguas
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Recuperamos el esplendor de las edificaciones históricas de Los Pedroches combinando técnicas tradicionales con confort moderno.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Nuestro Enfoque"
            title="Respeto por el Patrimonio"
            description="Trabajamos con mimo la piedra, la madera y el ladrillo antiguo para devolver la vida a construcciones singulares."
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-8 text-neutral-800">
            <div>
              <p className="mb-4 leading-relaxed">
                La comarca de Los Pedroches cuenta con un patrimonio arquitectónico incalculable. Nuestro equipo es especialista en recuperar casas de pueblo rústicas manteniendo intacto su encanto original.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Recuperación de bóvedas:</strong> Restauramos y reforzamos bóvedas de ladrillo tradicionales de la zona.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Muros de piedra:</strong> Consolidación estructural y rejuntado estético de muros rústicos.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Cubiertas y tejados:</strong> Rehabilitación con teja árabe vieja para mantener la estética.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Aislamiento moderno:</strong> Incorporamos soluciones modernas de eficiencia energética respetando la fachada.</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold font-heading text-secondary mb-4">¿Tienes una casa que restaurar?</h3>
              <p className="text-neutral-600 mb-8">
                Déjala en manos de profesionales que conocen y respetan la arquitectura local. Pide presupuesto sin compromiso.
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/presupuesto">
                  Solicitar Presupuesto <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
