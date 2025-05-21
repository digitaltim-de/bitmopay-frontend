import Image from "next/image";
import { Button } from "../ui/button";
import { Section } from "../shared/section";

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
const StepCard = ({ step }: { step: (typeof steps)[0] }) => (
  <div
    className="group relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300
      hover:border-emerald-200 hover:shadow-md"
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
const BenefitItem = ({ text }: { text: string }) => (
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
    <Section className="bg-gray">
      <h2 className="title !mb-16 text-center">How customers pay with Bitmopay</h2>

      {/* Steps */}
      <div className="relative mb-16">
        <div className="absolute left-0 top-24 z-0 hidden h-1 w-full bg-emerald-100 lg:block"></div>
        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} />
          ))}
        </div>
      </div>

      {/* Checkout UI + Benefits */}
      <div className="relative overflow-hidden rounded-3xl sm:p-8 md:p-12">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl"></div>

        <div className="relative z-10 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Benefits */}
          <div className="order-2 md:order-1">
            <div className="rounded-2xl border border-gray-100 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
              <h3 className="mb-4 text-3xl font-bold text-gray-900">Customer Benefits</h3>
              <p className="mb-8 text-gray-600">
                Crypto payments are not only easy – they’re better:
              </p>
              <ul className="mb-8 space-y-4">
                {benefits.map((text, index) => (
                  <BenefitItem key={index} text={text} />
                ))}
              </ul>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button>
                  See Demo Checkout
                  <svg
                    className="ml-2 h-5 w-5"
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
          <div className="relative order-1 md:order-2">
            <div
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-full
                bg-emerald-400/20 blur-3xl"
            ></div>
            <div className="relative transform transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-emerald-300/20 blur-xl"></div>
              <Image
                src="/mobile-payment-app.png"
                alt="Bitmopay customer checkout interface"
                width={350}
                height={450}
                className="relative z-10 mx-auto rounded-2xl border border-white/20 shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-emerald-500/30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
