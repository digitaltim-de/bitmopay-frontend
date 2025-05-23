"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/section";
import { HeroLayout } from "@/components/layouts/hero-layout";

export function PricingHeroSection() {
  return (
    <HeroLayout
      className="relative overflow-hidden bg-gradient-to-b from-gray-700 to-gray-800 text-white dark:from-gray-900
        dark:to-gray-950"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-emerald-600/20 blur-3xl dark:bg-emerald-600/10"></div>
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-emerald-700/20 blur-3xl dark:bg-emerald-700/10"></div>
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5"></div>
      </div>{" "}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Simple, Transparent Pricing
          </h1>

          <p className="mb-8 text-xl text-gray-300 dark:text-gray-200">
            Pay only when you earn. No monthly fees, no surprises.
          </p>

          <div className="mb-8">
            <Badge
              className="border-emerald-400 bg-emerald-500/20 px-4 py-2 text-lg font-semibold text-white
                hover:bg-emerald-500/30"
            >
              0.5% per transaction
            </Badge>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg">Start Accepting Crypto</Button>
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-200 text-white hover:border-emerald-300 dark:border-emerald-800
                dark:hover:border-emerald-700"
            >
              Compare Solutions
            </Button>
          </div>
        </div>
      </div>
    </HeroLayout>
  );
}
