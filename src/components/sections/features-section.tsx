"use client";

import {
  ChevronRight,
  Coins,
  Link as LinkIcon,
  Repeat,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

// Optional: Typdefinition für Klarheit
interface Feature {
  icon: string;
  title: string;
  description: string;
}

// Array mit allen Features
const features: Feature[] = [
  {
    icon: "Repeat",
    title: "Recurring Payments",
    description:
      "Enable crypto subscriptions with 3/7/1-day reminders and automatic renewal support.",
  },
  {
    icon: "ShieldCheck",
    title: "Buyer Protection",
    description:
      "Freeze payments for 7 days and mark checkout as secured. Optional per transaction.",
  },
  {
    icon: "Wallet",
    title: "Self-Hosted Wallets",
    description:
      "Get full control over your funds using your own withdrawal wallet infrastructure.",
  },
  {
    icon: "Zap",
    title: "Fast Settlements",
    description:
      "Receive crypto payouts in minutes depending on network congestion and fees.",
  },
  {
    icon: "LinkIcon",
    title: "Easy API Integration",
    description:
      "Integrate our REST API and Webhooks in minutes. Includes sandbox and test tools.",
  },
  {
    icon: "Coins",
    title: "Multi-Chain Support",
    description:
      "Support for BTC, ETH, USDT, USDC, BNB, TRON and more – all crypto, no fiat.",
  },
];

// Icon-Auswahl-Funktion
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "Repeat":
      return <Repeat className="h-5 w-5" />;
    case "ShieldCheck":
      return <ShieldCheck className="h-5 w-5" />;
    case "Wallet":
      return <Wallet className="h-5 w-5" />;
    case "Zap":
      return <Zap className="h-5 w-5" />;
    case "Link":
      return <Link className="h-5 w-5" />;
    case "Coins":
      return <Coins className="h-5 w-5" />;
    default:
      return null;
  }
};

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            What Bitmopay can do for you
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore powerful features designed for developers, merchants, and
            Web3 apps.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 mb-4">
                  {renderIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-emerald-600 mt-4 text-sm font-medium hover:underline"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
