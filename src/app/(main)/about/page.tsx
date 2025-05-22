import { HeroSection } from "@/components/sections/about/hero-section";
import { MissionSection } from "@/components/sections/about/mission-section";
import { CompanyDetailsSection } from "@/components/sections/about/company-details-section";
import { TeamSection } from "@/components/sections/about/team-section";
import { CtaFooterSection } from "@/components/sections/about/cta-footer-section";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top";

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <CompanyDetailsSection />
      <TeamSection />
      <CtaFooterSection />
      <ScrollToTopButton />
    </>
  );
}