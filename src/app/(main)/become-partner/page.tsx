"use client";

import { ScrollToTopButton } from "@/components/shared/scroll-to-top";
import { BecomePartnerHeroSection } from "@/components/sections/become-partner/hero-section";
import { HowItWorksSection } from "@/components/sections/become-partner/how-it-works-section";
import { EarningPotentialSection } from "@/components/sections/become-partner/earning-potential-section";
import { PartnerBenefitsSection } from "@/components/sections/become-partner/partner-benefits-section";
import { PartnerNetworkSection } from "@/components/sections/become-partner/partner-network-section";
import { PartnerFaqSection } from "@/components/sections/become-partner/partner-faq-section";
import { PartnerCtaSection } from "@/components/sections/become-partner/partner-cta-section";

export default function PartnerPage() {
  return (
    <>
      <BecomePartnerHeroSection />
      <HowItWorksSection />
      <EarningPotentialSection />
      <PartnerBenefitsSection />
      <PartnerNetworkSection />
      <PartnerFaqSection />
      <PartnerCtaSection />
      <ScrollToTopButton />
    </>
  );
}
