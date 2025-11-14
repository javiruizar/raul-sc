import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { 
  ClipboardCheck, 
  Calendar, 
  Hammer, 
  CheckCircle2,
  MessageSquare,
  FileText
} from "lucide-react";

const processSteps = [
  {
    number: 1,
    title: "Consulta Inicial",
    description: "Nos ponemos en contacto contigo para entender tus necesidades y visitar el lugar.",
    icon: MessageSquare,
  },
  {
    number: 2,
    title: "Presupuesto Detallado",
    description: "Elaboramos un presupuesto completo y detallado sin compromiso en 24-48h.",
    icon: FileText,
  },
  {
    number: 3,
    title: "Planificación",
    description: "Definimos el cronograma de trabajo, materiales necesarios y coordinamos fechas.",
    icon: Calendar,
  },
  {
    number: 4,
    title: "Ejecución",
    description: "Realizamos el trabajo con la máxima calidad, cumpliendo plazos y manteniendo limpio el espacio.",
    icon: Hammer,
  },
  {
    number: 5,
    title: "Supervisión",
    description: "Control de calidad continuo durante todo el proceso para garantizar resultados óptimos.",
    icon: ClipboardCheck,
  },
  {
    number: 6,
    title: "Entrega Final",
    description: "Revisión final contigo, entrega de garantías y seguimiento post-obra.",
    icon: CheckCircle2,
  },
];

export function ProcessTimeline() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <SectionHeading
          subtitle="Nuestro Proceso"
          title="Cómo Trabajamos"
          description="Un proceso transparente y profesional de principio a fin"
          centered
          className="mb-16"
        />

        <div className="relative">
          {/* Línea vertical en desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-8`}
                >
                  {/* Contenido */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className={`flex items-start gap-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg flex-shrink-0">
                            {step.number}
                          </div>
                          <div className={isEven ? 'lg:text-right' : 'lg:text-left'}>
                            <h3 className="font-heading text-xl font-bold text-secondary mb-2">
                              {step.title}
                            </h3>
                            <p className="text-neutral-800/80">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Icono central (solo en desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-primary shadow-lg">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Espacio para el otro lado */}
                  <div className="hidden lg:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
