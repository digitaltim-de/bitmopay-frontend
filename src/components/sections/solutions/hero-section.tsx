"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById("solutions-grid");
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-950 py-16 text-white
      dark:from-gray-900 dark:to-gray-950"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
        <div
          className="absolute left-10 top-20 h-72 w-72 rounded-full bg-emerald-600/20 blur-3xl dark:bg-emerald-600/10"></div>
        <div
          className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-emerald-700/20 blur-3xl dark:bg-emerald-700/10"></div>
        <div
          className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Crypto Payments for Every Use Case
          </h1>

          <p className="mb-8 text-xl text-gray-300 dark:text-gray-200">
            Whether online store, SaaS model, or creator tool – Bitmopay integrates flexibly into any business model.
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToSolutions}
              className="bg-white text-emerald-800 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              View All Use Cases
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
