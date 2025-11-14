import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { 
  Heart, 
  Shield, 
  Users, 
  Lightbulb, 
  CheckCircle2, 
  Clock 
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Pasión por el Detalle",
    description:
      "Cada proyecto es único y merece nuestra máxima atención. Cuidamos cada detalle como si fuera nuestra propia casa.",
  },
  {
    icon: Shield,
    title: "Calidad Garantizada",
    description:
      "Utilizamos solo materiales de primera calidad y ofrecemos garantía de 2 años en todos nuestros trabajos.",
  },
  {
    icon: Users,
    title: "Trato Cercano",
    description:
      "Mantenemos una comunicación constante y transparente. Eres parte del proceso desde el primer día.",
  },
  {
    icon: Lightbulb,
    title: "Innovación y Tradición",
    description:
      "Combinamos técnicas tradicionales con las últimas innovaciones para resultados excepcionales.",
  },
  {
    icon: CheckCircle2,
    title: "Compromiso Total",
    description:
      "Cumplimos con los plazos acordados y respetamos el presupuesto. Tu confianza es nuestra prioridad.",
  },
  {
    icon: Clock,
    title: "Experiencia Comprobada",
    description:
      "Más de 20 años en el sector nos avalan. Cada proyecto suma a nuestra experiencia y conocimiento.",
  },
];

export function ValuesSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <SectionHeading
          subtitle="Nuestros Valores"
          title="Lo que nos define"
          description="Estos principios guían cada uno de nuestros proyectos"
          centered
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
