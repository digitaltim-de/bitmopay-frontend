"use client";

import { Section } from "@/components/shared/section";
import HeadTitle from "@/components/shared/head-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import Image from "next/image";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Register for Free",
      description:
        "Sign up for our partner program with no costs or commitments. The process takes less than 2 minutes.",
      features: ["No credit card required", "Instant dashboard access"],
      buttonText: "Create Account",
      buttonVariant: "outline" as const,
      icon: null,
    },
    {
      number: 2,
      title: "Invite Merchants",
      description:
        "Share your referral link or manually assign merchants to your account. Track everything from your dashboard.",
      features: ["Unique referral link", "Manual merchant assignment"],
      buttonText: null,
      buttonVariant: null,
      icon: <ChevronRight className="h-4 w-4" />,
    },
    {
      number: 3,
      title: "Receive Commission",
      description:
        "Earn 0.5% in the first year, then 0.15% thereafter, automatically paid in cryptocurrency.",
      features: ["Monthly automatic payouts", "Lifetime commissions"],
      buttonText: null,
      buttonVariant: null,
      icon: null,
      cryptoLogos: [
        { src: "/bitcoin-logo.png", alt: "Bitcoin" },
        { src: "/ethereum-logo.png", alt: "Ethereum" },
        { src: "/usdc-logo.png", alt: "USDC" },
      ],
    },
  ];

  return (
    <Section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <HeadTitle
        title="How It Works"
        subtitle="Join our partner program in three simple steps and start earning commissions"
        htype="h2"
      />

      <div className="mx-auto max-w-7xl">
        {/* Simple horizontal step layout */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <Card className="flex h-full flex-col border-none shadow-md transition-all hover:shadow-lg dark:bg-gray-800">
                <CardContent className="flex flex-1 flex-col p-0">
                  <div className="border-b border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-900/30">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                        <span className="font-bold">{step.number}</span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="mb-4 text-gray-600 dark:text-gray-300">{step.description}</p>

                    <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-emerald-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      {step.buttonText && (
                        <Button
                          variant={step.buttonVariant}
                          className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800
                            dark:text-emerald-400 dark:hover:bg-emerald-900/30"
                        >
                          {step.buttonText}
                        </Button>
                      )}

                      {step.icon && (
                        <div className="flex items-center justify-start space-x-2">
                          <div
                            className="inline-flex h-8 w-8 items-center justify-center rounded bg-emerald-100 text-emerald-600
                              dark:bg-emerald-900 dark:text-emerald-300"
                          >
                            {step.icon}
                          </div>
                          <span className="text-sm text-gray-500">Share your link</span>
                        </div>
                      )}

                      {step.cryptoLogos && (
                        <div className="flex items-center space-x-3">
                          {step.cryptoLogos.map((logo, logoIndex) => (
                            <Image
                              key={logoIndex}
                              src={logo.src}
                              width={24}
                              height={24}
                              alt={logo.alt}
                              className="h-6 w-6"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Start Earning Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
};
