import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Award } from "lucide-react";
export function StorySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Foto de obra: sustituir por una de Raúl o del equipo cuando esté disponible. */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/projects/restauracion-casa-senorial/1197.webp"
                alt="Interior con bóvedas y arcos de una casa de 1950 restaurada en Pozoblanco"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
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
                Raúl Sánchez es de Villanueva de Córdoba y siente una pasión
                genuina por la arquitectura tradicional de Los Pedroches. Desde
                hace más de dos décadas, transforma casas y espacios en
                Pozoblanco y en toda la comarca, especializándose en la
                restauración de edificaciones antiguas propias de esta tierra.
              </p>
              
              <p>
                Somos un equipo de 6 personas y a cada obra vamos entre 2 y 6,
                según lo que necesite. No tenemos taller ni local: trabajamos
                donde está tu obra, y vamos a verla sin coste antes de darte
                presupuesto. Cada
                proyecto, desde Villanueva de Córdoba hasta Hinojosa del Duque,
                se aborda con el mismo cuidado y dedicación.
              </p>
              
              <p>
                Nuestra filosofía es simple: combinar técnicas tradicionales
                de construcción de Los Pedroches con las mejores prácticas
                modernas, respetando siempre la esencia original de cada
                vivienda. Creemos que cada casa de la comarca tiene una
                historia que contar, y nuestro trabajo es preservarla
                mientras la adaptamos a las necesidades actuales.
              </p>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-secondary">50+</div>
                  <div className="text-sm text-neutral-800/60">Proyectos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
