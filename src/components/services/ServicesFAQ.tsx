import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda una reforma integral?",
    answer:
      "El tiempo depende del tamaño y complejidad del proyecto. Una reforma integral de un piso de 80-100m² suele tardar entre 2 y 3 meses. Siempre proporcionamos un cronograma detallado antes de comenzar.",
  },
  {
    question: "¿Ofrecen garantía en sus trabajos?",
    answer:
      "Sí, ofrecemos garantía de 2 años en todos nuestros trabajos de albañilería y reformas. Además, los materiales que utilizamos cuentan con sus propias garantías del fabricante.",
  },
  {
    question: "¿Necesito permisos para hacer una reforma?",
    answer:
      "Depende del tipo de reforma. Las obras menores generalmente no requieren licencia, pero las reformas que afecten a la estructura, fachada o distribución sí necesitan permisos. Te asesoramos en todo el proceso de tramitación.",
  },
  {
    question: "¿Trabajan con arquitectos o necesito contratar uno?",
    answer:
      "Para proyectos que requieran proyecto técnico, trabajamos con arquitectos de confianza. Para reformas menores, nosotros nos encargamos de todo el proceso sin necesidad de arquitecto.",
  },
  {
    question: "¿Cómo se realiza el pago?",
    answer:
      "Normalmente trabajamos con un sistema de pagos por fases: un anticipo al inicio (30%), pagos intermedios según avance de obra (40%), y el pago final al terminar (30%). Todo queda especificado en el contrato.",
  },
  {
    question: "¿Qué incluye el presupuesto?",
    answer:
      "Nuestros presupuestos incluyen mano de obra, materiales, gestión de residuos, limpieza y IVA. Todo está detallado para que no haya sorpresas. Los únicos extras serían modificaciones que solicites durante la obra.",
  },
  {
    question: "¿Trabajan en fines de semana?",
    answer:
      "Normalmente trabajamos de lunes a viernes, pero para proyectos urgentes o por necesidades específicas del cliente, podemos trabajar los sábados. Los domingos no trabajamos.",
  },
  {
    question: "¿Se encargan de la gestión de residuos?",
    answer:
      "Sí, incluimos en nuestro servicio la retirada y gestión legal de todos los escombros y residuos generados durante la obra. Trabajamos con gestores autorizados.",
  },
  {
    question: "¿Puedo vivir en casa durante la reforma?",
    answer:
      "Depende del tipo de reforma. En reformas parciales (baño, cocina) es posible con algunas molestias. En reformas integrales, recomendamos buscar alojamiento alternativo por comodidad y para agilizar los trabajos.",
  },
  {
    question: "¿Qué zona de trabajo cubren?",
    answer:
      "Trabajamos principalmente en Madrid y alrededores, con un radio de cobertura de aproximadamente 50km. Para proyectos especiales podemos valorar distancias mayores.",
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
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-white hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-secondary hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-800/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-neutral-50 rounded-xl">
            <h3 className="font-heading text-xl font-bold text-secondary mb-2">
              ¿No encuentras tu respuesta?
            </h3>
            <p className="text-neutral-800/80 mb-4">
              Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center text-primary font-semibold hover:underline"
            >
              Contactar con nosotros →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
