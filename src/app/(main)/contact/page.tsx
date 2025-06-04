import { Metadata } from "next";
import { HeroSection } from "@/components/sections/contact/hero-section";
import { ContactFormSection } from "@/components/sections/contact/contact-form-section";
import { ContactInfoSection } from "@/components/sections/contact/contact-info-section";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top";

export const metadata: Metadata = {
  title: "Contact Us - Bitmopay",
  description:
    "Get in touch with Bitmopay's team for support, partnerships, or general inquiries about our crypto payment solutions",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <ContactFormSection />
      <ContactInfoSection />
      <ScrollToTopButton />
    </>
  );
}
