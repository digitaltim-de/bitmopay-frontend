"use client";

import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";

export const PartnerNetworkSection = () => {
  const partnerTypes = ["Agencies", "Resellers", "Developers", "Networkers"];

  return (
    <Section className="bg-gray-50 dark:bg-gray-800">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-bold">Join Our Growing Network of Partners</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Our partners include agencies, resellers, developers, and networkers who help businesses
            adopt cryptocurrency payments. Join our community and grow your revenue with every
            transaction.
          </p>
          <ul className="mb-8 space-y-3">
            {partnerTypes.map((item, index) => (
              <li key={index} className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/bitmopay/crypto-payment-gateway.png"
            alt="Bitmopay Partner"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
};
