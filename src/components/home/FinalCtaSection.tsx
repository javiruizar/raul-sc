import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section aria-labelledby="final-cta-heading" className="bg-primary py-16 md:py-20">
      <div className="container-custom text-center">
        <h2 id="final-cta-heading" className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          ¿Listo para transformar tu hogar?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Solicita un presupuesto sin compromiso y descubre cómo podemos ayudarte
        </p>
        <Button asChild size="lg" variant="secondary" className="text-lg">
          <Link href="/presupuesto">
            Solicitar Presupuesto Gratuito
            <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}