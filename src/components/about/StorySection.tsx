import { SectionHeading } from "@/components/shared/SectionHeading";
import { Award, Users, TrendingUp, Heart } from "lucide-react";

export function StorySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen/Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                <div className="text-center">
                  <div className="text-8xl mb-4">👷</div>
                  <p className="text-lg">Foto del equipo o fundador</p>
                </div>
              </div>
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm">Años de experiencia</div>
            </div>
          </div>

          {/* Contenido */}
          <div>
            <SectionHeading
              subtitle="Nuestra Historia"
              title="Más de 20 años transformando hogares"
              className="mb-6"
            />
            
            <div className="space-y-4 text-neutral-800/80 leading-relaxed">
              <p>
                Raúl Albañil nació de una pasión por la construcción y el respeto
                por la arquitectura tradicional. Desde hace más de dos décadas,
                nos dedicamos a transformar casas y espacios, especializándonos
                en la restauración de edificaciones antiguas.
              </p>
              
              <p>
                Lo que comenzó como un pequeño taller familiar se ha convertido
                en un referente en reformas y restauración. Cada proyecto es
                único y lo abordamos con el mismo cuidado y dedicación,
                independientemente de su tamaño.
              </p>
              
              <p>
                Nuestra filosofía es simple: combinar técnicas tradicionales con
                las mejores prácticas modernas, siempre respetando la esencia
                original de cada construcción. Creemos que cada casa tiene una
                historia que contar, y nuestro trabajo es preservarla mientras
                la adaptamos a las necesidades actuales.
              </p>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-secondary">500+</div>
                  <div className="text-sm text-neutral-800/60">Proyectos</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-secondary">100%</div>
                  <div className="text-sm text-neutral-800/60">Satisfacción</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
