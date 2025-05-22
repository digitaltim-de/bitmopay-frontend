"use client";

import Image from "next/image";
import {useState} from "react";

export function HeroSection() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Email submitted:", email);
        // Reset form
        setEmail("");
    };

    return (
        <section
            className="relative overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-950 py-16 text-white
        dark:from-gray-900 dark:to-gray-950"
        >
            {/* Background decorative elements */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
                <div
                    className="absolute left-10 top-20 h-72 w-72 rounded-full bg-emerald-600/20 blur-3xl dark:bg-emerald-600/10"></div>
                <div
                    className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-emerald-700/20 blur-3xl dark:bg-emerald-700/10"></div>
                <div
                    className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
                    {/* Left column - Hero content */}
                    <div>
                        <div
                            className="mb-6 inline-flex items-center rounded-full border border-emerald-700/50 bg-emerald-800/70 px-3 py-1
                text-sm font-medium text-emerald-300 backdrop-blur-sm dark:border-emerald-800/50
                dark:bg-emerald-900/50 dark:text-emerald-400"
                        >
              <span className="mr-2 flex h-2 w-2">
                <span
                    className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-75 dark:bg-emerald-500"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
              </span>
                            Trusted by 1,000+ businesses in 32 countries
                        </div>

                        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                            <span className="block">Start accepting</span>
                            <span
                                className="bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent dark:from-gray-100
                  dark:to-emerald-400"
                            >
                crypto payments
              </span>
                        </h1>

                        <p className="mb-8 max-w-xl text-2xl font-semibold text-gray-300 dark:text-gray-200">
                            Accept crypto payments with optional escrow and fast payouts. No chargebacks.
                        </p>

                        <div
                            className="mt-4 flex flex-col gap-4 text-sm text-gray-300 dark:text-gray-200 sm:flex-row sm:items-center sm:gap-6">
                            <div className="flex items-center">
                                <svg
                                    className="mr-2 h-5 w-5 flex-shrink-0 text-emerald-400 dark:text-emerald-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Accept over 50 cryptocurrencies</span>
                            </div>
                            <div className="flex items-center">
                                <svg
                                    className="mr-2 h-5 w-5 flex-shrink-0 text-emerald-400 dark:text-emerald-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>No hidden fees or chargebacks</span>
                            </div>
                        </div>
                    </div>

                    {/* Right column - Payment UI mockup */}
                    <div
                        className="relative h-full w-full delay-300 duration-700 animate-in slide-in-from-right rounded-lg">
                        <div
                            className="absolute inset-0 z-10 bg-gradient-to-r from-emerald-900 to-transparent md:hidden rounded-lg"></div>

                        <div className="perspective-1000 absolute z-20 h-full w-full overflow-visible rounded-lg ">
                            <Image
                                src="/bitmopay/crypto-payment-gateway.png"
                                alt="Payment UI Mockup"
                                fill
                                className="object-contain rounded-lg"
                                priority
                            />

                            {/* Decorative elements */}
                            <div
                                className="absolute -bottom-12 -right-12 -z-10 h-64 w-64 rounded-full bg-emerald-600/30 blur-3xl"></div>
                            <div
                                className="absolute -left-8 -top-8 -z-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
