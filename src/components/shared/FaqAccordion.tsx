import { ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

export interface Faq {
  question: string;
  answer: string;
}

// <details> nativo: las respuestas quedan en el HTML aunque estén plegadas.
export function FaqAccordion({ faqs, name }: { faqs: Faq[]; name: string }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-4">
      <JsonLd data={faqSchema} />
      {faqs.map((faq) => (
        <details
          key={faq.question}
          name={name}
          className="group border rounded-lg px-6 bg-white hover:shadow-md transition-shadow"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold text-secondary hover:text-primary [&::-webkit-details-marker]:hidden">
            {faq.question}
            <ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="pb-4 text-sm text-neutral-800/80 leading-relaxed">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
