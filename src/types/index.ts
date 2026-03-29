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
  description: string;
  category: ProjectCategory;
  images: string[];
  date: string;
  location?: string;
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