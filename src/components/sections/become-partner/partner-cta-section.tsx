"use client";

import { Button } from "@/components/ui/button";

export const PartnerCtaSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          Become a Bitmopay Partner Today
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Join our partner program and start earning lifetime commissions on all your customers'
          transactions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Submit Partner Request
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-emerald-200 text-emerald-700 hover:border-emerald-300 dark:border-emerald-800
              dark:text-emerald-300 dark:hover:border-emerald-700"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
