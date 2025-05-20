"use client"

import Image from "next/image"
import type {Partner} from "@/lib/types"

interface TrustedPartnersSectionProps {
    partners: Partner[]
}

export function TrustedPartnersSection({partners}: TrustedPartnersSectionProps) {
    // Create a duplicate array of partners to ensure continuous scrolling
    const duplicatedPartners = [...partners, ...partners, ...partners]

    return (
        <section className="py-1 relative overflow-hidden">
            {/* Logo slider container with mask gradients */}
            <div className="relative w-full mt-12">
                {/* Left gradient mask - matches the background gradient */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-r from-white via-white to-transparent"></div>

                {/* Right gradient mask - matches the background gradient */}
                <div
                    className="absolute right-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-l from-white via-white to-transparent"></div>


                {/* Scrolling logos container */}
                <div className="flex overflow-hidden relative">
                    {/* Animated inner container */}
                    <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap gap-8">
                        {duplicatedPartners.map((partner, index) => (
                            <Image
                                src={partner.logo || "/placeholder.svg"}
                                alt={partner.name}
                                width={120}
                                height={30}
                                className="h-8 w-auto grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
