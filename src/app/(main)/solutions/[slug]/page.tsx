"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top";
import { SolutionHero } from "@/components/sections/solution-detail/solution-hero";
import { PainPointsComparison } from "@/components/sections/solution-detail/pain-points-comparison";
import { StepByStep } from "@/components/sections/solution-detail/step-by-step";
import { TargetGroups } from "@/components/sections/solution-detail/target-groups";
import { BenefitsGrid } from "@/components/sections/solution-detail/benefits-grid";
import { CodeExampleBlock } from "@/components/sections/solution-detail/code-example-block";
import { Testimonial } from "@/components/sections/solution-detail/testimonial";
import { CtaFooterSection } from "@/components/sections/solutions/cta-footer-section";
import { notFound } from "next/navigation";

export default function SolutionDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [solutionData, setSolutionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSolutionData() {
      try {
        // Dynamic import of the solution data based on slug
        const data = await import(`@/contents/solutions/${slug}.json`);
        setSolutionData(data);
      } catch (error) {
        console.error("Failed to load solution data:", error);
        // If the solution data doesn't exist, redirect to 404
        notFound();
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      loadSolutionData();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!solutionData) {
    return notFound();
  }

  return (
    <>
      <SolutionHero 
        title={solutionData.title} 
        subtitle={solutionData.subtitle} 
        buttons={solutionData.heroButtons} 
      />
      
      <PainPointsComparison 
        title={solutionData.painPoints.title}
        description={solutionData.painPoints.description}
        comparison={solutionData.painPoints.comparison}
      />
      
      <StepByStep steps={solutionData.steps} />
      
      <TargetGroups groups={solutionData.targetGroups} />
      
      <BenefitsGrid benefits={solutionData.benefits} />
      
      <CodeExampleBlock 
        language={solutionData.codeExample.language}
        title={solutionData.codeExample.title}
        code={solutionData.codeExample.code}
      />
      
      {solutionData.testimonial && (
        <Testimonial 
          quote={solutionData.testimonial.quote}
          author={solutionData.testimonial.author}
          company={solutionData.testimonial.company}
          image={solutionData.testimonial.image}
        />
      )}
      
      <CtaFooterSection 
        title={solutionData.cta.title}
        description={solutionData.cta.description}
        buttons={solutionData.cta.buttons}
      />
      
      <ScrollToTopButton />
    </>
  );
}