"use client";

import { useSubtleAnimation } from "@/hooks/use-subtle-animation";

export function HeroSection() {
  useSubtleAnimation({
    fadeInElements: [".hero-text"],
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
            <span className="mb-2 block">Get in Touch</span>
            <span className="block text-emerald-600 dark:text-emerald-500">With Our Team</span>
          </h1>
          <p className="hero-text mx-auto mt-5 max-w-2xl text-xl text-gray-500 dark:text-gray-300">
            Have questions, feedback, or need support with Bitmopay? Our team is here to help you
            succeed with crypto payments.
          </p>
        </div>
      </div>
    </div>
  );
}
