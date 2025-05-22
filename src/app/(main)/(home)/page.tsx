"use client";

import { DigitalExchangeSection } from "@/components/sections/digital-exchange-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SandboxSection } from "@/components/sections/sandbox-section";
import { SupportedCoinsSection } from "@/components/sections/supported-coins-section";
import { CtaSection } from "@/components/sections/cta-section";
import { TrustedPartnersSection } from "@/components/sections/trusted-partners-section";
import { Button } from "@/components/ui/button";
import { HowCustomerPay } from "@/components/sections/how-customer-pay";
import { StatsSection } from "@/components/sections/stats-section";
import { StartAccepting } from "@/components/sections/start-accepting";
import { HowIntegrate } from "@/components/sections/how-integrate";
import { FaqSection } from "@/components/sections/faq-section";

import { features, partners, stats, supportedCoins } from "@/lib/data";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedPartnersSection partners={partners} />
      <StartAccepting />
      <DigitalExchangeSection />
      <StatsSection />
      <HowIntegrate />
      <HowCustomerPay />
      <SupportedCoinsSection />
      <FeaturesSection features={features} />
      <FaqSection />
      <SandboxSection />
      <CtaSection />
      <ScrollToTopButton />
    </>
  );
}
