"use client";

import {ChevronRight, Coins, Link as LinkIcon, Repeat, ShieldCheck, Wallet, Zap,} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";
import {Section} from "../shared/section";
import HeadTitle from "@/components/shared/head-title";

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
        description: "Receive crypto payouts in minutes depending on network congestion and fees.",
    },
    {
        icon: "LinkIcon",
        title: "Easy API Integration",
        description: "Integrate our REST API and Webhooks in minutes. Includes sandbox and test tools.",
    },
    {
        icon: "Coins",
        title: "Multi-Chain Support",
        description: "Support for BTC, ETH, USDT, USDC, BNB, TRON and more – all crypto, no fiat.",
    },
];

// Icon-Auswahl-Funktion
const renderIcon = (iconName: string) => {
    switch (iconName) {
        case "Repeat":
            return <Repeat className="h-5 w-5"/>;
        case "ShieldCheck":
            return <ShieldCheck className="h-5 w-5"/>;
        case "Wallet":
            return <Wallet className="h-5 w-5"/>;
        case "Zap":
            return <Zap className="h-5 w-5"/>;
        case "Link":
            return <Link className="h-5 w-5"/>;
        case "Coins":
            return <Coins className="h-5 w-5"/>;
        default:
            return null;
    }
};

export function FeaturesSection() {
    return (
        <Section className="bg-secondary">
            <HeadTitle
                title="What Bitmopay can do for you"
                htype="h2"
                subtitle="Explore powerful features designed for developers, merchants, and Web3 apps.
                    "/>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {features.map((feature, index) => (
                    <Card key={index} className="border-none shadow-sm">
                        <CardContent className="p-6">
                            <div
                                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                                {renderIcon(feature.icon)}
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                            <p className="text-sm text-gray-500">{feature.description}</p>
                            <Link
                                href="#"
                                className="mt-4 inline-flex items-center text-sm font-medium text-emerald-600 hover:underline"
                            >
                                Learn more <ChevronRight className="ml-1 h-4 w-4"/>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
