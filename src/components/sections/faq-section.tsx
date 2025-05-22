"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "../shared/section";
import HeadTitle from "@/components/shared/head-title";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "What cryptocurrencies does Bitmopay support?",
      answer: "Bitmopay supports a wide range of cryptocurrencies including Bitcoin, Ethereum, USDT, USDC, BNB, Solana, and Tron. We're constantly adding support for more cryptocurrencies to provide you with the most comprehensive payment solution."
    },
    {
      question: "How quickly are funds available after a transaction?",
      answer: "Funds are typically available within minutes after a transaction is confirmed on the blockchain. For most cryptocurrencies, this means 1-2 confirmations. You can configure your payout threshold in your dashboard settings."
    },
    {
      question: "Are there any transaction fees?",
      answer: "Bitmopay charges a small fee on each transaction, typically ranging from 0.5% to 1% depending on the volume. There are no setup fees, monthly fees, or hidden charges. You only pay for what you use."
    },
    {
      question: "How does the chargeback protection work?",
      answer: "Unlike traditional payment methods, cryptocurrency transactions are irreversible by nature, which eliminates the risk of chargebacks. Additionally, our optional 7-day escrow system provides an extra layer of protection for both merchants and customers."
    },
    {
      question: "How do I integrate Bitmopay with my website?",
      answer: "Integration is simple with our comprehensive REST API, webhooks, and SDKs for all major programming languages. We also offer plugins for popular e-commerce platforms like Shopify, WooCommerce, and more. Our developer documentation provides step-by-step guides."
    },
    {
      question: "Is Bitmopay secure?",
      answer: "Yes, security is our top priority. We use industry-standard encryption, secure key management, and follow best practices for cryptocurrency storage. Our system undergoes regular security audits and penetration testing to ensure your funds are safe."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-gray">
      <HeadTitle
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Bitmopay's cryptocurrency payment gateway."
        htype="h2"
      />
      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
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
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="border-t border-gray-100 px-6 py-4 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}