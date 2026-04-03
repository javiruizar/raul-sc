import type { Metadata } from "next";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapSection } from "@/components/contact/MapSection";
import { BudgetForm } from "@/components/budget/BudgetForm";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Contacto y Presupuestos | Raúl Albañil",
  description: "Contacta con nosotros directamente o solicita tu presupuesto detallado para tu próxima reforma en Los Pedroches.",
};

export default function ContactoPage() {
  return (
    <>
      {/* 1. Cabecera */}
      <section className="bg-gradient-to-br from-secondary via-secondary-light to-secondary py-16 md:py-24">
        <div className="container-custom text-center mx-auto max-w-4xl flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Contacto y Presupuestos
          </h1>
          <p className="text-xl text-white/90">
            ¿Tienes dudas rápidas? Llámanos o escríbenos directamente. ¿Quieres una valoración para tu obra? Rellena el formulario detallado un poco más abajo.
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