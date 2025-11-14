import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapSection } from "@/components/contact/MapSection";
import { 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | Raúl Albañil",
  description:
    "Contáctanos para presupuestos, consultas o información sobre nuestros servicios de albañilería y reformas. Respuesta en 24-48h.",
  keywords: [
    "contacto",
    "presupuesto",
    "consulta",
    "teléfono albañil",
    "email reformas",
    "Madrid",
  ],
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary hover:bg-primary-dark">
              Contáctanos
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Estamos Aquí Para Ayudarte
            </h1>
            <p className="text-xl text-white/90 mb-8">
              ¿Tienes un proyecto en mente? ¿Necesitas un presupuesto? Escríbenos
              y te responderemos lo antes posible. Estamos disponibles para
              atenderte.
            </p>
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-2 text-accent" />
                <span className="font-semibold">Respuesta en 24-48h</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-6 w-6 mr-2 text-accent" />
                <span className="font-semibold">Presupuestos Gratuitos</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-6 w-6 mr-2 text-accent" />
                <span className="font-semibold">Atención Personalizada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <div>
              <div className="mb-8">
                <h2 className="font-heading text-3xl font-bold text-secondary mb-2">
                  Envíanos un Mensaje
                </h2>
                <p className="text-neutral-800/70">
                  Completa el formulario y nos pondremos en contacto contigo lo
                  antes posible.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Información de contacto */}
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-3xl font-bold text-secondary mb-4">
                Preguntas Frecuentes sobre Contacto
              </h2>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    ¿Cuánto tardan en responder?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-800/70">
                    Normalmente respondemos en 24-48 horas laborables. Si es
                    urgente, te recomendamos llamarnos directamente al 600 000 000.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    ¿Los presupuestos son gratuitos?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-800/70">
                    Sí, todos nuestros presupuestos son completamente gratuitos y
                    sin compromiso. Incluimos visita a domicilio para valoración.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    ¿Puedo enviar fotos del proyecto?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-800/70">
                    Por supuesto. Puedes enviarnos fotos por WhatsApp al 600 000
                    000 o por email a contacto@raulalbanil.com. Esto nos ayudará a
                    darte un presupuesto más preciso.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    ¿Trabajan en mi zona?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-800/70">
                    Trabajamos en Madrid y alrededores con un radio de 50km.
                    Contáctanos con tu ubicación específica y te confirmaremos si
                    podemos atenderte.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    ¿Qué información debo proporcionar?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-800/70">
                    Cuéntanos qué tipo de trabajo necesitas, la ubicación, y si es
                    posible, el plazo deseado. Cualquier detalle adicional nos
                    ayudará a preparar un presupuesto más ajustado.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-secondary mb-4">
              Otras Formas de Contacto
            </h2>
            <p className="text-lg text-neutral-800/70">
              Elige el método que más te convenga
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                    <MessageSquare className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-secondary mb-2">WhatsApp</h3>
                <p className="text-sm text-neutral-800/70 mb-4">
                  Respuesta rápida y directa
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a
                    href="https://wa.me/34600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-secondary mb-2">
                  Presupuesto Detallado
                </h3>
                <p className="text-sm text-neutral-800/70 mb-4">
                  Formulario completo paso a paso
                </p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/presupuesto">Solicitar</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                </div>
                <h3 className="font-semibold text-secondary mb-2">
                  Llamada Directa
                </h3>
                <p className="text-sm text-neutral-800/70 mb-4">
                  Habla directamente con nosotros
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="tel:+34600000000">Llamar Ahora</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            ¿Prefieres ver nuestro trabajo primero?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explora nuestra galería de proyectos completados y conoce más sobre
            nuestros servicios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/proyectos">
                Ver Proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg bg-white hover:bg-white/90"
            >
              <Link href="/servicios">Ver Servicios</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
