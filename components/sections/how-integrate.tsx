import React from "react";
import { Button } from "../ui/button";

// Step data
const steps = [
  {
    number: 1,
    title: "Connect",
    subtitle: "API & Webhooks",
    description: "Integrate via REST API and get real-time webhook updates.",
    icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h2" />
        </svg>
    ),
  },
  {
    number: 2,
    title: "Accept Crypto",
    subtitle: "BTC, ETH, USDT & more",
    description: "Receive 50+ cryptocurrencies with auto conversion.",
    icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
        </svg>
    ),
  },
  {
    number: 3,
    title: "Get Paid",
    subtitle: "Wallet or Exchange",
    description: "Withdraw funds in crypto to your preferred wallet.",
    icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5" />
        </svg>
    ),
  },
];

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-800 to-emerald-600 p-6 rounded-xl shadow-lg border border-emerald-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col h-full group">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-300/20 rounded-full blur-xl" />

      {/* Step number */}
      <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-700 text-lg font-bold shadow-md">
        {step.number}
      </div>

      {/* Icon */}
      <div className="mb-6 flex justify-center">
        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
          {step.icon}
        </div>
      </div>

      {/* Title & Description */}
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-white mb-1">{step.title}</h3>
        <p className="text-emerald-100 font-medium">{step.subtitle}</p>
      </div>
      <p className="text-white/80 text-center text-sm">{step.description}</p>

      {/* Arrow (except last) */}
      {index < steps.length - 1 && (
          <div className="hidden lg:block absolute top-36 left-full w-12 h-12 transform -translate-x-1/2 z-20">
            <div className="bg-white rounded-full p-2 shadow-md">
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
      )}
    </div>
);

const HowIntegrate = () => {
  return (
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Start in 3 Steps</h2>
          <p className="text-gray-600 text-lg">Crypto integration in minutes. Fast, secure, developer-friendly.</p>
        </div>

        {/* Step cards */}
        <div className="relative mb-16 max-w-6xl mx-auto">
          <div className="hidden lg:block absolute top-36 left-0 w-full h-2 bg-emerald-200 z-0 rounded-full shadow-sm" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
                <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Button className="group flex mx-auto" size="xl">
          <span className="relative z-10">Start integrating now</span>
          <svg
              className="ml-2 w-6 h-6 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Button>
      </section>
  );
};

export default HowIntegrate;
