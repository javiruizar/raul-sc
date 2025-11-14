import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { BudgetFormData } from "@/lib/validations";

interface DescriptionStepProps {
  register: UseFormRegister<BudgetFormData>;
  errors: FieldErrors<BudgetFormData>;
}

export function DescriptionStep({ register, errors }: DescriptionStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold text-secondary mb-2">
          Cuéntanos sobre tu proyecto
        </h2>
        <p className="text-neutral-800/70">
          Cuantos más detalles nos proporciones, más preciso será nuestro presupuesto
        </p>
      </div>

      {/* Descripción */}
      <div className="space-y-2">
        <Label htmlFor="description">
          Descripción del proyecto <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="description"
          {...register("description")}
          placeholder="Describe tu proyecto: qué trabajo necesitas, dimensiones aproximadas, materiales preferidos, etc."
          rows={8}
          className={errors.description ? "border-destructive" : ""}
        />
        {errors.description && (
          <p className="text-sm text-destructive">{errors.description.message}</p>
        )}
        <p className="text-xs text-neutral-800/60">
          Mínimo 20 caracteres. Sé lo más específico posible.
        </p>
      </div>

      {/* Dirección (opcional) */}
      <div className="space-y-2">
        <Label htmlFor="address">
          Dirección del proyecto <span className="text-neutral-500">(opcional)</span>
        </Label>
        <Input
          id="address"
          {...register("address")}
          placeholder="Calle, número, ciudad..."
          className={errors.address ? "border-destructive" : ""}
        />
        {errors.address && (
          <p className="text-sm text-destructive">{errors.address.message}</p>
        )}
        <p className="text-xs text-neutral-800/60">
          Nos ayuda a calcular desplazamientos y disponibilidad en tu zona
        </p>
      </div>

      {/* Fecha preferida (opcional) */}
      <div className="space-y-2">
        <Label htmlFor="preferredDate">
          Fecha preferida de inicio <span className="text-neutral-500">(opcional)</span>
        </Label>
        <Input
          id="preferredDate"
          type="date"
          {...register("preferredDate")}
          min={new Date().toISOString().split("T")[0]}
          className={errors.preferredDate ? "border-destructive" : ""}
        />
        {errors.preferredDate && (
          <p className="text-sm text-destructive">{errors.preferredDate.message}</p>
        )}
        <p className="text-xs text-neutral-800/60">
          Indica cuándo te gustaría que empezáramos el trabajo
        </p>
      </div>

      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-800">
          📸 <strong>¿Tienes fotos?</strong> Después de enviar este formulario, puedes enviarnos
          fotos del proyecto por WhatsApp al 600 000 000 o por email a contacto@raulalbanil.com
        </p>
      </div>
    </div>
  );
}
