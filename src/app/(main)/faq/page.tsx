"use client";

import { useState } from "react";
import { HeroSection } from "@/components/sections/faq/hero-section";
import { FAQSection } from "@/components/sections/faq/faq-section";

export default function FAQPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <HeroSection />
      <FAQSection />
    </div>
  );
}
