"use client";

import { Section } from "@/components/shared/section";

interface CodeExampleBlockProps {
  language: string;
  title: string;
  code: string;
}

export function CodeExampleBlock({ language, title, code }: CodeExampleBlockProps) {
  return (
    <Section className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
        
        <div className="overflow-hidden rounded-lg bg-gray-900 shadow-md">
          {/* Code header */}
          <div className="flex items-center justify-between border-b border-gray-800 bg-gray-800 px-4 py-2">
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
              <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs font-medium text-gray-400">{language}</div>
          </div>
          
          {/* Code content */}
          <pre className="overflow-x-auto p-4 text-sm">
            <code className="font-mono text-gray-300">
              {code}
            </code>
          </pre>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            For more examples and detailed documentation, visit our{" "}
            <a 
              href="/docs/api" 
              className="font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              API Documentation
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}