"use client";

import { Section } from "@/components/shared/section";
import HeadTitle from "@/components/shared/head-title";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Globe, Zap } from "lucide-react";

export function MissionSection() {
  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security by Design",
      description: "We build our systems with security as the foundation, not an afterthought."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global from Day One",
      description: "Our solutions are designed to work across borders, currencies, and regulatory environments."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Built for Developers",
      description: "Clean APIs, comprehensive documentation, and developer-friendly tools are at our core."
    }
  ];

  return (
    <Section className="bg-white dark:bg-gray-950">
      <HeadTitle
        title="Our Mission"
        subtitle="We believe crypto payments should be simple, borderless, and fair – without banks, chargebacks or high fees."
      />

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400">
                {value.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{value.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}