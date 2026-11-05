import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
// import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { HomeFaqSection } from "@/components/home/HomeFaqSection";
import { QuickContactSection } from "@/components/home/QuickContactSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

const homeTitle = "Albañil en Pozoblanco y Los Pedroches";

export const metadata: Metadata = {
  ...pageMetadata({
    title: homeTitle,
    description:
      "Albañil en Pozoblanco con más de 20 años de experiencia. Reformas integrales y restauración de casas antiguas en Los Pedroches. Presupuesto gratis.",
    path: "/",
  }),
  // La plantilla del layout no se aplica a la página de su mismo nivel.
  title: `${homeTitle} | ${siteConfig.shortName}`,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <HomeFaqSection />
      <QuickContactSection />
      <FinalCtaSection />
    </>
  );
}