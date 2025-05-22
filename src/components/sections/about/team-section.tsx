"use client";

import { Section } from "@/components/shared/section";
import { Users, Globe, Code } from "lucide-react";

export function TeamSection() {
  return (
    <Section className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400">
            <Users size={28} />
          </div>
        </div>
        
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Our Global Team
        </h2>
        
        <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
          Our team works fully remote – across Europe, Turkey and Asia. We focus on building reliable infrastructure, not hype.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center">
            <Globe className="mr-2 h-5 w-5 text-emerald-500" />
            <span className="text-gray-700 dark:text-gray-300">Remote-first culture</span>
          </div>
          <div className="flex items-center">
            <Code className="mr-2 h-5 w-5 text-emerald-500" />
            <span className="text-gray-700 dark:text-gray-300">Developer-focused</span>
          </div>
        </div>
      </div>
    </Section>
  );
}