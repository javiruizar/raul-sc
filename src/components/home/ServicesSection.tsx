import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight, Home, Building2, Hammer, Droplet, Shield, Mountain } from "lucide-react";
import { services } from "@/data/services";

const iconMap = {
  home: Home,
  building: Building2,
  hammer: Hammer,
  droplet: Droplet,
  shield: Shield,
  mountain: Mountain,
};

export function ServicesSection() {
  // Mostrar solo los primeros 6 servicios
  const featuredServices = services.slice(0, 6);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="Nuestros Servicios"
          title="¿En qué podemos ayudarte?"
          description="Ofrecemos una amplia gama de servicios de albañilería y reformas para transformar tu hogar"
          centered
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredServices.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Hammer;
            
            return (
              <Card key={service.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-neutral-800/70">
                        <span className="mr-2 text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/servicios">
              Ver Todos los Servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
