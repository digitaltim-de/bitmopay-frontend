"use client";

import Image from "next/image";
import type { Partner } from "@/lib/types";

interface TrustedPartnersSectionProps {
  partners: Partner[];
}

export function TrustedPartnersSection({ partners }: TrustedPartnersSectionProps) {
  // Create a duplicate array of partners to ensure continuous scrolling
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="relative overflow-hidden py-10">
      {/* Logo slider container with mask gradients */}
      <div className="container relative w-full">
        {/* Left gradient mask - matches the background gradient */}
        <div className="absolute bottom-0 left-0 top-0 z-10 w-40 bg-gradient-to-r from-white via-white to-transparent"></div>

        {/* Right gradient mask - matches the background gradient */}
        <div className="absolute bottom-0 right-0 top-0 z-10 w-40 bg-gradient-to-l from-white via-white to-transparent"></div>

        {/* Scrolling logos container */}
        <div className="relative flex overflow-hidden">
          {/* Animated inner container */}
          <div className="flex animate-[scroll_30s_linear_infinite] gap-8 whitespace-nowrap">
            {duplicatedPartners.map((partner, index) => (
              <Image
                key={index}
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={30}
                className="h-8 w-auto opacity-70 grayscale transition-all duration-300 group-hover:opacity-100
                  group-hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
