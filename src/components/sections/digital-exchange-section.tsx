"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { Shield, Zap, Globe, TrendingUp, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Stat {
    value: string
    label: string
    prefix?: string
    suffix?: string
    color?: string
}

interface Feature {
    title: string
    description: string
    icon: React.ReactNode
}

export function DigitalExchangeSection() {
    const { ref } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

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
    ]

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
    ]


    // Simple counter display without animation
    const Counter = ({ value, prefix = "", suffix = "" }: { value: string; prefix?: string; suffix?: string }) => {
        return (
            <span>
                {prefix}
                {value}
                {suffix}
            </span>
        )
    }

    return (
        <section
            className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden"
            ref={ref}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-4">
                          Why Choose Bitmopay
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 dark:from-white dark:via-emerald-400 dark:to-white bg-clip-text text-transparent">
                            The Future of Digital Exchange
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                            A crypto-first payment gateway designed for modern commerce. No banks. No legacy systems.
                        </p>
                    </div>

                    {/* Main content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left side: Features */}
                        <div className="order-2 lg:order-1">
                            {/* Features content */}
                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800/50 group"
                                    >
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mr-4">
                                                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors">
                                                    {feature.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Benefits content */}
                            <div className="space-y-6 mt-8">
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Customer Benefits</h3>
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
                                            <span className="text-gray-700 dark:text-gray-300">Support for 50+ cryptocurrencies</span>
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
                                            <span className="text-gray-700 dark:text-gray-300">Transparent rates – no hidden fees</span>
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
                                            <span className="text-gray-700 dark:text-gray-300">Secure, fast blockchain settlement</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Merchant Benefits</h3>
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
                                            <span className="text-gray-700 dark:text-gray-300">Low transaction fees (only 0.5%)</span>
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
                                            <span className="text-gray-700 dark:text-gray-300">No chargebacks or payment disputes</span>
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
                                            <span className="text-gray-700 dark:text-gray-300">Detailed analytics and reporting</span>
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

                            <div className="mt-8">
                                <Button className="group">
                                    Learn more about our features
                                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </div>

                        {/* Right side: Stats */}
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                {/* Decorative elements */}
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
                                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>

                                <div className="relative bg-gradient-to-br from-white/80 to-white/50 dark:from-gray-800/80 dark:to-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-xl group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-2xl"></div>

                                    <div className="relative aspect-[4/3] w-full">
                                        <Image
                                            src="/crypto-dashboard.png"
                                            alt="Crypto analytics dashboard visualization"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                                        <div className="absolute bottom-4 left-4 right-4 text-white">
                                            <h3 className="text-xl font-bold mb-2">Real-time Analytics Dashboard</h3>
                                            <p className="text-sm text-white/80">
                                                Monitor your crypto transactions and performance metrics in one place
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
