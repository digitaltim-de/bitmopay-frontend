import { HeroSection } from "@/components/sections/resources/hero-section";
import { ResourceLibrary } from "@/components/sections/resources/resource-library";
import { CtaSection } from "@/components/sections/resources/cta-section";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top";

export const metadata = {
  title: "Resources - Bitmopay",
  description:
    "Access guides, documentation, and useful materials to help you integrate and maximize Bitmopay for your business.",
};

export default function ResourcesPage() {
  return (
    <>
      <HeroSection />
      <ResourceLibrary />
      <CtaSection />
      <ScrollToTopButton />
    </>
  );
}
