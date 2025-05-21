import Image from "next/image";
import { Button } from "../ui/button";

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
const StepCard = ({ step }: { step: typeof steps[0] }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 relative group">
      <div className="flex items-center mb-6">
        <div className="relative">
          <div className="w-16 h-16 bg-emerald-50 group-hover:bg-emerald-100 rounded-full flex items-center justify-center text-xl">
            {step.icon}
          </div>
          <div className="absolute -top-2 -right-2 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm group-hover:bg-emerald-600 transition-colors duration-300">
            {step.number}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 ml-4">
          {step.title}
        </h3>
      </div>
      <p className="text-gray-600">{step.description}</p>
    </div>
);

// Benefit item
const BenefitItem = ({ text }: { text: string }) => (
    <li className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
        <svg
            className="h-4 w-4 text-emerald-600"
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
      <span className="text-gray-700">{text}</span>
    </li>
);

export function HowCustomerPay() {
  return (
      <section className="py-20 bg-gray overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-16">
            How customers pay with Bitmopay
          </h2>

          {/* Steps */}
          <div className="relative mb-16">
            <div className="hidden lg:block absolute top-24 left-0 w-full h-1 bg-emerald-100 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                  <StepCard key={index} step={step} />
              ))}
            </div>
          </div>

          {/* Checkout UI + Benefits */}
          <div className="relative rounded-3xl sm:p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Benefits */}
              <div className="order-2 md:order-1">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">
                    Customer Benefits
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Crypto payments are not only easy – they’re better:
                  </p>
                  <ul className="space-y-4 mb-8">
                    {benefits.map((text, index) => (
                        <BenefitItem key={index} text={text} />
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button>
                      See Demo Checkout
                      <svg
                          className="ml-2 w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="order-1 md:order-2 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl"></div>
                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-300/20 rounded-2xl blur-xl"></div>
                  <Image
                      src="/mobile-payment-app.png"
                      alt="Bitmopay customer checkout interface"
                      width={350}
                      height={450}
                      className="mx-auto rounded-2xl shadow-xl border border-white/20 relative z-10"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/30 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
