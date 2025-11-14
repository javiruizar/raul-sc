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

      {/* Nombre */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Nombre completo <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Juan Pérez García"
          className={errors.name ? "border-destructive" : ""}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="juan@ejemplo.com"
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
        <p className="text-xs text-neutral-800/60">
          Te enviaremos el presupuesto a este email
        </p>
      </div>

      {/* Teléfono */}
      <div className="space-y-2">
        <Label htmlFor="phone">
          Teléfono <span className="text-destructive">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="600 000 000"
          className={errors.phone ? "border-destructive" : ""}
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
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
