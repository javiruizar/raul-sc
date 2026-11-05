import { CheckCircle2, Award, Clock } from "lucide-react";

export function StatsSection() {
  return (
    <section aria-labelledby="stats-heading" className="py-12 bg-neutral-50 border-y">
      <h2 id="stats-heading" className="sr-only">Nuestras cifras y experiencia</h2>
      <div className="container-custom">
        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
          <div>
            <div className="flex justify-center mb-2">
              <Award aria-hidden="true" className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-secondary mb-1">25+</div>
            <div className="text-sm text-neutral-800/70">Años de Experiencia</div>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <CheckCircle2 aria-hidden="true" className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-secondary mb-1">50+</div>
            <div className="text-sm text-neutral-800/70">Proyectos Completados</div>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <Clock aria-hidden="true" className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-secondary mb-1">24h / 7d</div>
            <div className="text-sm text-neutral-800/70">Respuesta / Presupuesto</div>
          </div>
        </div>
      </div>
    </section>
  );
}