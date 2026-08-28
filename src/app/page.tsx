import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { QuickContactSection } from "@/components/home/QuickContactSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "Albañil en Pozoblanco · Reformas y Construcción en Los Pedroches | Raúl Sánchez",
  description:
    "Albañil de confianza en Pozoblanco con más de 20 años de experiencia. Reformas integrales, restauración de casas antiguas y construcción en Los Pedroches. Presupuesto gratuito sin compromiso.",
  alternates: {
    canonical: "https://raul.javierruiz.org/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <QuickContactSection />
      <FinalCtaSection />
    </>
  );
}