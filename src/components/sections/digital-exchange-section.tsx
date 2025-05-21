"use client";

import type React from "react";

import { useInView } from "react-intersection-observer";
import { Shield, Zap, Globe, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Section } from "../shared/section";

interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  color?: string;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function DigitalExchangeSection() {
  const { ref } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Enhanced stats with more metadata
  const stats: Stat[] = [
    {
      value: "94",
      label: "Customer Satisfaction",
      suffix: "%",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      value: "1,000",
      label: "Active Merchants",
      suffix: "+",
      color: "from-blue-400 to-blue-600",
    },
    {
      value: "105",
      label: "Avg. Transaction Value",
      prefix: "$",
      color: "from-purple-400 to-purple-600",
    },
    {
      value: "18",
      label: "Annual Growth",
      suffix: "%",
      color: "from-amber-400 to-amber-600",
    },
  ];

  // Enhanced features with icons and more detailed descriptions
  const features: Feature[] = [
    {
      title: "100% Crypto-Native",
      description:
        "Built exclusively for cryptocurrency transactions with no fiat dependencies or traditional banking limitations.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Subscriptions & Escrow",
      description:
        "Offer recurring payment plans and secure transactions with our optional 7-day escrow protection system.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Instant Payouts",
      description:
        "Access your funds within minutes after reaching the configurable payout threshold with minimal fees.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Developer-First",
      description:
        "Integrate quickly with our comprehensive REST API, webhooks, and SDKs for all major programming languages.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ];

  // Simple counter display without animation
  const Counter = ({
    value,
    prefix = "",
    suffix = "",
  }: {
    value: string;
    prefix?: string;
    suffix?: string;
  }) => {
    return (
      <span>
        {prefix}
        {value}
        {suffix}
      </span>
    );
  };

  return (
    <Section className="background-light-gray" ref={ref}>
      <div className="relative">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span
            className="mb-4 inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700
              dark:bg-emerald-950/40 dark:text-emerald-400"
          >
            Why Choose Bitmopay
          </span>
          <h2 className="title">The Future of Digital Exchange</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            A crypto-first payment gateway designed for modern commerce. No banks. No legacy
            systems.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side: Features */}
          <div className="order-2 lg:order-1">
            {/* Features content */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Link
                  href="#"
                  key={index}
                  className="group block rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all
                    hover:border-emerald-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800
                    dark:hover:border-emerald-800/50"
                >
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600
                          transition-colors group-hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400
                          dark:group-hover:bg-emerald-900/50"
                      >
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3
                        className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-emerald-700
                          dark:text-white dark:group-hover:text-emerald-400"
                      >
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Button className="group">
                Learn more about our features
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Todo baska yrede kullanilicak Benefits content */}
            {/* <div className="space-y-6 mt-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Customer Benefits
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-3">
                        <svg
                          className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        No account or KYC needed for customers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-3">
                        <svg
                          className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Support for 50+ cryptocurrencies
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-3">
                        <svg
                          className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Transparent rates – no hidden fees
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-3">
                        <svg
                          className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Secure, fast blockchain settlement
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Merchant Benefits
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-3">
                        <svg
                          className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Low transaction fees (only 0.5%)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-3">
                        <svg
                          className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        No chargebacks or payment disputes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-3">
                        <svg
                          className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Detailed analytics and reporting
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-3">
                        <svg
                          className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Global customer reach without borders
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

             */}
          </div>

          {/* Right side: Stats */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-white/80
                  to-white/50 shadow-xl backdrop-blur-sm dark:border-gray-700 dark:from-gray-800/80
                  dark:to-gray-800/50"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://cdn.dribbble.com/userupload/19248974/file/original-07317ffa368c0f97b2fc423f73d082ad.jpg?resize=1504x1128&vertical=center"
                    alt="Crypto analytics dashboard visualization"
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="txt-shadow mb-2 text-2xl font-bold">
                      Real-time Analytics Dashboard
                    </h3>
                    <p className="txt-shadow text-sm text-white/80">
                      Monitor your crypto transactions and performance metrics in one place
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
