"use client";

import {ChevronRight, Coins, Link as LinkIcon, Repeat, ShieldCheck, Wallet, Zap,} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";
import {Section} from "../shared/section";
import HeadTitle from "@/components/shared/head-title";

// Type definition for clarity
interface Feature {
    icon: string;
    title: string;
    description: string;
}

// Icon selection function
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
        case "LinkIcon":
            return <LinkIcon className="h-5 w-5"/>;
        case "Coins":
            return <Coins className="h-5 w-5"/>;
        default:
            return null;
    }
};

interface FeaturesSectionProps {
    features: Feature[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
    return (
        <Section className="bg-secondary">
            <HeadTitle
                title="What Bitmopay can do for you"
                htype="h2"
                subtitle="Explore powerful features designed for developers, merchants, and Web3 apps."
            />
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {features.map((feature, index) => (
                    <Card key={index} className="border-none shadow-sm">
                        <CardContent className="p-6">
                            <div
                                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
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
