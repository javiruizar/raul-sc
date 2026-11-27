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

// Reseña real de Google. El texto se copia tal cual, sin modificarlo.
export interface GoogleReview {
  authorName: string;
  authorUrl?: string;
  authorPhotoUrl?: string;
  rating: number;
  // Fecha legible: "octubre de 2026" (fichero) o "hace 2 meses" (Places API).
  relativeTime: string;
  publishTime?: string;
  text: string;
  reviewUrl?: string;
}

export interface GoogleReviewsData {
  rating: number;
  total: number;
  // Ficha de Google; si falta, se usa siteConfig.socials.googleBusiness.
  mapsUrl?: string;
  // Enlace directo para escribir una reseña; si falta, se usa la ficha.
  writeReviewUrl?: string;
  reviews: GoogleReview[];
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