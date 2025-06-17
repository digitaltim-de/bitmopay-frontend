"use client";

import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSubtleAnimation } from "@/hooks/use-subtle-animation";

export function HeroSection() {
  useSubtleAnimation({
    fadeInElements: [".hero-text", ".hero-button"],
    fadeInDuration: 0.5,
    fadeInStagger: 0.1,
    fadeInTrigger: ".hero-section",
  });

  return (
    <div className="hero-section bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className="hero-text text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl
              md:text-6xl"
          >
            <span className="mb-2 block">Helpful Resources</span>
            <span className="block text-emerald-600 dark:text-emerald-500">To Get You Started</span>
          </h1>
          <p className="hero-text mx-auto mt-5 max-w-xl text-xl text-gray-500 dark:text-gray-300">
            Access guides, documentation, and useful materials to help you integrate and maximize
            Bitmopay for your business.
          </p>
          <div className="hero-button mt-10 flex justify-center space-x-4">
            <Button asChild size="lg" className="rounded-lg font-medium">
              <Link href="#resource-library" className="flex items-center">
                Explore Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg font-medium">
              <Link href="/documentation" className="flex items-center">
                <BookOpen className="mr-2 h-4 w-4" />
                Documentation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
