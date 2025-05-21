"use client";

interface Stat {
    value: string;
    label: string;
}

export function DigitalExchangeSection() {
    const stats: Stat[] = [
        { value: "94%", label: "Customer Satisfaction" },
        { value: "1,000+", label: "Active Merchants" },
        { value: "$105", label: "Avg. Transaction Value" },
        { value: "18%", label: "Annual Growth" },
    ];

    const features = [
        {
            title: "100% Crypto-Native",
            description: "No fiat support. No banks. Built for crypto commerce from the ground up.",
        },
        {
            title: "Subscriptions & Escrow",
            description: "Offer recurring payments and optional buyer protection with 7-day hold.",
        },
        {
            title: "Instant Payouts",
            description: "Receive your funds within minutes after reaching the payout threshold.",
        },
        {
            title: "Developer-First",
            description: "Modern REST API, Webhooks, and SDKs for fast and reliable integration.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto">
                <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 to-emerald-700 rounded-3xl px-8 py-16 md:px-16 md:py-24 text-white">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Left side */}
                        <div className="md:w-1/2">
                            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-white/10 text-emerald-100 font-medium text-sm backdrop-blur-sm">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300 mr-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
                </span>
                                TRUSTED BY 1,000+ BUSINESSES
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Why Choose <span className="text-emerald-300">Bitmopay</span>?
                            </h2>

                            <p className="text-emerald-100 text-lg mb-8 max-w-xl">
                                A crypto-first payment gateway designed for modern commerce. No banks. No legacy systems.
                            </p>

                            {/* Feature List */}
                            <ul className="space-y-6 mb-8">
                                {features.map((f, i) => (
                                    <li key={i}>
                                        <h4 className="text-lg font-semibold text-white mb-1">{f.title}</h4>
                                        <p className="text-emerald-100 text-sm">{f.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right side: Stats */}
                        <div className="md:w-1/2 relative max-w-md mx-auto">
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl"></div>

                            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="grid grid-cols-2 gap-4">
                                    {stats.map((stat, i) => (
                                        <div
                                            key={i}
                                            className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                                        >
                                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                            <div className="text-emerald-200 text-sm">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
