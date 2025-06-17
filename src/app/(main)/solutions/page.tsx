import { HeroSection } from "@/components/sections/solutions/hero-section";
import { SolutionsGrid } from "@/components/sections/solutions/solutions-grid";
import { FeatureHighlight } from "@/components/sections/solutions/feature-highlight";
import { CtaFooterSection } from "@/components/sections/solutions/cta-footer-section";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top";
import { loadSolutionsData } from "@/lib/load-solutions";

export default async function SolutionsPage() {
  // Load solutions data from JSON files
  const solutions = await loadSolutionsData();

  return (
    <>
      <HeroSection />
      <SolutionsGrid solutions={solutions} />
      <FeatureHighlight />
      <CtaFooterSection />
      <ScrollToTopButton />
    </>
  );
}
