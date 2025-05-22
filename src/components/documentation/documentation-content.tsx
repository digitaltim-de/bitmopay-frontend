"use client";

import { useEffect, useRef } from "react";
import { Documentation, DocumentationSection } from "@/lib/types";
import { CodeBlock } from "./code-block";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface DocumentationContentProps {
  documentation: Documentation;
  activeSection: string | null;
  setActiveSection: (sectionId: string | null) => void;
}

export function DocumentationContent({
  documentation,
  activeSection,
  setActiveSection,
}: DocumentationContentProps) {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Scroll to active section when it changes
  useEffect(() => {
    if (activeSection && sectionRefs.current[activeSection]) {
      sectionRefs.current[activeSection]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeSection]);

  // Format content with line breaks
  const formatContent = (content: string) => {
    return content.split("\n").map((line, index) => (
      <p key={index} className={line.trim() === "" ? "mb-4" : "mb-4 last:mb-0"}>
        {line}
      </p>
    ));
  };

  // Render a section based on its content
  const renderSection = (section: DocumentationSection) => {
    return (
      <div
        key={section.id}
        id={section.id}
        ref={(el) => (sectionRefs.current[section.id] = el)}
        className="mb-12 scroll-mt-20"
      >
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          {section.title}
        </h2>

        {section.content && (
          <div className="prose prose-gray max-w-none dark:prose-invert">
            {formatContent(section.content)}
          </div>
        )}

        {/* Render code blocks if any */}
        {section.codeBlocks?.map((codeBlock, index) => (
          <CodeBlock
            key={`${section.id}-code-${index}`}
            title={codeBlock.title}
            languages={codeBlock.languages}
          />
        ))}

        {/* Render FAQs if any */}
        {section.faqs && section.faqs.length > 0 && (
          <div className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              {section.faqs.map((faq, index) => (
                <AccordionItem key={`${section.id}-faq-${index}`} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    {formatContent(faq.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-3xl">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          {documentation.title}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
          {documentation.description}
        </p>
      </div>

      {/* Table of Contents */}
      <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-3 font-medium text-gray-900 dark:text-white">On this page</h3>
        <nav>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {documentation.sections.map((section) => (
              <li key={`toc-${section.id}`}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className="text-sm text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 text-left"
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sections */}
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {documentation.sections.map(renderSection)}
      </div>
    </div>
  );
}
