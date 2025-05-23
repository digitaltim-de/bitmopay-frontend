import Image from "next/image";
import {Section} from "../shared/section";
import {Check} from "lucide-react";
import HeadTitle from "@/components/shared/head-title";
import {Button} from "@/components/ui/button";

const steps = [
    {
        number: 1,
        title: "Shop",
        description: "Browse and choose products in a Bitmopay-powered store.",
        icon: "🛒",
    },
    {
        number: 2,
        title: "Pay with Crypto",
        description: "Select crypto at checkout and confirm your order.",
        icon: "💳",
    },
    {
        number: 3,
        title: "Choose Currency",
        description: "Pick Bitcoin, Ethereum, USDT or 50+ others.",
        icon: "🪙",
    },
    {
        number: 4,
        title: "Complete Payment",
        description: "Scan the QR or copy address to finalize payment.",
        icon: "✅",
    },
];

const benefits = [
    "No account or KYC needed",
    "Supports Bitcoin, Ethereum & 50+ currencies",
    "Transparent rates – no hidden fees",
    "Secure, fast blockchain settlement",
];

// StepCard component
const StepCard = ({step}: { step: (typeof steps)[0] }) => (
    <div
        className="group relative rounded-xl bg-white p-6 shadow-sm transition-all duration-300
      hover:shadow-md"
    >
        <div className="mb-6 flex items-center">
            <div className="relative">
                <div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-xl
            group-hover:bg-emerald-100"
                >
                    {step.icon}
                </div>
                <div
                    className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500
            text-xs font-bold text-white shadow-sm transition-colors duration-300 group-hover:bg-emerald-600"
                >
                    {step.number}
                </div>
            </div>
            <h3 className="ml-4 text-xl font-semibold text-gray-900">{step.title}</h3>
        </div>
        <p className="text-gray-600">{step.description}</p>
    </div>
);

// Benefit item
const BenefitItem = ({text}: { text: string }) => (
    <li className="flex items-start">
        <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
            <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
        <span className="text-gray-700">{text}</span>
    </li>
);

export function HowCustomerPay() {
    return (
        <>
            <Section className="background-light-gray">
                <div className="text-center">
                    <HeadTitle
                        title="How customers pay with Bitmopay"
                        subtitle=" Customers can pay with Bitcoin, Ethereum, USDT and 50+ other currencies. No account or KYC
                    needed."
                        htype="h2"/>
                </div>

                {/* Steps */}
                <div className="relative">
                    <div className="absolute left-0 top-24 z-0 hidden h-1 w-full bg-emerald-100 lg:block"></div>
                    <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <StepCard key={index} step={step}/>
                        ))}
                    </div>
                </div>

                {/* Checkout UI + Benefits */}
            </Section>
            <Section className="background-light-gray-2 ">
            {/* Content container */}
            <div className="relative ">
                {/* Header */}
                <HeadTitle
                    title="Customer Benefits"
                    subtitle=" Customers can pay with Bitcoin, Ethereum, USDT and 50+ other currencies. No account or KYC"
                    htype="h2"/>
                {/* Main content */}
                <div className="flex flex-col md:flex-row">
                    {/* Benefits */}
                    <div className="md:w-1/2 md:pr-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Benefit 1 */}
                            <div
                                className="bg-gradient-to-br from-white to-emerald-50 p-5 rounded-xl shadow-sm transform will-change-transform transition-transform hover:-translate-y-1">
                                <div className="flex items-center mb-3">
                                    <div
                                        className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                                        <Check className="h-4 w-4 text-emerald-600"/>
                                    </div>
                                    <h4 className="font-semibold text-gray-800">Kein KYC</h4>
                                </div>
                                <p className="text-sm text-gray-600">Kein Konto oder KYC erforderlich</p>
                            </div>

                            {/* Benefit 2 */}
                            <div
                                className="bg-gradient-to-br from-white to-emerald-50 p-5 rounded-xl shadow-sm transform will-change-transform transition-transform hover:-translate-y-1">
                                <div className="flex items-center mb-3">
                                    <div
                                        className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                                        <Check className="h-4 w-4 text-emerald-600"/>
                                    </div>
                                    <h4 className="font-semibold text-gray-800">50+ Währungen</h4>
                                </div>
                                <p className="text-sm text-gray-600">Unterstützt Bitcoin, Ethereum & über 50
                                    Kryptowährungen</p>
                            </div>

                            {/* Benefit 3 */}
                            <div
                                className="bg-gradient-to-br from-white to-emerald-50 p-5 rounded-xl shadow-sm transform will-change-transform transition-transform hover:-translate-y-1">
                                <div className="flex items-center mb-3">
                                    <div
                                        className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                                        <Check className="h-4 w-4 text-emerald-600"/>
                                    </div>
                                    <h4 className="font-semibold text-gray-800">Transparente Gebühren</h4>
                                </div>
                                <p className="text-sm text-gray-600">Transparente Gebühren – keine versteckten
                                    Kosten</p>
                            </div>

                            {/* Benefit 4 */}
                            <div
                                className="bg-gradient-to-br from-white to-emerald-50 p-5 rounded-xl shadow-sm transform will-change-transform transition-transform hover:-translate-y-1">
                                <div className="flex items-center mb-3">
                                    <div
                                        className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                                        <Check className="h-4 w-4 text-emerald-600"/>
                                    </div>
                                    <h4 className="font-semibold text-gray-800">Schnelle Abwicklung</h4>
                                </div>
                                <p className="text-sm text-gray-600">Sicher, schnelle Blockchain-Abwicklung</p>
                            </div>
                        </div>

                        <div className="mt-8 text-center md:text-left">
                            <Button>
                                Demo-Checkout ansehen
                            </Button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2 mt-10 md:mt-0">
                        <div className="relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-emerald-100 transform will-change-transform rotate-3 rounded-xl"></div>
                            <div className="relative transform hover:-rotate-1 transition-transform duration-300">
                                <Image
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ebGhzhSOOSqryoTv6OvfmLwrfqBVDl.png"
                                    alt="Bitmopay Checkout Interface"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Section>
        </>

    );
}
