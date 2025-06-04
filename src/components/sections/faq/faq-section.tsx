"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSubtleAnimation } from "@/hooks/use-subtle-animation";

type FAQCategory = {
  id: string;
  label: string;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
};

export function FAQSection() {
  useSubtleAnimation({
    fadeInElements: [".faq-container"],
    fadeInDuration: 0.5,
    fadeInStagger: 0.1,
    fadeInTrigger: ".faq-section",
  });

  const faqCategories: FAQCategory[] = [
    {
      id: "general",
      label: "General",
      faqs: [
        {
          id: "what-is-bitmopay",
          question: "What is Bitmopay?",
          answer:
            "Bitmopay is a comprehensive cryptocurrency payment gateway that enables businesses to accept and process crypto payments securely and efficiently. Our platform supports multiple cryptocurrencies and integrates seamlessly with popular e-commerce platforms.",
        },
        {
          id: "supported-cryptocurrencies",
          question: "Which cryptocurrencies does Bitmopay support?",
          answer:
            "Bitmopay supports a wide range of cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), Tether (USDT), USD Coin (USDC), Solana (SOL), and Tron (TRX). We regularly add support for new cryptocurrencies based on market demand and stability.",
        },
        {
          id: "transaction-fees",
          question: "What are the transaction fees?",
          answer:
            "Bitmopay offers competitive transaction fees starting at 0.5% per transaction, with volume discounts available for businesses processing larger amounts. There are no setup fees or monthly charges. Please refer to our Pricing page for detailed information on our fee structure.",
        },
        {
          id: "settlement-options",
          question: "What are my settlement options?",
          answer:
            "Businesses can choose to settle funds in the original cryptocurrency or convert to fiat currencies like USD, EUR, or GBP. Settlements can be scheduled automatically (daily, weekly, or monthly) or triggered manually as needed.",
        },
      ],
    },
    {
      id: "integration",
      label: "Integration",
      faqs: [
        {
          id: "integrate-with-store",
          question: "How do I integrate Bitmopay with my online store?",
          answer:
            "Bitmopay offers plugins for major e-commerce platforms like Shopify, WooCommerce, Magento, and PrestaShop. For custom websites, we provide comprehensive APIs and SDKs for seamless integration. Our detailed documentation and integration guides make the setup process straightforward.",
        },
        {
          id: "integration-time",
          question: "How long does integration take?",
          answer:
            "For most standard e-commerce platforms, integration can be completed in under an hour. Custom integrations typically take 1-3 days depending on the complexity of your system. Our support team is available to assist throughout the process.",
        },
        {
          id: "technical-knowledge",
          question: "Do I need technical knowledge to integrate Bitmopay?",
          answer:
            "For standard e-commerce platforms, minimal technical knowledge is required as our plugins handle most of the setup. For custom integrations, some development experience is helpful, but our detailed documentation and support team can guide you through the process.",
        },
        {
          id: "testing-integration",
          question: "Can I test the integration before going live?",
          answer:
            "Yes, Bitmopay provides a sandbox environment for testing all features without processing real transactions. This allows you to thoroughly test the integration with your systems before accepting actual cryptocurrency payments.",
        },
      ],
    },
    {
      id: "security",
      label: "Security",
      faqs: [
        {
          id: "payment-security",
          question: "How secure are Bitmopay transactions?",
          answer:
            "Bitmopay employs industry-leading security measures including end-to-end encryption, multi-signature wallets, and cold storage for funds. Our platform is regularly audited by third-party security firms and complies with relevant data protection regulations.",
        },
        {
          id: "kyc-requirements",
          question: "What KYC requirements does Bitmopay have?",
          answer:
            "Merchants integrating Bitmopay need to complete a basic verification process that includes business documentation and owner identification. The specific requirements vary by transaction volume and jurisdiction to ensure compliance with relevant regulations.",
        },
        {
          id: "data-protection",
          question: "How does Bitmopay handle customer data?",
          answer:
            "We take data protection seriously and comply with GDPR and other relevant data protection regulations. Customer payment data is encrypted, and we collect only the minimum information necessary to process transactions and comply with regulations.",
        },
        {
          id: "compliance",
          question: "Is Bitmopay compliant with regulations?",
          answer:
            "Yes, Bitmopay operates in compliance with relevant financial regulations in the jurisdictions where we operate. We continuously monitor regulatory changes and update our practices accordingly to ensure ongoing compliance.",
        },
      ],
    },
    {
      id: "support",
      label: "Support",
      faqs: [
        {
          id: "customer-support",
          question: "What kind of customer support does Bitmopay offer?",
          answer:
            "Bitmopay provides 24/7 support via email and live chat. Premium plans include dedicated account managers and priority support. Our comprehensive knowledge base and community forum also offer solutions to common questions.",
        },
        {
          id: "dispute-resolution",
          question: "How does Bitmopay handle payment disputes?",
          answer:
            "Bitmopay has a structured dispute resolution process. When a dispute arises, both merchant and customer can submit evidence through our platform. Our team reviews each case carefully and aims to resolve disputes fairly and promptly.",
        },
        {
          id: "refund-process",
          question: "What is the refund process for cryptocurrency payments?",
          answer:
            "Merchants can issue refunds directly through the Bitmopay dashboard. Refunds can be processed in the original cryptocurrency or in an equivalent value of another supported currency, based on the merchant's preference and configuration.",
        },
        {
          id: "developer-resources",
          question: "Are there resources for developers?",
          answer:
            "Yes, Bitmopay provides comprehensive developer resources including API documentation, SDKs for various programming languages, code examples, and webhooks for event notifications. Our developer support team is also available to assist with technical questions.",
        },
      ],
    },
  ];

  return (
    <div className="faq-section bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="faq-container max-w-4xl mx-auto">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
              {faqCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-4 py-2 text-sm font-medium"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-4">
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-500">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 pt-2 text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
