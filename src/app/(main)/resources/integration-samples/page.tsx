"use client";

import ResourceTemplate from "@/components/shared/resource-template";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink } from "lucide-react";
import Link from "next/link";

const integrationSamples = [
  {
    title: "Node.js SDK Integration",
    language: "JavaScript",
    level: "Intermediate",
    description:
      "Complete sample showing how to integrate the Bitmopay Node.js SDK into your application.",
    repo: "https://github.com/bitmopay/nodejs-sample",
    demo: "https://nodejs-demo.bitmopay.com",
  },
  {
    title: "PHP Integration Example",
    language: "PHP",
    level: "Beginner",
    description: "Simple PHP example for accepting cryptocurrency payments with Bitmopay.",
    repo: "https://github.com/bitmopay/php-sample",
  },
  {
    title: "React Payment Component",
    language: "React",
    level: "Intermediate",
    description:
      "Ready-to-use React component for adding crypto payments to your React applications.",
    repo: "https://github.com/bitmopay/react-payment",
    demo: "https://react-demo.bitmopay.com",
  },
  {
    title: "Python Flask Integration",
    language: "Python",
    level: "Intermediate",
    description: "Example showing how to integrate Bitmopay with a Flask application.",
    repo: "https://github.com/bitmopay/python-flask-sample",
  },
  {
    title: "Vue.js Payment Component",
    language: "Vue",
    level: "Intermediate",
    description: "Vue.js component for accepting crypto payments in your Vue application.",
    repo: "https://github.com/bitmopay/vue-payment",
    demo: "https://vue-demo.bitmopay.com",
  },
  {
    title: "Webhook Handler Examples",
    language: "Multiple",
    level: "Advanced",
    description: "Sample implementations of webhook handlers for various programming languages.",
    repo: "https://github.com/bitmopay/webhook-examples",
  },
];

export default function IntegrationSamplesPage() {
  return (
    <ResourceTemplate
      title="Integration Samples"
      description="Ready-to-use code samples for integrating Bitmopay across different platforms"
    >
      <AnimatedSection containerClass="samples-grid" itemClass="sample-card">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {integrationSamples.map((sample, index) => (
            <Card
              key={index}
              className="sample-card h-full overflow-hidden transition-all hover:shadow-md"
            >
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-start justify-between">
                  <Badge variant="outline" className="rounded-md">
                    {sample.language}
                  </Badge>
                  <Badge variant="secondary" className="rounded-md text-xs">
                    {sample.level}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{sample.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">{sample.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between pb-4 pt-2">
                <Link
                  href={sample.repo}
                  className="flex items-center font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400
                    dark:hover:text-emerald-300"
                >
                  <Code className="mr-2 h-4 w-4" />
                  View Code
                </Link>

                {sample.demo && (
                  <Link
                    href={sample.demo}
                    className="flex items-center font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400
                      dark:hover:text-blue-300"
                  >
                    Live Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </AnimatedSection>
    </ResourceTemplate>
  );
}
