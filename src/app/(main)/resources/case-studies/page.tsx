"use client";

import ResourceTemplate from "@/components/shared/resource-template";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const caseStudies = [
  {
    title: "How E-Store XYZ Increased Sales by 22%",
    category: "E-commerce",
    industry: "Retail",
    description: "Learn how an online electronics retailer boosted conversion rates by accepting cryptocurrency payments.",
    image: "/placeholder.svg",
    link: "/resources/case-studies/e-store-xyz",
    results: ["22% increase in sales", "35% new customer acquisition", "Expanded to global markets"]
  },
  {
    title: "Crypto-Friendly Hotel Booking Platform",
    category: "Travel",
    industry: "Hospitality",
    description: "See how a hotel booking website reduced transaction fees and attracted crypto-savvy travelers.",
    image: "/placeholder.svg",
    link: "/resources/case-studies/hotel-booking",
    results: ["45% reduction in fees", "New demographic reached", "Streamlined reservation system"]
  },
  {
    title: "SaaS Company's Subscription Model Success",
    category: "Software",
    industry: "B2B SaaS",
    description: "How a B2B software company implemented crypto subscriptions and simplified their payment processing.",
    image: "/placeholder.svg",
    link: "/resources/case-studies/saas-subscription",
    results: ["28% higher retention rate", "Reduced payment processing costs", "Automated subscription renewals"]
  },
  {
    title: "Digital Game Marketplace Revolution",
    category: "Gaming",
    industry: "Digital Entertainment",
    description: "A game marketplace that expanded globally by embracing cryptocurrency payments.",
    image: "/placeholder.svg",
    link: "/resources/case-studies/game-marketplace",
    results: ["Global customer base expanded", "Reduced chargebacks to near-zero", "Higher profit margins"]
  },
];

export default function CaseStudiesPage() {
  return (
    <ResourceTemplate
      title="Case Studies"
      description="Real-world examples of successful Bitmopay implementations"
    >
      <AnimatedSection containerClass="cases-grid" itemClass="case-card">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Card key={index} className="case-card overflow-hidden hover:shadow-md transition-all border-t-4 border-t-emerald-500">
              <div className="relative h-48 w-full">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="rounded-md">
                    {study.category}
                  </Badge>
                  <Badge variant="secondary" className="rounded-md text-xs">
                    {study.industry}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{study.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-sm text-gray-700 dark:text-gray-200">Key Results:</p>
                  <ul className="list-disc list-inside text-sm">
                    {study.results.map((result, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">{result}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-2 pb-4">
                <Link 
                  href={study.link}
                  className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium flex items-center"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </AnimatedSection>
    </ResourceTemplate>
  );
}
