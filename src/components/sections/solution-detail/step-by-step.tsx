"use client";

import { Section } from "@/components/shared/section";
import HeadTitle from "@/components/shared/head-title";

interface Step {
  title: string;
  description: string;
}

interface StepByStepProps {
  steps: Step[];
}

export function StepByStep({ steps }: StepByStepProps) {
  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <HeadTitle
        title="How It Works"
        subtitle="Simple integration process for accepting crypto payments"
        className="mb-16"
      />

      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-emerald-200 dark:bg-emerald-900 md:block"></div>

        {/* Steps */}
        <div className="space-y-12 md:space-y-24">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Step number and content - alternating layout */}
                <div className={`flex ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative flex flex-col items-center">
                    <div className="absolute left-0 top-0 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-8">
                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                </div>

                {/* Illustration placeholder - can be replaced with actual images */}
                <div className={`flex items-center justify-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="h-48 w-full max-w-sm rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <span className="text-emerald-600 dark:text-emerald-400">Step {index + 1} Illustration</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}