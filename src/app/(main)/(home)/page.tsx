"use client";

import { DigitalExchangeSection } from "@/components/sections/digital-exchange-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeaderSection } from "@/components/sections/header-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import { SandboxSection } from "@/components/sections/sandbox-section";
import { SupportedCoinsSection } from "@/components/sections/supported-coins-section";
import { CtaSection } from "@/components/sections/cta-section";
import { TrustedPartnersSection } from "@/components/sections/trusted-partners-section";
import { Button } from "@/components/ui/button";

import { features, integrations, partners, stats, supportedCoins } from "@/lib/data";
import { useEffect, useState } from "react";
import StartAccepting from "@/components/sections/start-accepting";
import { HowCustomerPay } from "@/components/sections/how-customer-pay";
import HowIntegrate from "@/components/sections/how-integrate";
import { StatsSection } from "@/components/sections/stats-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedPartnersSection partners={partners} />
      <StartAccepting />
      <DigitalExchangeSection partners={partners} stats={stats} />
      <StatsSection />
      <HowIntegrate />
      <HowCustomerPay />
      <SupportedCoinsSection coins={supportedCoins} />
      {/* <IntegrationsSection integrations={integrations} /> */}
      <FeaturesSection features={features} />
      <SandboxSection />
      {/* Scroll to top button */}
      <ScrollToTopButton />
    </>
  );
}

// Scroll to top button component
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500
            shadow-lg transition-all duration-300 animate-in fade-in hover:from-emerald-700 hover:to-emerald-600"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </Button>
      )}
    </>
  );
}
