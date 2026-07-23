import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Trabajos en Piedra Natural en Los Pedroches | Raúl Sánchez",
  description: "Especialistas en la construcción y restauración de muros de piedra, revestimientos rústicos y mampostería tradicional en la comarca de Los Pedroches.",
  alternates: {
    canonical: "https://raul.javierruiz.org/servicios/trabajos-piedra",
  },
};

export default function TrabajosPiedraPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Trabajos en Piedra Natural",
    serviceType: "Trabajos en Piedra",
    description:
      "Especialistas en la construcción y restauración de muros de piedra, revestimientos rústicos y mampostería tradicional en la comarca de Los Pedroches.",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Raúl Sánchez Construcciones",
      url: "https://raul.javierruiz.org",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Los Pedroches, Córdoba",
    },
    url: "https://raul.javierruiz.org/servicios/trabajos-piedra",
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge className="mb-6 bg-primary hover:bg-primary-dark">
              Servicio Artesanal
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Trabajos en Piedra
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Mampostería tradicional y revestimientos en piedra natural. Aportamos durabilidad y la estética inconfundible de la arquitectura de la zona.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Artesanía y Tradición"
            title="La Piedra como Elemento Principal"
            description="La construcción con piedra requiere habilidad, paciencia y conocimiento de los materiales. Nosotros somos expertos en este noble oficio."
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-8 text-neutral-800">
            <div>
              <p className="mb-4 leading-relaxed">
                Los Pedroches es una tierra ligada a la construcción en granito y piedra local. Realizamos trabajos precisos ya sea para cerramientos de parcelas, zócalos de fachadas o decoración interior rústica.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Muros de mampostería:</strong> Levantamiento de muros de piedra para vallados y retenciones.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Revestimientos y zócalos:</strong> Aplacados de piedra natural o artificial para fachadas y paredes interiores.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Restauración pétrea:</strong> Limpieza y rejuntado de paramentos antiguos para sacar a relucir la piedra original.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span><strong>Arcos y pórticos:</strong> Remates rústicos para entradas de fincas o bodegas.</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold font-heading text-secondary mb-4">¿Te gusta el estilo rústico?</h3>
              <p className="text-neutral-600 mb-8">
                Incorporar elementos de piedra en tu vivienda le dará un toque único y resistente. Consúltanos precio.
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/presupuesto">
                  Solicitar Información <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
