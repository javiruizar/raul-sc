import Link from "next/link";
import { ArrowRight, CheckCircle2, MinusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { serviceContent } from "@/data/service-content";

export function ServiceContent({ serviceId }: { serviceId: string }) {
  const content = serviceContent[serviceId];

  return (
    <article>
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-3xl font-bold text-secondary mb-6">
              {content.worksHeading}
            </h2>
            <div className="space-y-4 text-neutral-800/80 leading-relaxed mb-8">
              {content.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="space-y-3">
              {content.works.map((work) => (
                <li key={work} className="flex items-start text-neutral-800">
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>{work}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 lg:sticky lg:top-24">
            <h2 className="font-heading text-xl font-bold text-secondary mb-3">
              ¿Vemos tu obra?
            </h2>
            <p className="text-neutral-800/70 mb-6">
              La visita y el presupuesto son gratis y sin compromiso.
            </p>
            <div className="flex flex-col gap-3">
              <Button asChild>
                <Link href="/presupuesto">
                  Pedir presupuesto <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading text-2xl font-bold text-secondary mb-6">
              {content.timingHeading}
            </h2>
            {content.timingParagraphs && (
              <div className="space-y-4 text-neutral-800/80 leading-relaxed">
                {content.timingParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
            {content.timingItems && (
              <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
                {content.timingItems.map((item) => (
                  <div key={item.work} className="py-3">
                    <dt className="text-neutral-800">{item.work}</dt>
                    <dd className="font-semibold text-secondary">{item.duration}</dd>
                  </div>
                ))}
              </dl>
            )}
            {content.timingNote && (
              <p className="mt-4 text-sm text-neutral-800/70 leading-relaxed">
                {content.timingNote}
              </p>
            )}
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-2xl font-bold text-secondary mb-6">
                Lo que no hacemos
              </h2>
              <ul className="space-y-3">
                {content.notWorks.map((item) => (
                  <li key={item} className="flex items-start text-neutral-800/80">
                    <MinusCircle aria-hidden="true" className="h-5 w-5 text-neutral-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-secondary mb-4">
                Obras realizadas
              </h2>
              <p className="text-neutral-800/80 leading-relaxed">{content.projectsText}</p>
              {content.projectLink && (
                <Link
                  href={content.projectLink.href}
                  className="inline-flex items-center mt-4 text-primary font-semibold hover:underline"
                >
                  {content.projectLink.label}
                  <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-secondary mb-6">
            Preguntas frecuentes
          </h2>
          <FaqAccordion faqs={content.faqs} name={`faq-${serviceId}`} />
        </div>
      </section>
    </article>
  );
}
