"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSubtleAnimation } from "@/hooks/use-subtle-animation";

export function HeroSection() {
  useSubtleAnimation({
    fadeInElements: [".hero-text", ".hero-search"],
    fadeInDuration: 0.5,
    fadeInStagger: 0.1,
    fadeInTrigger: ".hero-section",
  });

  return (
    <div className="hero-section bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className="hero-text text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl
              md:text-6xl"
          >
            <span className="mb-2 block">Frequently Asked</span>
            <span className="block text-emerald-600 dark:text-emerald-500">Questions</span>
          </h1>
          <p className="hero-text mx-auto mt-5 max-w-xl text-xl text-gray-500 dark:text-gray-300">
            Find answers to common questions about Bitmopay&apos;s crypto payment solutions
            and integration process.
          </p>
          
          <div className="hero-search mx-auto mt-10 max-w-md">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search for answers..." 
                className="rounded-lg pl-10 pr-4 py-2 w-full" 
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
