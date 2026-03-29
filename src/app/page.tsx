import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { QuickContactSection } from "@/components/home/QuickContactSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

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