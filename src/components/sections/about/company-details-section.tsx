"use client";

import { Section } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";

export function CompanyDetailsSection() {
  return (
    <Section className="bg-gray-50 dark:bg-gray-900" id="company-details">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
        {/* Left column - Text content */}
        <div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Who we are
          </h2>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
            Bitmopay is operated by SOCOFT DİJİTAL MEDYA HİZMETLERİ LİMİTED ŞİRKETİ, headquartered in Istanbul, Turkey. 
            Our team works globally to deliver modern crypto payment infrastructure that respects user privacy and merchant control.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We're committed to making cryptocurrency payments accessible to businesses of all sizes, 
            from independent developers to large e-commerce platforms.
          </p>
        </div>

        {/* Right column - Address card */}
        <div>
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Legal Address
              </h3>
              <address className="not-italic text-gray-600 dark:text-gray-400 space-y-1">
                <p>SOCOFT DİJİTAL MEDYA HİZMETLERİ LİMİTED ŞİRKETİ</p>
                <p>Ataköy Towers, B Blok</p>
                <p>Ataköy 7-8-9-10. Kısım Mah.</p>
                <p>Çobançeşme E-5 Yanyol Cad. Kat 11 D:128</p>
                <p>34158 Bakırköy / İstanbul, Turkey</p>
              </address>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}