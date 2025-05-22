"use client";

import { Button } from "@/components/ui/button";

export function PricingCtaSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Ready to get started?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Create your merchant account and accept your first payment today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg">Register</Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-emerald-200 dark:border-emerald-800 hover:border-emerald-300 dark:hover:border-emerald-700 text-emerald-700 dark:text-emerald-300"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}