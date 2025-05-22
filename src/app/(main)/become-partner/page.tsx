"use client";

import { ScrollToTopButton } from "@/components/shared/scroll-to-top";
import { Section } from "@/components/shared/section";
import HeadTitle from "@/components/shared/head-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronRight, Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PartnerPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
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
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">Become a</span>
                <span
                  className="bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent dark:from-gray-100
                  dark:to-emerald-400"
                >
                  Bitmopay Partner
                </span>
              </h1>

              <p className="mb-8 max-w-xl text-2xl font-semibold text-gray-300 dark:text-gray-200">
                Earn 0.5% commission in the first year, then 0.15% thereafter on all your customers' payments – directly in crypto.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Become a Partner
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/20 hover:bg-white/10"
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>

            {/* Right column - Image */}
            <div
              className="relative h-full w-full delay-300 duration-700 animate-in slide-in-from-right rounded-lg">
              <div
                className="absolute inset-0 z-10 bg-gradient-to-r from-emerald-900 to-transparent md:hidden rounded-lg"></div>

              <div className="perspective-1000 absolute z-20 h-full w-full overflow-visible rounded-lg">
                <div className="relative h-[400px] w-full">
                  <Image
                    src="/bitmopay/crypto-payment-gateway.png"
                    alt="Bitmopay Partner Program"
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>

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

      {/* How It Works Section */}
      <Section className="bg-white dark:bg-gray-900">
        <HeadTitle
          title="How It Works"
          subtitle="Join our partner program in three simple steps and start earning commissions"
          htype="h2"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              step: 1,
              title: "Register for Free",
              description: "Sign up for our partner program with no costs or commitments."
            },
            {
              step: 2,
              title: "Invite Merchants or Assign",
              description: "Share your referral link or manually assign merchants to your account."
            },
            {
              step: 3,
              title: "Receive Commission",
              description: "Earn 0.5% in the first year, then 0.15% thereafter, automatically paid in cryptocurrency."
            }
          ].map((item, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Calculation Example Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <HeadTitle
          title="Earning Potential"
          subtitle="See how much you can earn with the Bitmopay Partner Program"
          htype="h2"
        />
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 rounded-xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-4 text-xl font-semibold">Monthly Transaction Volume Example</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="pb-3 text-left">Number of Merchants</th>
                    <th className="pb-3 text-left">Monthly Volume</th>
                    <th className="pb-3 text-left">Your Monthly Commission</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3">1 Merchant</td>
                    <td className="py-3">€25,000</td>
                    <td className="py-3 font-medium text-emerald-600">€125.00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">10 Merchants</td>
                    <td className="py-3">€250,000</td>
                    <td className="py-3 font-medium text-emerald-600">€1,250.00</td>
                  </tr>
                  <tr>
                    <td className="py-3">50 Merchants</td>
                    <td className="py-3">€1,250,000</td>
                    <td className="py-3 font-medium text-emerald-600">€6,250.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              *Based on an average monthly transaction volume of €25,000 per merchant and 0.5% commission rate during the first year.
            </p>
          </div>
        </div>
      </Section>

      {/* Feature Grid / Benefits Section */}
      <Section className="bg-white dark:bg-gray-900">
        <HeadTitle
          title="Partner Benefits"
          subtitle="Discover the advantages of becoming a Bitmopay partner"
          htype="h2"
        />
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "0.5% First Year Commission",
              description: "Earn 0.5% in the first year, then 0.15% thereafter for as long as your referred merchants remain active."
            },
            {
              title: "Crypto Payouts",
              description: "Get paid in Bitcoin, Ethereum, or stablecoins automatically."
            },
            {
              title: "No Minimum Volume",
              description: "Start earning from the first transaction without volume requirements."
            },
            {
              title: "API & Dashboard",
              description: "Track your performance with a dedicated partner dashboard."
            },
            {
              title: "Instant Referral Link",
              description: "Start referring merchants immediately with your unique link."
            },
            {
              title: "Manual Assignment",
              description: "Manually assign merchants to your account when needed."
            }
          ].map((feature, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Image Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Join Our Growing Network of Partners</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our partners include agencies, resellers, developers, and networkers who help businesses 
              adopt cryptocurrency payments. Join our community and grow your revenue with every transaction.
            </p>
            <ul className="space-y-3 mb-8">
              {["Agencies", "Resellers", "Developers", "Networkers"].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/bitmopay/crypto-payment-gateway.png"
              alt="Bitmopay Partner"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white dark:bg-gray-900">
        <HeadTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our partner program"
          htype="h2"
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {[
            {
              question: "When are commissions paid out?",
              answer: "Commissions are paid out automatically on a monthly basis directly to your cryptocurrency wallet. You can choose to receive payments in Bitcoin, Ethereum, or stablecoins."
            },
            {
              question: "How long does the commission last?",
              answer: "You'll earn 0.5% commission during the first year of each merchant's activity. After the first year, the rate changes to 0.15% for the entire lifetime of the merchant's activity. As long as your referred merchants continue to use Bitmopay, you'll earn commission on their transactions."
            },
            {
              question: "Can I assign customers directly?",
              answer: "Yes, you can manually assign merchants to your account through your partner dashboard. This is useful for existing relationships or when direct referral links aren't practical."
            },
            {
              question: "What happens if a customer changes their partner?",
              answer: "Merchants have the option to change their assigned partner. If this happens, you'll no longer receive commissions for that merchant's future transactions."
            }
          ].map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-white shadow-sm dark:bg-gray-800"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform dark:text-gray-400 ${
                    openFaqIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaqIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Become a Bitmopay Partner Today</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Join our partner program and start earning lifetime commissions on all your customers' transactions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Submit Partner Request
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-emerald-200 dark:border-emerald-800 hover:border-emerald-300 dark:hover:border-emerald-700 text-emerald-700 dark:text-emerald-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </>
  );
}
