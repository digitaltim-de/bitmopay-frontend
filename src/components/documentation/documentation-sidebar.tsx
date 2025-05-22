"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Documentation } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface DocumentationSidebarProps {
  allDocumentation: Documentation[];
  activeDoc: Documentation;
  setActiveDoc: (doc: Documentation) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  activeSection: string | null;
  setActiveSection: (sectionId: string | null) => void;
}

export function DocumentationSidebar({
  allDocumentation,
  activeDoc,
  setActiveDoc,
  isSidebarOpen,
  setIsSidebarOpen,
  activeSection,
  setActiveSection,
}: DocumentationSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // Get icon component from icon name
  const getIconComponent = (iconName: string): LucideIcon => {
    const Icon = (Icons as any)[iconName] || Icons.FileText;
    return Icon;
  };

  const toggleSection = (docSlug: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [docSlug]: !prev[docSlug],
    }));
  };

  const handleDocumentationClick = (doc: Documentation) => {
    setActiveDoc(doc);
    setActiveSection(doc.sections[0]?.id || null);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <aside
      className={cn(
        "fixed top-16 bottom-0 z-30 w-72 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 lg:sticky",
        "transform transition-transform duration-300 ease-in-out lg:transform-none",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-800 lg:hidden">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Documentation</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>

        <ScrollArea className="flex-1 px-4 py-6">
          <nav className="space-y-6">
            {allDocumentation.map((doc) => {
              const isActive = activeDoc.slug === doc.slug;
              const isExpanded = expandedSections[doc.slug] || isActive;
              const Icon = getIconComponent(doc.icon);

              return (
                <div key={doc.slug} className="space-y-1">
                  <button
                    onClick={() => {
                      handleDocumentationClick(doc);
                      toggleSection(doc.slug);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium",
                      isActive
                        ? "bg-emerald-50 text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-300"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    )}
                  >
                    <div className="flex items-center">
                      <Icon className="mr-2 h-4 w-4" />
                      <span>{doc.title}</span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isExpanded ? "rotate-180" : ""
                      )}
                    />
                  </button>

                  {isExpanded && (
                    <div className="ml-6 space-y-1 pt-1">
                      {doc.sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => handleSectionClick(section.id)}
                          className={cn(
                            "w-full rounded-md px-3 py-1.5 text-left text-sm",
                            activeSection === section.id && isActive
                              ? "font-medium text-emerald-900 dark:text-emerald-300"
                              : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                          )}
                        >
                          {section.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </ScrollArea>

        <div className="border-t border-gray-200 p-4 dark:border-gray-800">
          <div className="rounded-md bg-gray-50 p-3 dark:bg-gray-900">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Need help?</h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Our support team is ready to assist you with any questions.
            </p>
            <Button
              variant="default"
              size="sm"
              className="mt-3 w-full"
              asChild
            >
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}