"use client";

import React, {useState} from "react";
import {ArrowRight, ChevronLeft, ChevronRight, Code, Coins, ExternalLink, Wallet} from "lucide-react";
import {cn} from "@/lib/utils";
import {Section} from "../shared/section";
import HeadTitle from "@/components/shared/head-title";
import Badge from "@/components/shared/badge";
import {Button} from "@/components/ui/button";

export function HowIntegrate() {
    const [activeStep, setActiveStep] = useState(0);

    const nextStep = () => setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    const prevStep = () => setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));

    return (
        <Section className="background-light-gray-2">
            <div className="text-center">
                <HeadTitle title="Start in 3 Steps"
                           subtitle="Crypto integration in minutes. Fast, secure, developer-friendly."
                           htype="h2"
                />
            </div>

            {/* Timeline Track */}
            <div className="relative mb-12">
                <div
                    className="absolute left-0 right-0 top-1/2 h-[1px] -translate-y-1/2 bg-gray-200 dark:bg-gray-700"></div>

                <div className="relative mx-auto flex max-w-4xl justify-between">
                    {steps.map((step, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className="group relative z-10 transition-all duration-300 focus:outline-none"
                            aria-label={`Step ${index + 1}: ${step.title}`}
                        >
                            <div
                                className={cn(
                                    `flex h-14 w-14 items-center justify-center rounded-full border-4 text-xl font-bold transition-all
                  duration-500`,
                                    index === activeStep
                                        ? `border-white bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg
                      shadow-emerald-200 dark:shadow-emerald-900/30`
                                        : "border-gray-200 bg-white text-gray-400 dark:border-gray-700 dark:bg-gray-800",
                                )}
                            >
                                {index + 1}
                            </div>
                            <div
                                className={cn(
                                    `absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium transition-all
                  duration-300`,
                                    index === activeStep
                                        ? "text-gray-900 dark:text-white"
                                        : "text-gray-500 dark:text-gray-400",
                                )}
                            >
                                {step.title}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Display */}
            <div
                className="relative min-h-[400px] overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg
          dark:border-gray-700 dark:bg-gray-800"
            >
                <div className="p-8 md:p-10">
                    <div className="flex flex-col gap-10 md:flex-row md:items-start">
                        {/* Left Content */}
                        <div className="md:w-2/5">
                            <div
                                className="mb-6 inline-flex items-center justify-center rounded-lg bg-emerald-50 p-4 dark:bg-emerald-900/20">
                                {steps[activeStep].icon}
                            </div>

                            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                                {steps[activeStep].title}
                            </h3>
                            <p className="mb-4 font-medium text-emerald-600 dark:text-emerald-400">
                                {steps[activeStep].subtitle}
                            </p>
                            <p className="mb-6 text-gray-600 dark:text-gray-300">
                                {steps[activeStep].description}
                            </p>

                            <div className="mb-6 flex flex-wrap gap-2">
                                {steps[activeStep].tags.map((tag, i) => (
                                    <Badge>
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Right Content - Visualization */}
                        <div
                            className="overflow-hidden rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700
                dark:bg-gray-900 md:w-3/5"
                        >
                            {steps[activeStep].visual}
                        </div>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute bottom-6 right-6 flex gap-3">
                    <button
                        onClick={prevStep}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors
              hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                        aria-label="Previous step"
                    >
                        <ChevronLeft className="h-5 w-5"/>
                    </button>
                    <button
                        onClick={nextStep}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-600
              to-emerald-500 text-white transition-colors hover:from-emerald-500 hover:to-emerald-400"
                        aria-label="Next step"
                    >
                        <ChevronRight className="h-5 w-5"/>
                    </button>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Button>
                    <span>Start Integration Now</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
                </Button>
            </div>
        </Section>
    );
}

// Visualizations for each step
const CodeVisual = () => (
    <pre className="h-full overflow-x-auto text-xs text-gray-900 md:text-sm">
    <code>{`// Example API integration
import { BitmopayClient } from 'bitmopay';

const client = new BitmopayClient({
  apiKey: process.env.BITMOPAY_API_KEY,
});

// Create payment request
const payment = await client.createPayment({
  amount: "100.00",
  currency: "USD",
  callbackUrl: "https://example.com/webhook"
});

console.log(payment.checkoutUrl);`}</code>
  </pre>
);

const CryptoVisual = () => (
    <div className="grid h-full grid-cols-3 place-content-center gap-4">
        {["BTC", "ETH", "USDT", "SOL", "USDC", "BNB", "XRP", "ADA", "DOT"].map((coin, i) => (
            <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-lg border border-gray-100 bg-white shadow-sm
          dark:border-gray-700 dark:bg-gray-800"
            >
                <div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 font-bold text-gray-900
            dark:bg-emerald-900/20 dark:text-white"
                >
                    {coin}
                </div>
            </div>
        ))}
    </div>
);

const WalletVisual = () => (
    <div className="flex h-full items-center justify-center">
        <div
            className="w-full max-w-xs rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700
        dark:bg-gray-800"
        >
            <div className="mb-4 flex items-center justify-between">
                <div className="font-medium text-emerald-600 dark:text-emerald-400">Balance</div>
                <div className="font-medium text-gray-900 dark:text-white">$12,450.00</div>
            </div>
            <div className="mb-4 space-y-3">
                {[
                    {coin: "BTC", amount: "0.128", value: "$5,120"},
                    {coin: "ETH", amount: "2.45", value: "$4,900"},
                    {coin: "USDT", amount: "2,430", value: "$2,430"},
                ].map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between rounded-lg bg-gray-50 p-2 dark:bg-gray-700"
                    >
                        <div className="font-medium text-gray-900 dark:text-white">{item.coin}</div>
                        <div className="text-right">
                            <div className="text-gray-900 dark:text-white">{item.amount}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{item.value}</div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 py-2 font-medium text-white
          transition-colors hover:from-emerald-500 hover:to-emerald-400"
            >
                Withdraw
            </button>
        </div>
    </div>
);

const steps = [
    {
        title: "Connect",
        subtitle: "API & Webhooks",
        description:
            "Integrate our powerful REST API with just a few lines of code. Get real-time webhook updates for all transaction events with comprehensive documentation and dedicated developer support.",
        icon: <Code className="h-8 w-8 text-emerald-600 dark:text-emerald-400"/>,
        tags: ["REST API", "Webhooks", "SDKs", "Documentation", "Developer Support"],
        visual: <CodeVisual/>,
    },
    {
        title: "Accept Crypto",
        subtitle: "BTC, ETH, USDT & more",
        description:
            "Accept payments in over 50 cryptocurrencies with automatic conversion options. Support for all major tokens across multiple blockchains with real-time exchange rates and minimal transaction fees.",
        icon: <Coins className="h-8 w-8 text-emerald-600 dark:text-emerald-400"/>,
        tags: ["Bitcoin", "Ethereum", "Stablecoins", "Multi-chain", "Auto-conversion"],
        visual: <CryptoVisual/>,
    },
    {
        title: "Get Paid",
        subtitle: "Wallet or Exchange",
        description:
            "Withdraw funds in crypto to your preferred wallet or automatically convert to fiat currency. Manage all your transactions in one dashboard with detailed analytics and reporting tools.",
        icon: <Wallet className="h-8 w-8 text-emerald-600 dark:text-emerald-400"/>,
        tags: [
            "Instant Withdrawals",
            "Fiat Conversion",
            "Multiple Wallets",
            "Transaction History",
            "Analytics",
        ],
        visual: <WalletVisual/>,
    },
];
