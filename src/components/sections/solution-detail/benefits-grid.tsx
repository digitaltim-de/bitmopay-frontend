"use client";

import { Section } from "@/components/shared/section";
import HeadTitle from "@/components/shared/head-title";
import { ShieldCheck, Wallet, Webhook, Coins, TestTube } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface BenefitsGridProps {
  benefits: Benefit[];
}

// Icon selection function
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "ShieldCheck":
      return <ShieldCheck className="h-6 w-6" />;
    case "Wallet":
      return <Wallet className="h-6 w-6" />;
    case "Webhook":
      return <Webhook className="h-6 w-6" />;
    case "Coins":
      return <Coins className="h-6 w-6" />;
    case "TestTube":
      return <TestTube className="h-6 w-6" />;
    default:
      return null;
  }
};

export function BenefitsGrid({ benefits }: BenefitsGridProps) {
  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <HeadTitle
        title="Key Benefits"
        subtitle="Why businesses choose Bitmopay for cryptocurrency payments"
      />

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex">
            <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400">
              {renderIcon(benefit.icon)}
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}