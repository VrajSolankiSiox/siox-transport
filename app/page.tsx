import { CtaBand } from "@/components/CtaBand";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import {
  DifferencesSection,
  DirectionSection,
  PartnerSection,
  TechnologySection,
} from "@/components/home/ContentSections";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { StatsBand } from "@/components/home/StatsBand";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBand />
      <PartnerSection />
      <CapabilitiesSection />
      <ServicesShowcase />
      <DirectionSection />
      <TechnologySection />
      <DifferencesSection />
      <CtaBand />
    </>
  );
}
