"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShoppingCart, Repeat, Heart, Users, FileText, Download, RefreshCw, Plus } from "lucide-react";
import { Section } from "@/components/shared/section";
import HeadTitle from "@/components/shared/head-title";
import type { Solution } from "@/lib/types";
import Link from "next/link";

// Icon selection function
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "ShoppingCart":
      return <ShoppingCart className="h-5 w-5" />;
    case "Repeat":
      return <Repeat className="h-5 w-5" />;
    case "Heart":
      return <Heart className="h-5 w-5" />;
    case "Users":
      return <Users className="h-5 w-5" />;
    case "FileText":
      return <FileText className="h-5 w-5" />;
    case "Download":
      return <Download className="h-5 w-5" />;
    case "RefreshCw":
      return <RefreshCw className="h-5 w-5" />;
    case "Plus":
      return <Plus className="h-5 w-5" />;
    default:
      return null;
  }
};

interface SolutionsGridProps {
  solutions: Solution[];
}

export function SolutionsGrid({ solutions }: SolutionsGridProps) {
  const [filter, setFilter] = useState<string | null>(null);

  const categories = [
    { id: null, name: "All" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "saas", name: "SaaS" },
    { id: "ngo", name: "NGO" },
    { id: "creator", name: "Creator" },
    { id: "developer", name: "Developer" }
  ];

  const filteredSolutions = filter
    ? solutions.filter(solution => solution.link.includes(filter))
    : solutions;

  return (
    <Section className="bg-gray-50 dark:bg-gray-900" id="solutions-grid">
      <HeadTitle
        title="Bitmopay Use Cases & Solutions"
        htype="h2"
        subtitle="Discover how Bitmopay can be integrated into various business models and use cases."
      />

      {/* Filter Bar */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category.id || "all"}
            variant={filter === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(category.id)}
            className={filter === category.id 
              ? "bg-emerald-600 hover:bg-emerald-700" 
              : "border-emerald-200 text-emerald-700 hover:border-emerald-300 dark:border-emerald-800 dark:text-emerald-400"}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Solutions Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredSolutions.map((solution, index) => (
          <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400">
                {renderIcon(solution.icon)}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{solution.title}</h3>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{solution.description}</p>
              <Button
                variant="link"
                className="p-0 h-auto text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                asChild
              >
                <Link href={solution.link}>
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
