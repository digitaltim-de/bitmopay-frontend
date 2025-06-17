"use client";

import { ScrollToTopButton } from "@/components/shared/scroll-to-top";
import { PricingHeroSection } from "@/components/sections/pricing/pricing-hero-section";
import { PricingExplanationSection } from "@/components/sections/pricing/pricing-explanation-section";
import { PricingFaqSection } from "@/components/sections/pricing/pricing-faq-section";
import { PricingCtaSection } from "@/components/sections/pricing/pricing-cta-section";

export default function PricingPage() {
  return (
    <>
      <PricingHeroSection />
      <PricingExplanationSection />
      <PricingFaqSection />
      <PricingCtaSection />
      <ScrollToTopButton />
    </>
  );
}