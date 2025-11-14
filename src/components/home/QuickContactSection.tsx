"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function QuickContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío (implementar API route más adelante)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", message: "" });
      
      // Reset status después de 3 segundos
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="section-padding bg-neutral-50">
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
                Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos
                lo antes posible.
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
                      href="tel:+34600000000"
                      className="text-neutral-800/70 hover:text-primary transition-colors"
                    >
                      600 000 000
                    </a>
                    <p className="text-sm text-neutral-800/60 mt-1">
                      Lun - Vie: 8:00 - 18:00
                    </p>
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
                      href="mailto:contacto@raulalbanil.com"
                      className="text-neutral-800/70 hover:text-primary transition-colors"
                    >
                      contacto@raulalbanil.com
                    </a>
                    <p className="text-sm text-neutral-800/60 mt-1">
                      Respuesta en 24-48h
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
                    <h3 className="font-semibold text-secondary mb-1">Ubicación</h3>
                    <p className="text-neutral-800/70">Madrid y alrededores</p>
                    <p className="text-sm text-neutral-800/60 mt-1">
                      Zona de cobertura: 50km
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <p className="text-sm text-neutral-800/70 mb-4">
                ¿Necesitas un presupuesto detallado?
              </p>
              <Button asChild variant="outline" size="lg">
                <Link href="/presupuesto">Solicitar Presupuesto Completo</Link>
              </Button>
            </div>
          </div>

          {/* Formulario de contacto rápido */}
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
              <CardDescription>
                Completa el formulario y nos pondremos en contacto contigo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="600 000 000"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={5}
                    required
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                    ✓ Mensaje enviado correctamente. Te contactaremos pronto.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                    ✗ Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-neutral-800/60 text-center">
                  Al enviar este formulario, aceptas nuestra{" "}
                  <Link href="/privacidad" className="text-primary hover:underline">
                    política de privacidad
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
