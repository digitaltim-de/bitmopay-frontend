"use client"

import { useState } from "react"
import { Code, Coins, Wallet, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export default function InteractiveIntegrationGuide() {
    const [activeStep, setActiveStep] = useState(0)

    const nextStep = () => setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1))
    const prevStep = () => setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1))

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                        Start in 3 Steps
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                        Crypto integration in minutes. Fast, secure, developer-friendly.
                    </p>
                </div>

                {/* Timeline Track */}
                <div className="relative mb-12">
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-200 dark:bg-gray-700 -translate-y-1/2"></div>

                    <div className="relative flex justify-between max-w-4xl mx-auto">
                        {steps.map((step, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className="relative z-10 transition-all duration-300 focus:outline-none group"
                                aria-label={`Step ${index + 1}: ${step.title}`}
                            >
                                <div
                                    className={cn(
                                        "w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold border-4 transition-all duration-500",
                                        index === activeStep
                                            ? "bg-gradient-to-r from-emerald-600 to-emerald-500 border-white text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30"
                                            : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400",
                                    )}
                                >
                                    {index + 1}
                                </div>
                                <div
                                    className={cn(
                                        "absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium transition-all duration-300",
                                        index === activeStep ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400",
                                    )}
                                >
                                    {step.title}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Display */}
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden min-h-[400px]">
                    <div className="p-8 md:p-10">
                        <div className="flex flex-col md:flex-row md:items-start gap-10">
                            {/* Left Content */}
                            <div className="md:w-2/5">
                                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg inline-flex items-center justify-center mb-6">
                                    {steps[activeStep].icon}
                                </div>

                                <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{steps[activeStep].title}</h3>
                                <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4">{steps[activeStep].subtitle}</p>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">{steps[activeStep].description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {steps[activeStep].tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-sm"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Content - Visualization */}
                            <div className="md:w-3/5 bg-gray-50 dark:bg-gray-900 rounded-lg p-6 overflow-hidden border border-gray-100 dark:border-gray-700">
                                {steps[activeStep].visual}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="absolute bottom-6 right-6 flex gap-3">
                        <button
                            onClick={prevStep}
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 flex items-center justify-center transition-colors text-gray-600 dark:text-gray-300"
                            aria-label="Previous step"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextStep}
                            className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 flex items-center justify-center transition-colors text-white"
                            aria-label="Next step"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg shadow-emerald-200/50 dark:shadow-emerald-900/30 hover:shadow-xl hover:shadow-emerald-200/60 dark:hover:shadow-emerald-900/40 transition-all"
                    >
                        Start Integration Now
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}

// Visualizations for each step
const CodeVisual = () => (
    <pre className="text-xs md:text-sm text-emerald-600 dark:text-emerald-400 overflow-x-auto h-full">
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
)

const CryptoVisual = () => (
    <div className="grid grid-cols-3 gap-4 h-full place-content-center">
        {["BTC", "ETH", "USDT", "SOL", "USDC", "BNB", "XRP", "ADA", "DOT"].map((coin, i) => (
            <div
                key={i}
                className="aspect-square rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center shadow-sm"
            >
                <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-gray-900 dark:text-white font-bold">
                    {coin}
                </div>
            </div>
        ))}
    </div>
)

const WalletVisual = () => (
    <div className="h-full flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 w-full max-w-xs shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <div className="text-emerald-600 dark:text-emerald-400 font-medium">Balance</div>
                <div className="text-gray-900 dark:text-white font-medium">$12,450.00</div>
            </div>
            <div className="space-y-3 mb-4">
                {[
                    { coin: "BTC", amount: "0.128", value: "$5,120" },
                    { coin: "ETH", amount: "2.45", value: "$4,900" },
                    { coin: "USDT", amount: "2,430", value: "$2,430" },
                ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="font-medium text-gray-900 dark:text-white">{item.coin}</div>
                        <div className="text-right">
                            <div className="text-gray-900 dark:text-white">{item.amount}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-xs">{item.value}</div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full py-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-lg font-medium transition-colors">
                Withdraw
            </button>
        </div>
    </div>
)

const steps = [
    {
        title: "Connect",
        subtitle: "API & Webhooks",
        description:
            "Integrate our powerful REST API with just a few lines of code. Get real-time webhook updates for all transaction events with comprehensive documentation and dedicated developer support.",
        icon: <Code className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
        tags: ["REST API", "Webhooks", "SDKs", "Documentation", "Developer Support"],
        visual: <CodeVisual />,
    },
    {
        title: "Accept Crypto",
        subtitle: "BTC, ETH, USDT & more",
        description:
            "Accept payments in over 50 cryptocurrencies with automatic conversion options. Support for all major tokens across multiple blockchains with real-time exchange rates and minimal transaction fees.",
        icon: <Coins className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
        tags: ["Bitcoin", "Ethereum", "Stablecoins", "Multi-chain", "Auto-conversion"],
        visual: <CryptoVisual />,
    },
    {
        title: "Get Paid",
        subtitle: "Wallet or Exchange",
        description:
            "Withdraw funds in crypto to your preferred wallet or automatically convert to fiat currency. Manage all your transactions in one dashboard with detailed analytics and reporting tools.",
        icon: <Wallet className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
        tags: ["Instant Withdrawals", "Fiat Conversion", "Multiple Wallets", "Transaction History", "Analytics"],
        visual: <WalletVisual />,
    },
]
