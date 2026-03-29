import { Card } from "@/components/ui/card";
import { Home, Building2, Hammer, Droplet, Shield, Mountain } from "lucide-react";
import type { UseFormRegister, FieldErrors, UseFormWatch, UseFormSetValue } from "react-hook-form";
import type { BudgetFormData } from "@/lib/validations";

const services = [
  { id: "reformas-integrales", name: "Reformas Integrales", icon: Home },
  { id: "restauracion", name: "Restauración de Casas Antiguas", icon: Building2 },
  { id: "albanileria", name: "Albañilería General", icon: Hammer },
  { id: "banos-cocinas", name: "Baños y Cocinas", icon: Droplet },
  { id: "fachadas-tejados", name: "Fachadas y Tejados", icon: Shield },
  { id: "trabajos-piedra", name: "Trabajos en Piedra", icon: Mountain },
  { id: "otro", name: "Otro (especificar en descripción)", icon: Hammer },
];

interface ServiceTypeStepProps {
  register: UseFormRegister<BudgetFormData>;
  errors: FieldErrors<BudgetFormData>;
  watch: UseFormWatch<BudgetFormData>;
  setValue: UseFormSetValue<BudgetFormData>;
}

export function ServiceTypeStep({ register, errors, watch, setValue }: ServiceTypeStepProps) {
  const selectedService = watch("serviceType");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold text-secondary mb-2">
          ¿Qué tipo de servicio necesitas?
        </h2>
        <p className="text-neutral-800/70">
          Selecciona el servicio que mejor se ajuste a tu proyecto
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          const isSelected = selectedService === service.id;

          return (
            <Card
              key={service.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                isSelected
                  ? "border-primary border-2 bg-primary/5"
                  : "border-neutral-200 hover:border-primary/50"
              }`}
              onClick={() => setValue("serviceType", service.id)}
            >
              <label className="flex items-center p-4 cursor-pointer">
                <input
                  type="radio"
                  {...register("serviceType")}
                  value={service.id}
                  className="sr-only"
                />
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg flex-shrink-0 transition-colors ${
                    isSelected
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-600"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="ml-4 flex-1">
                  <p className={`font-semibold ${isSelected ? "text-primary" : "text-secondary"}`}>
                    {service.name}
                  </p>
                </div>
                {isSelected && (
                  <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                )}
              </label>
            </Card>
          );
        })}
      </div>

      {errors.serviceType && (
        <p className="text-sm text-destructive">{errors.serviceType.message}</p>
      )}

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          💡 <strong>Consejo:</strong> Si no estás seguro del tipo de servicio, selecciona &quot;Otro&quot; y
          describenos tu proyecto en el siguiente paso.
        </p>
      </div>
    </div>
  );
}
