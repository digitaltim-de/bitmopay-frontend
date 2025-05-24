"use client";

import { Section } from "@/components/shared/section";
import HeadTitle from "@/components/shared/head-title";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const PartnerFaqSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "When are commissions paid out?",
      answer:
        "Commissions are paid out automatically on a monthly basis directly to your cryptocurrency wallet. You can choose to receive payments in Bitcoin, Ethereum, or stablecoins.",
    },
    {
      question: "How long does the commission last?",
      answer:
        "You'll earn 0.5% commission during the first year of each merchant's activity. After the first year, the rate changes to 0.15% for the entire lifetime of the merchant's activity. As long as your referred merchants continue to use Bitmopay, you'll earn commission on their transactions.",
    },
    {
      question: "Can I assign customers directly?",
      answer:
        "Yes, you can manually assign merchants to your account through your partner dashboard. This is useful for existing relationships or when direct referral links aren't practical.",
    },
    {
      question: "What happens if a customer changes their partner?",
      answer:
        "Merchants have the option to change their assigned partner. If this happens, you'll no longer receive commissions for that merchant's future transactions.",
    },
  ];

  return (
    <Section className="bg-white dark:bg-gray-900">
      <HeadTitle
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our partner program"
        htype="h2"
      />
      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-xl bg-white shadow-sm dark:bg-gray-800">
            <button
              onClick={() => toggleFaq(index)}
              className="flex w-full items-center justify-between px-6 py-4 text-left"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</h3>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 transition-transform dark:text-gray-400 ${
                openFaqIndex === index ? "rotate-180" : "" }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? "max-h-96" : "max-h-0"}`}
            >
              <div className="px-6 py-4">
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
