"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CtaButton {
  text: string;
  link: string;
  variant: "default" | "outline";
}

interface CtaFooterSectionProps {
  title?: string;
  description?: string;
  buttons?: CtaButton[];
}

export function CtaFooterSection({ 
  title = "Ready for Crypto Payments?", 
  description = "Start with Bitmopay today and unlock new payment options for your business.",
  buttons = [
    { text: "Get Started", link: "/signup", variant: "default" },
    { text: "View Partner Program", link: "/partners", variant: "outline" }
  ]
}: CtaFooterSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map((button, index) => (
            <Button 
              key={index}
              size="lg" 
              variant={button.variant}
              className={button.variant === "outline" 
                ? "border-emerald-200 dark:border-emerald-800 hover:border-emerald-300 dark:hover:border-emerald-700 text-emerald-700 dark:text-emerald-300" 
                : "bg-emerald-600 hover:bg-emerald-700 text-white"}
              asChild
            >
              <Link href={button.link}>
                {button.text}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
