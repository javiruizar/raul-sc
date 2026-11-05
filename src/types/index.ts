export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export type ProjectCategory =
  | "reformas"
  | "albanileria"
  | "restauracion"
  | "construccion"
  | "otros";

export interface Project {
  id: string;
  title: string;
  // Título para el buscador, si el normal con la ubicación no cabe en 60 caracteres.
  seoTitle?: string;
  description: string;
  category: ProjectCategory;
  images: string[];
  date: string;
  location?: string;
  // Servicios relacionados; el primero es el principal.
  serviceIds: string[];
  story: { heading: string; text: string }[];
  materials?: string[];
  duration?: string;
  relatedProjectIds: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
  date: string;
  avatar?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface BudgetFormData {
  serviceType: string;
  description: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  preferredDate?: string;
  images?: File[];
}