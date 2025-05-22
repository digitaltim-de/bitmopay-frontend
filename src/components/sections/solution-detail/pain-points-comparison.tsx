"use client";

import { Section } from "@/components/shared/section";
import { Check, X } from "lucide-react";

interface ComparisonItem {
  traditional: string;
  bitmopay: string;
}

interface PainPointsComparisonProps {
  title: string;
  description: string;
  comparison: ComparisonItem[];
}

export function PainPointsComparison({ title, description, comparison }: PainPointsComparisonProps) {
  return (
    <Section className="bg-white dark:bg-gray-950">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
        {/* Left column - Text content */}
        <div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>

        {/* Right column - Comparison table */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 grid grid-cols-2 gap-4 border-b border-gray-200 pb-4 dark:border-gray-800">
            <div className="font-semibold text-gray-700 dark:text-gray-300">Traditional Payments</div>
            <div className="font-semibold text-emerald-600 dark:text-emerald-400">Bitmopay</div>
          </div>

          {comparison.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-2 gap-4 py-4 ${
                index !== comparison.length - 1 ? "border-b border-gray-200 dark:border-gray-800" : ""
              }`}
            >
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <X className="mr-2 h-5 w-5 flex-shrink-0 text-red-500" />
                <span>{item.traditional}</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>{item.bitmopay}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}