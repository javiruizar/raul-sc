import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { BudgetForm } from "@/components/budget/BudgetForm";
import { siteConfig } from "@/config/site";

export function QuickContactSection() {
  return (
    <section id="formulario" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Información de contacto */}
          <div>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                Contáctanos
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-lg text-neutral-800/80">
                Cuéntanos qué necesitas y te preparamos un presupuesto gratis y
                sin compromiso. Si lo prefieres, llámanos o escríbenos o rellena
                el formulario que te facilitamos para agilizar el proceso.
                {/* La flecha apunta al formulario: a la derecha en escritorio y debajo en móvil. */}
                <ArrowRight aria-hidden="true" className="hidden lg:inline-block h-7 w-7 ml-2 align-middle text-primary" />
                <ArrowDown aria-hidden="true" className="lg:hidden inline-block h-7 w-7 ml-2 align-middle text-primary" />
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Teléfono</h3>
                    <a
                      href={`tel:${siteConfig.contact.phoneLink}`}
                      className="text-neutral-800/70 hover:text-primary transition-colors"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                    {siteConfig.hours.map((hours) => (
                      <p key={hours.display} className="text-sm text-neutral-800/60 mt-1">
                        {hours.display}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Email</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-neutral-800/70 hover:text-primary transition-colors break-all"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <p className="text-sm text-neutral-800/60 mt-1">
                      Respuesta en 24 horas
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Zona de trabajo</h3>
                    <p className="text-neutral-800/70">Pozoblanco y Los Pedroches</p>
                    <p className="text-sm text-neutral-800/60 mt-1">
                      Visita gratuita a domicilio para valorar la obra
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <BudgetForm compact />
        </div>
      </div>
    </section>
  );
}
