import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BudgetForm } from "@/components/budget/BudgetForm";
import { Clock, CheckCircle2, FileText, Shield } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Presupuesto Gratuito de Reformas en Pozoblanco | Sin Compromiso · Raúl Sánchez",
  description:
    "Solicita tu presupuesto gratuito y sin compromiso para tu reforma o construcción en Pozoblanco y Los Pedroches. Respuesta en 24-48h. Albañil en Pozoblanco con más de 20 años de experiencia.",
  keywords: [
    "presupuesto reformas Pozoblanco",
    "presupuesto albañil Los Pedroches",
    "presupuesto gratis reforma Pozoblanco",
    "presupuesto reformas Hinojosa del Duque",
    "presupuesto reformas Villanueva de Córdoba",
    "solicitar presupuesto albañilería Pozoblanco",
    "reforma sin compromiso Pozoblanco",
  ],
  openGraph: {
    title: "Presupuesto Gratuito de Reformas en Pozoblanco | Raúl Sánchez Construcciones",
    description: "Solicita un presupuesto gratuito y sin compromiso para tu reforma en Pozoblanco y Los Pedroches. Respuesta en 24-48h.",
    url: "https://raul.javierruiz.org/presupuesto",
  },
};

export default function PresupuestoPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto tarda en llegar el presupuesto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Normalmente enviamos los presupuestos en 24-48 horas laborables. Para proyectos más complejos podría tardar un poco más, pero siempre te mantendremos informado."
        }
      },
      {
        "@type": "Question",
        name: "¿El presupuesto es realmente gratuito?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, completamente gratuito y sin compromiso. Incluye visita a domicilio para valoración si es necesario."
        }
      },
      {
        "@type": "Question",
        name: "¿Puedo modificar el presupuesto después?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Por supuesto. El presupuesto es flexible y podemos ajustarlo según tus necesidades y preferencias."
        }
      },
      {
        "@type": "Question",
        name: "¿Qué incluye el presupuesto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Incluye desglose de materiales, mano de obra, gestión de residuos, limpieza, plazos estimados e IVA. Todo detallado y transparente."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge className="mb-6 bg-primary hover:bg-primary-dark">
              Presupuesto Gratuito
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Presupuesto Gratuito en Pozoblanco y Los Pedroches
            </h1>
            <p className="text-xl text-white/90 mb-8">
              ¿Necesitas reforma o construcción en Pozoblanco, Villanueva de
              Córdoba, Hinojosa del Duque o municipios cercanos? Completa el
              formulario y te enviamos un presupuesto detallado en 24-48 horas.
              Gratis y sin compromiso.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-2 text-accent" />
                <span className="font-semibold">Respuesta en 24-48h</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-6 w-6 mr-2 text-accent" />
                <span className="font-semibold">100% Gratuito</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-6 w-6 mr-2 text-accent" />
                <span className="font-semibold">Sin Compromiso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <BudgetForm />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-secondary mb-4">
                ¿Por qué solicitar tu presupuesto con nosotros?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">
                        Presupuesto Detallado
                      </h3>
                      <p className="text-sm text-neutral-800/70">
                        Recibirás un presupuesto completo con desglose de
                        materiales, mano de obra y plazos estimados.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">
                        Sin Sorpresas
                      </h3>
                      <p className="text-sm text-neutral-800/70">
                        Precios transparentes sin costes ocultos. Lo que ves en
                        el presupuesto es lo que pagas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">
                        Respuesta Rápida
                      </h3>
                      <p className="text-sm text-neutral-800/70">
                        Te respondemos en 24-48 horas laborables. Si es urgente,
                        llámanos al 647 684 443.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">
                        Sin Compromiso
                      </h3>
                      <p className="text-sm text-neutral-800/70">
                        Recibe tu presupuesto sin ninguna obligación. Tú decides
                        si quieres seguir adelante.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-secondary mb-4">
                Preguntas Frecuentes
              </h2>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-secondary mb-2">
                    ¿Cuánto tarda en llegar el presupuesto?
                  </h3>
                  <p className="text-sm text-neutral-800/70">
                    Normalmente enviamos los presupuestos en 24-48 horas
                    laborables. Para proyectos más complejos podría tardar un
                    poco más, pero siempre te mantendremos informado.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-secondary mb-2">
                    ¿El presupuesto es realmente gratuito?
                  </h3>
                  <p className="text-sm text-neutral-800/70">
                    Sí, completamente gratuito y sin compromiso. Incluye visita a
                    domicilio para valoración si es necesario.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-secondary mb-2">
                    ¿Puedo modificar el presupuesto después?
                  </h3>
                  <p className="text-sm text-neutral-800/70">
                    Por supuesto. El presupuesto es flexible y podemos ajustarlo
                    según tus necesidades y preferencias.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-secondary mb-2">
                    ¿Qué incluye el presupuesto?
                  </h3>
                  <p className="text-sm text-neutral-800/70">
                    Incluye desglose de materiales, mano de obra, gestión de
                    residuos, limpieza, plazos estimados e IVA. Todo detallado y
                    transparente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
