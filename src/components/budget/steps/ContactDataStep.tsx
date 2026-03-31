import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { BudgetFormData } from "@/lib/validations";

interface ContactDataStepProps {
  register: UseFormRegister<BudgetFormData>;
  errors: FieldErrors<BudgetFormData>;
}

export function ContactDataStep({ register, errors }: ContactDataStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold text-secondary mb-2">
          Tus datos de contacto
        </h2>
        <p className="text-neutral-800/70">
          Para poder enviarte el presupuesto y ponernos en contacto contigo
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name" className={errors.name ? "text-red-600" : ""}>
          Nombre completo <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Juan Pérez García"
          className={errors.name ? "border-red-500 bg-red-50 focus-visible:ring-red-500" : ""}
        />
        {errors.name && (
          <p className="text-sm font-medium text-red-500">{errors.name.message as string}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className={errors.email ? "text-red-600" : ""}>
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="juan@ejemplo.com"
          className={errors.email ? "border-red-500 bg-red-50 focus-visible:ring-red-500" : ""}
        />
        {errors.email && (
          <p className="text-sm font-medium text-red-500">{errors.email.message as string}</p>
        )}
        <p className="text-xs text-neutral-800/60">
          Te enviaremos el presupuesto a este email
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className={errors.phone ? "text-red-600" : ""}>
          Teléfono <span className="text-red-500">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="600 000 000"
          className={errors.phone ? "border-red-500 bg-red-50 focus-visible:ring-red-500" : ""}
        />
        {errors.phone && (
          <p className="text-sm font-medium text-red-500">{errors.phone.message as string}</p>
        )}
        <p className="text-xs text-neutral-800/60">
          Preferiblemente con WhatsApp para una comunicación más rápida
        </p>
      </div>

      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-sm text-green-800">
          🔒 <strong>Privacidad garantizada:</strong> Tus datos solo se usarán para enviarte el
          presupuesto y contactarte sobre este proyecto. Nunca los compartiremos con terceros.
        </p>
      </div>
    </div>
  );
}