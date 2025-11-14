import { z } from "zod";

// Esquema de validación para formulario de contacto
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  email: z
    .string()
    .email("Por favor, introduce un email válido")
    .min(1, "El email es obligatorio"),
  phone: z
    .string()
    .min(9, "El teléfono debe tener al menos 9 dígitos")
    .max(15, "El teléfono no puede exceder 15 dígitos")
    .regex(/^[0-9+\s()-]+$/, "El teléfono solo puede contener números y símbolos válidos"),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede exceder 1000 caracteres"),
});

// Esquema de validación para formulario de presupuesto
export const budgetFormSchema = z.object({
  serviceType: z
    .string()
    .min(1, "Por favor, selecciona un tipo de servicio"),
  description: z
    .string()
    .min(20, "Por favor, describe tu proyecto con al menos 20 caracteres")
    .max(2000, "La descripción no puede exceder 2000 caracteres"),
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  email: z
    .string()
    .email("Por favor, introduce un email válido")
    .min(1, "El email es obligatorio"),
  phone: z
    .string()
    .min(9, "El teléfono debe tener al menos 9 dígitos")
    .max(15, "El teléfono no puede exceder 15 dígitos")
    .regex(/^[0-9+\s()-]+$/, "El teléfono solo puede contener números y símbolos válidos"),
  address: z
    .string()
    .max(200, "La dirección no puede exceder 200 caracteres")
    .optional(),
  preferredDate: z
    .string()
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BudgetFormData = z.infer<typeof budgetFormSchema>;
