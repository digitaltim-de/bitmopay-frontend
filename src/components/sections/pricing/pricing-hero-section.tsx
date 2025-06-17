"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/section";
import { HeroLayout } from "@/components/layouts/hero-layout";
import { cn } from "@/lib/utils";

// Add gradient text shadow style to global CSS
import "./pricing-hero-styles.css";

export function PricingHeroSection() {
  return (
    <HeroLayout
      className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12 text-white
        sm:py-20"
    >
      {/* Enhanced background elements - reduced size and count */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-emerald-600/15 blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/3 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl"></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10
            [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        ></div>
      </div>{" "}
      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="relative z-10 mb-8 lg:mb-0 lg:w-1/2">
            {/* Simplified content for reduced height */}
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <span
                className="inline-block bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text
                  text-transparent"
              >
                Simple, Transparent Pricing
              </span>
            </h1>
            <p className="mb-6 max-w-lg text-lg text-gray-300">
              Pay only when you earn. No monthly fees, no surprises.
            </p>{" "}
            <div className="mb-8 flex items-center space-x-3">
              <div
                className="rounded-full border border-emerald-500/30 bg-gradient-to-r from-emerald-800/60 to-transparent px-4
                  py-1.5"
              >
                <span className="text-lg font-semibold text-white">0.5% per transaction</span>
              </div>
              <div
                className="rounded-full border border-emerald-500/30 bg-gradient-to-r from-emerald-800/60 to-transparent px-4
                  py-1.5"
              >
                <span className="text-lg font-semibold text-white">No Monthly Fees</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-5 text-lg font-medium
                  text-gray-950 shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-600
                  hover:to-emerald-700 hover:shadow-emerald-500/40"
              >
                Start Accepting Crypto
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border-emerald-500/50 px-6 py-5 text-lg font-medium text-white backdrop-blur-sm
                  transition-all hover:bg-emerald-800/30"
              >
                Compare Solutions
              </Button>
            </div>
          </div>
          <div className="relative mt-6 lg:mt-0 lg:w-5/12">
            {" "}
            {/* Smoother creative glow effect */}
            <div
              className="absolute -left-3 -top-3 h-full w-full rounded-xl bg-gradient-to-br from-emerald-600/30
                via-emerald-500/30 to-emerald-500/30 opacity-20 blur-lg"
            ></div>
            {/* Glass-like card with smoother gradient background */}
            <div
              className="via-gray-850/95 relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br
                from-gray-900/95 to-gray-800/95 p-6 backdrop-blur-sm"
            >
              {" "}
              {/* Decorative badge with smoother gradient */}
              <div
                className="absolute -right-10 -top-10 h-20 w-20 rotate-45 bg-gradient-to-br from-emerald-500/80
                  via-emerald-500/80 to-emerald-400/80"
              ></div>
              <div
                className="absolute right-0 top-0 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 px-4 py-1
                  text-xs font-bold text-white"
              >
                BEST VALUE
              </div>
              <div className="flex flex-col">
                {/* Pricing header */}{" "}
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Transaction Fee</h3>
                  <div className="rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 p-1">
                    <div className="rounded-full bg-gray-900 px-3 py-0.5">
                      <span className="text-sm font-medium text-emerald-400">One Price</span>
                    </div>
                  </div>
                </div>{" "}
                {/* Main price with smoother gradient */}
                <div className="mb-4 flex items-baseline">
                  <span
                    className="bg-gradient-to-r from-white via-emerald-300 to-emerald-200 bg-clip-text text-4xl font-extrabold
                      text-transparent"
                  >
                    0.5%
                  </span>
                  <span className="ml-2 text-gray-400">per transaction</span>
                </div>
                <div className="mb-6 space-y-3">
                  {/* Simplified feature list */}
                  {[
                    "No monthly subscription",
                    "No setup costs",
                    "Instant withdrawals",
                    "24/7 support",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <div
                        className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-emerald-600
                          to-emerald-400"
                      >
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
                {/* CTA button */}
                <Button
                  className="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 text-base font-medium
                    text-white shadow-lg hover:from-emerald-700 hover:to-emerald-600"
                >
                  Get Started Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroLayout>
  );
}
