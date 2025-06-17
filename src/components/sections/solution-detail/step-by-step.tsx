"use client";

import { Section } from "@/components/shared/section";
import HeadTitle from "@/components/shared/head-title";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Wallet, Eye, Clock } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

interface StepByStepProps {
  steps: Step[];
}

const stepIcons = [ShieldCheck, Wallet, Eye, Clock];

export function StepByStep({ steps }: StepByStepProps) {
  return (
    <Section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <HeadTitle
        title="How It Works"
        subtitle="Simple integration process for accepting crypto payments"
        className="mb-12"
      />

      <div className="mx-auto max-w-5xl">
        <div className="relative">
          {" "}
          {/* Central connecting line */}
          <div
            className="absolute bottom-20 left-1/2 top-20 hidden w-px -translate-x-1/2 transform bg-gradient-to-b
              from-blue-200 via-purple-300 to-blue-200 dark:from-blue-800 dark:via-purple-700 dark:to-blue-800
              md:block"
          ></div>
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = stepIcons[index];
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex items-center">
                  {" "}
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 z-10 hidden -translate-x-1/2 transform md:block">
                    <div
                      className="h-4 w-4 rounded-full border-4 border-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md
                        dark:border-gray-950"
                    ></div>
                  </div>
                  <div
                    className={`grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16 ${isEven ? "" : "md:text-right"}`}
                  >
                    {/* Content */}
                    <div className={isEven ? "md:order-1" : "md:order-2"}>
                      <div className="space-y-4">
                        {" "}
                        <div className="flex items-center space-x-3 md:space-x-4">
                          <div
                            className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600
                              shadow-lg"
                          >
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          <div className="rounded-full bg-blue-50 px-3 py-1 dark:bg-blue-900/40">
                            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                              Step {index + 1}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Visual card */}
                    <div className={isEven ? "md:order-2" : "md:order-1"}>
                      <Card
                        className="group overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl
                          dark:bg-gray-800"
                      >
                        <CardContent className="p-8">
                          <div className="flex flex-col items-center space-y-6 text-center">
                            {" "}
                            {/* Large icon with background */}
                            <div className="relative">
                              <div
                                className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 to-purple-200
                                  transition-transform duration-300 group-hover:scale-105 dark:from-blue-900 dark:to-purple-800"
                              >
                                <Icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                              </div>
                              {/* Step number badge */}
                              <div
                                className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r
                                  from-blue-500 to-purple-500 text-sm font-bold text-white shadow-lg"
                              >
                                {index + 1}
                              </div>
                            </div>
                            {/* Mini progress indicator */}
                            <div className="flex space-x-2">
                              {steps.map((_, i) => (
                                <div
                                  key={i}
                                  className={`h-1 rounded-full transition-all duration-300 ${
                                  i <= index
                                      ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                                      : "w-4 bg-gray-200 dark:bg-gray-700"
                                  }`}
                                />
                              ))}
                            </div>
                            {/* Action hint */}
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              {index === 0 && "Get Started"}
                              {index === 1 && "Secure Process"}
                              {index === 2 && "Monitor Status"}
                              {index === 3 && "Complete"}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
