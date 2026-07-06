import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Building2, Hammer, Droplet, Shield, Mountain, CheckCircle2 } from "lucide-react";
import type { Service } from "@/types";
import Link from "next/link";

const iconMap = {
  home: Home,
  building: Building2,
  hammer: Hammer,
  droplet: Droplet,
  shield: Shield,
  mountain: Mountain,
};

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Hammer;

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 ${featured ? 'border-primary border-2' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Icon className="h-7 w-7" />
          </div>
          {featured && (
            <Badge className="bg-primary">Destacado</Badge>
          )}
        </div>
        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-base leading-relaxed">
          {service.description}
        </CardDescription>
        
        <div className="pt-4 border-t">
          <h4 className="font-semibold text-secondary mb-3">Incluye:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-neutral-800/80">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 flex justify-end">
          <Link href={`/servicios/${service.id}`} className="text-primary font-medium hover:underline inline-flex items-center text-sm">
            Saber más
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
