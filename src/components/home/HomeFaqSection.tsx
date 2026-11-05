import { FaqAccordion, type Faq } from "@/components/shared/FaqAccordion";
import { SectionHeading } from "@/components/shared/SectionHeading";

const faqs: Faq[] = [
  {
    question: "¿El presupuesto es gratis?",
    answer:
      "Sí. Vamos a ver la obra sin coste y te damos un presupuesto detallado por partidas, sin compromiso. Te lo enviamos en una semana, al correo o por WhatsApp.",
  },
  {
    question: "¿En qué pueblos trabajáis?",
    answer:
      "En Pozoblanco y en toda la comarca de Los Pedroches: Villanueva de Córdoba, Añora, Pedroche, Dos Torres, Alcaracejos, Torrecampo, Hinojosa del Duque y el resto de pueblos del valle.",
  },
  {
    question: "¿Quién se encarga de los permisos del ayuntamiento?",
    answer:
      "Las obras pequeñas suelen tramitarse con una declaración responsable o comunicación previa. Las que tocan estructura o fachada pueden necesitar licencia y proyecto técnico. Te orientamos sobre qué necesita tu obra, pero la licencia la gestionas tú.",
  },
  {
    question: "¿Quién retira los escombros?",
    answer:
      "Nosotros: contenedor y transporte a un gestor de residuos autorizado. Si el contenedor va en la calle, también gestionamos el permiso de ocupación.",
  },
  {
    question: "¿El presupuesto lleva IVA?",
    answer:
      "Sí, nuestros presupuestos llevan el IVA incluido: el 10 % si eres autopromotor o si la obra es una reparación, y el 21 % si es una reforma.",
  },
  {
    question: "¿Cómo se paga?",
    answer:
      "Si trabajamos a presupuesto, por fases: 30 % al inicio, 40 % durante la obra y 30 % al terminar. Si trabajamos por horas, lo acordamos antes de empezar. Aceptamos efectivo (dentro de los límites legales), tarjeta y transferencia.",
  },
  {
    question: "¿Se pueden ver trabajos vuestros?",
    answer:
      "Sí. Además de los proyectos de la web, podemos enseñarte obras terminadas que ya están usando sus propietarios.",
  },
];

export function HomeFaqSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl mx-auto">
        <SectionHeading
          subtitle="Preguntas Frecuentes"
          title="Lo que más nos preguntan"
          centered
          className="mb-12"
        />
        <FaqAccordion faqs={faqs} name="faq-inicio" />
      </div>
    </section>
  );
}
