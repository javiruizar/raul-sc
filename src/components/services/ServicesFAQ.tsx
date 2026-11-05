import Link from "next/link";
import { FaqAccordion, type Faq } from "@/components/shared/FaqAccordion";
import { SectionHeading } from "@/components/shared/SectionHeading";

// Solo dudas comunes a todos los servicios: las de cada uno están en su página
// y las generales, en la home. No repetir la misma pregunta en varias páginas.
const faqs: Faq[] = [
  {
    question: "¿Trabajáis a presupuesto o por horas?",
    answer:
      "De las dos formas, a tu conveniencia, y lo acordamos antes de empezar. A presupuesto, te damos un precio detallado por partidas. Por horas no damos presupuesto, sino una estimación de tiempos y de cuántos profesionales estaremos en la obra.",
  },
  {
    question: "¿Cuántas personas vais a la obra?",
    answer:
      "Somos un equipo de 6 personas. A cada obra vamos entre 2 y 6, según lo que necesite el trabajo y la situación de ese momento.",
  },
  {
    question: "¿Trabajáis con arquitectos o necesito contratar uno?",
    answer:
      "Si la obra requiere proyecto técnico, trabajamos con el técnico que elijas o te recomendamos uno de confianza. Para trabajos menores no suele hacer falta.",
  },
  {
    question: "¿Trabajáis los fines de semana?",
    answer: "No. Trabajamos de lunes a viernes, de 8:00 a 18:00.",
  },
];

export function ServicesFAQ() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="Preguntas Frecuentes"
          title="¿Tienes dudas?"
          description="Aquí respondemos las preguntas más comunes sobre nuestros servicios"
          centered
          className="mb-12"
        />

        <div className="max-w-3xl mx-auto">
          <FaqAccordion faqs={faqs} name="faq-servicios" />

          <div className="mt-12 text-center p-8 bg-neutral-50 rounded-xl">
            <h3 className="font-heading text-xl font-bold text-secondary mb-2">
              ¿No encuentras tu respuesta?
            </h3>
            <p className="text-neutral-800/80 mb-4">
              Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center text-primary font-semibold hover:underline"
            >
              Contactar con nosotros →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
