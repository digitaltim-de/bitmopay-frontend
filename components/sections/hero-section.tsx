"use client"

import {Button} from "@/components/ui/button"
import {useState} from "react"

export function HeroSection() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Email submitted:", email)
        // Reset form
        setEmail("")
    }

    return (
        <section
            className="relative bg-gradient-to-b from-emerald-900 to-emerald-950 text-white pt-16 pb-32 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-700/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left column - Hero content */}
                    <div>
                        <div
                            className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-800/70 text-emerald-300 font-medium text-sm mb-6 backdrop-blur-sm border border-emerald-700/50">
              <span className="flex h-2 w-2 mr-2">
                <span
                    className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
                            #1 CRYPTO PAYMENT GATEWAY
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
                            <span className="block">Start accepting</span>
                            <span className="bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">crypto payments</span>
                        </h1>

                        <p className="text-gray-300 mb-8 max-w-xl font-semibold text-2xl">
                            Adding a crypto checkout to your website or online store is easy with our automated
                            cryptocurrency payment gateway, and your customers will love it.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Button
                                type="submit"
                            >
                                Accept crypto payments in 10 minutes
                            </Button>
                        </form>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm text-gray-300">
                            <div className="flex items-center">
                                <svg className="h-5 w-5 text-emerald-400 mr-2 flex-shrink-0" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>
                    Accept over 50 cryptocurrencies
                </span>
                            </div>
                            <div className="flex items-center">
                                <svg className="h-5 w-5 text-emerald-400 mr-2 flex-shrink-0" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>
                    No hidden fees or chargebacks
                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right column - Payment UI mockup */}
                    <div className="relative animate-in slide-in-from-right duration-700 delay-300">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-transparent z-10 md:hidden"></div>

                        <div className="relative z-20 perspective-1000">
                            <img src="https://coingate.com/app/uploads/2023/11/business_main_crypto_man_invoice2.png" alt="Payment UI Mockup"/>

                            {/* Decorative elements */}
                            <div
                                className="absolute -bottom-12 -right-12 w-64 h-64 bg-emerald-600/30 rounded-full blur-3xl -z-10"></div>
                            <div
                                className="absolute -top-8 -left-8 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
