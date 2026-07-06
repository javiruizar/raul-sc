import type { Metadata } from "next";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapSection } from "@/components/contact/MapSection";
import { BudgetForm } from "@/components/budget/BudgetForm";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Contacto y Presupuesto Gratuito en Pozoblanco | Raúl Sánchez Albañil",
  description: "Contacta con tu albañil en Pozoblanco o solicita un presupuesto gratuito sin compromiso para tu reforma en Los Pedroches. Respuesta en 24-48h. Llama al 617 847 211.",
  alternates: {
    canonical: "https://raul.javierruiz.org/contacto",
  },
  openGraph: {
    title: "Contacto y Presupuesto Gratuito en Pozoblanco | Raúl Sánchez Construcciones",
    description: "Contacta con tu albañil en Pozoblanco o solicita un presupuesto gratuito para tu reforma en Los Pedroches.",
    url: "https://raul.javierruiz.org/contacto",
  },
};

export default function ContactoPage() {
  return (
    <>
      {/* 1. Cabecera */}
      <section className="bg-gradient-to-br from-secondary via-secondary-light to-secondary py-16 md:py-24">
        <div className="container-custom text-center mx-auto max-w-4xl flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Contacta con tu Albañil en Pozoblanco
          </h1>
          <p className="text-xl text-white/90">
            ¿Tienes dudas rápidas? Llámanos o escríbenos. ¿Quieres un presupuesto
            para tu reforma en Pozoblanco o Los Pedroches? Rellena el formulario
            y te respondemos en 24-48h.
          </p>
        </div>
      </section>

      {/* 2. Información Directa (Teléfono, Mail, etc.) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Limitamos el ancho para que la info de contacto quede centrada y elegante */}
          <div className="max-w-4xl mx-auto">
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* 3. Formulario de Presupuesto Integrado */}
      <section className="section-padding bg-neutral-50 border-t border-neutral-200" id="formulario">
        <div className="container-custom">
          <SectionHeading
            subtitle="Tu Proyecto"
            title="Solicita tu Presupuesto"
            description="Rellena los detalles de tu reforma y te enviaremos una estimación sin compromiso."
            centered
            className="mb-12"
          />
          {/* Reutilizamos tu formulario avanzado de presupuesto */}
          <BudgetForm />
        </div>
      </section>

      {/* 4. Mapa de Cobertura */}
      <MapSection />
    </>
  );
}