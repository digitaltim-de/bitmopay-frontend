"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";

export default function ResourceTemplate({
  title = "Resource Title",
  description = "Resource description",
  children,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="mb-8">
          <AnimatedItem>
            <Button asChild variant="ghost" className="mb-4">
              <Link
                href="/resources"
                className="flex items-center text-gray-500 hover:text-gray-700"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Link>
            </Button>
          </AnimatedItem>

          <AnimatedItem>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h1>
          </AnimatedItem>

          <AnimatedItem>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">{description}</p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {children}
    </div>
  );
}
