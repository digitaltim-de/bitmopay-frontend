"use client"

import Link from "next/link"
import { ChevronRight, Globe, Shield, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Feature } from "@/lib/types"

interface FeaturesSectionProps {
  features: Feature[]
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  // Function to render the appropriate icon based on the icon string
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe />;
      case "Shield":
        return <Shield />;
      case "Zap":
        return <Zap />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Vorteile von Bitmopay</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Entdecken Sie, warum Entwickler und Unternehmen Bitmopay für ihre Krypto-Zahlungslösungen wählen.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 mb-4">
                  {renderIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
                <Link href="#" className="inline-flex items-center text-emerald-600 mt-4 text-sm font-medium">
                  Mehr erfahren <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
