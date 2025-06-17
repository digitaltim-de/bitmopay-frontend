"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 py-16 text-gray-900
      dark:from-gray-900 dark:to-gray-950 dark:text-white"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
        <div
          className="absolute left-10 top-20 h-72 w-72 rounded-full bg-emerald-600/10 blur-3xl dark:bg-emerald-600/10"></div>
        <div
          className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-emerald-700/10 blur-3xl dark:bg-emerald-700/10"></div>
        <div
          className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl dark:bg-emerald-500/5"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            We build the future of crypto payments
          </h1>

          <p className="mb-8 text-xl text-gray-700 dark:text-gray-300">
            Bitmopay is a Turkey-based tech company that enables global crypto payments with ease, security, and developer-first infrastructure.
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              asChild
            >
              <Link href="/signup">
                Get started
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-emerald-200 text-emerald-700 hover:border-emerald-300 dark:border-emerald-800 dark:text-emerald-400 dark:hover:border-emerald-700"
              asChild
            >
              <Link href="#company-details">
                Read our story
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}