"use client";

import { Section } from "@/components/shared/section";
import HeadTitle from "@/components/shared/head-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function PricingFaqSection() {
  const faqs = [
    {
      question: "Are there any hidden fees?",
      answer: "No, Bitmopay has a simple and transparent pricing model. You only pay 0.5% per transaction with no setup fees, no monthly costs, and no hidden charges. What you see is what you get."
    },
    {
      question: "When do I receive payouts?",
      answer: "Payouts are processed automatically once the transaction is confirmed on the blockchain. For most cryptocurrencies, this means within minutes to hours. You can also set custom payout thresholds in your dashboard."
    },
    {
      question: "What crypto can I accept?",
      answer: "Bitmopay supports a wide range of cryptocurrencies including Bitcoin, Ethereum, USDT, USDC, BNB, Solana, and many more. We're constantly adding support for new cryptocurrencies to provide you with the most comprehensive payment solution."
    },
    {
      question: "Do I need technical knowledge to use Bitmopay?",
      answer: "No technical knowledge is required to start accepting crypto payments. Our platform is designed to be user-friendly with simple integration options. We offer plugins for popular e-commerce platforms, payment links, and comprehensive documentation for developers."
    },
    {
      question: "Is there a minimum transaction amount?",
      answer: "There is no minimum transaction amount set by Bitmopay. However, for very small transactions, network fees on some blockchains might make micropayments impractical. Our system will notify you if a transaction amount is too low for a particular cryptocurrency."
    },
    {
      question: "Can I get a refund if a customer overpays?",
      answer: "Yes, our platform allows you to issue refunds for overpayments or returns. The refund process is simple and can be initiated directly from your transaction dashboard."
    }
  ];

  return (
    <Section className="bg-white dark:bg-gray-950">
      <HeadTitle
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Bitmopay's pricing and payment processing."
        htype="h2"
      />
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-gray-900 dark:text-white font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}