import { z } from "zod";

const MAX_FILE_SIZE = 60 * 1024 * 1024; // 60MB
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf"
];

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
  serviceType: z.string().min(1, "Selecciona un tipo de servicio"),
  description: z.string().min(10, "Describe brevemente lo que necesitas"),
  name: z.string().min(2, "Introduce tu nombre completo"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(9, "Teléfono inválido"),
  address: z.string().optional(),
  preferredDate: z.string().optional(),
  files: z.any()
    .refine((files: FileList | File[]) => {
      if (!files || files.length === 0) return true;
      return Array.from(files).every((file: File) => file.size <= MAX_FILE_SIZE);
    }, "Uno o más archivos superan el límite de 60MB.")
    .refine((files: FileList | File[]) => {
      if (!files || files.length === 0) return true;
      return Array.from(files).every((file: File) => ACCEPTED_FILE_TYPES.includes(file.type));
    }, "Solo se admiten formatos JPG, PNG, WEBP o PDF.")
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BudgetFormData = z.infer<typeof budgetFormSchema>;