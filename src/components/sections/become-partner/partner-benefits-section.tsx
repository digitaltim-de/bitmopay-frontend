"use client";

import { Section } from "@/components/shared/section";
import HeadTitle from "@/components/shared/head-title";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const PartnerBenefitsSection = () => {
  const benefits = [
    {
      title: "0.5% First Year Commission",
      description:
        "Earn 0.5% in the first year, then 0.15% thereafter for as long as your referred merchants remain active.",
    },
    {
      title: "Crypto Payouts",
      description: "Get paid in Bitcoin, Ethereum, or stablecoins automatically.",
    },
    {
      title: "No Minimum Volume",
      description: "Start earning from the first transaction without volume requirements.",
    },
    {
      title: "API & Dashboard",
      description: "Track your performance with a dedicated partner dashboard.",
    },
    {
      title: "Instant Referral Link",
      description: "Start referring merchants immediately with your unique link.",
    },
    {
      title: "Manual Assignment",
      description: "Manually assign merchants to your account when needed.",
    },
  ];

  return (
    <Section className="bg-white dark:bg-gray-900">
      <HeadTitle
        title="Partner Benefits"
        subtitle="Discover the advantages of becoming a Bitmopay partner"
        htype="h2"
      />
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <Card key={index} className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
              <p className="text-sm text-gray-500">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
