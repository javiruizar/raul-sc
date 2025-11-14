import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Mail, Phone, MapPin, Calendar, FileText } from "lucide-react";
import type { BudgetFormData } from "@/lib/validations";

const serviceNames: Record<string, string> = {
  "reformas-integrales": "Reformas Integrales",
  "restauracion": "Restauración de Casas Antiguas",
  "albanileria": "Albañilería General",
  "banos-cocinas": "Baños y Cocinas",
  "fachadas-tejados": "Fachadas y Tejados",
  "trabajos-piedra": "Trabajos en Piedra",
  "otro": "Otro",
};

interface SummaryStepProps {
  formData: Partial<BudgetFormData>;
}

export function SummaryStep({ formData }: SummaryStepProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold text-secondary mb-2">
          Resumen de tu solicitud
        </h2>
        <p className="text-neutral-800/70">
          Revisa que toda la información sea correcta antes de enviar
        </p>
      </div>

      {/* Tipo de Servicio */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
            Tipo de Servicio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Badge className="text-base px-4 py-2">
            {formData.serviceType ? serviceNames[formData.serviceType] : "No especificado"}
          </Badge>
        </CardContent>
      </Card>

      {/* Descripción del Proyecto */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <FileText className="h-5 w-5 text-primary mr-2" />
            Descripción del Proyecto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-800 whitespace-pre-wrap">
            {formData.description || "No especificada"}
          </p>
          
          {formData.address && (
            <div className="mt-4 flex items-start text-sm text-neutral-800/70">
              <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
              <span>{formData.address}</span>
            </div>
          )}
          
          {formData.preferredDate && (
            <div className="mt-2 flex items-start text-sm text-neutral-800/70">
              <Calendar className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
              <span>Fecha preferida: {formatDate(formData.preferredDate)}</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Datos de Contacto */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Mail className="h-5 w-5 text-primary mr-2" />
            Tus Datos de Contacto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-neutral-800/60 mb-1">Nombre</p>
              <p className="font-semibold text-secondary">{formData.name || "No especificado"}</p>
            </div>
            
            <div>
              <p className="text-sm text-neutral-800/60 mb-1">Email</p>
              <p className="font-semibold text-secondary flex items-center">
                <Mail className="h-4 w-4 mr-2 text-neutral-600" />
                {formData.email || "No especificado"}
              </p>
            </div>
            
            <div>
              <p className="text-sm text-neutral-800/60 mb-1">Teléfono</p>
              <p className="font-semibold text-secondary flex items-center">
                <Phone className="h-4 w-4 mr-2 text-neutral-600" />
                {formData.phone || "No especificado"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Información adicional */}
      <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-secondary mb-3">¿Qué ocurre después de enviar?</h4>
        <ul className="space-y-2 text-sm text-neutral-800/80">
          <li className="flex items-start">
            <span className="text-primary mr-2 font-bold">1.</span>
            <span>Recibirás un email de confirmación inmediatamente</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2 font-bold">2.</span>
            <span>Revisaremos tu solicitud en las próximas 24-48 horas laborables</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2 font-bold">3.</span>
            <span>Te contactaremos para aclarar detalles si es necesario</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2 font-bold">4.</span>
            <span>Te enviaremos un presupuesto detallado por email</span>
          </li>
        </ul>
      </div>

      <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
        <p className="text-xs text-neutral-800/60 text-center">
          Al enviar este formulario, aceptas nuestra{" "}
          <a href="/privacidad" className="text-primary hover:underline">
            política de privacidad
          </a>{" "}
          y el uso de tus datos para enviarte el presupuesto solicitado.
        </p>
      </div>
    </div>
  );
}
