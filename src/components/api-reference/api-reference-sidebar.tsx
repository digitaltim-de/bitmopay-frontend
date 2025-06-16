"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ApiReference } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface ApiReferenceSidebarProps {
  allApiReference: ApiReference[];
  activeApi: ApiReference;
  setActiveApi: (api: ApiReference) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  activeSection: string | null;
  setActiveSection: (sectionId: string | null) => void;
}

export function ApiReferenceSidebar({
  allApiReference,
  activeApi,
  setActiveApi,
  isSidebarOpen,
  setIsSidebarOpen,
  activeSection,
  setActiveSection,
}: ApiReferenceSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // Get icon component from icon name
  const getIconComponent = (iconName: string): LucideIcon => {
    const Icon = (Icons as any)[iconName] || Icons.FileText;
    return Icon;
  };

  const toggleSection = (apiSlug: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [apiSlug]: !prev[apiSlug],
    }));
  };

  const handleApiReferenceClick = (api: ApiReference) => {
    setActiveApi(api);
    setActiveSection(api.sections[0]?.id || null);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <aside
      className={cn(
        `fixed top-[65px] z-30 w-72 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950
        lg:sticky lg:h-[calc(100vh-4rem)]`,
        "transform transition-transform duration-300 ease-in-out lg:transform-none",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-800 lg:hidden">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">API Reference</h2>
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

        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="px-4 py-6">
            <nav className="space-y-6">
              {allApiReference.map((api) => {
                const isActive = activeApi.slug === api.slug;
                const isExpanded = expandedSections[api.slug] || isActive;
                const Icon = getIconComponent(api.icon);

                return (
                  <div key={api.slug} className="space-y-1">
                    <button
                      onClick={() => {
                        handleApiReferenceClick(api);
                        toggleSection(api.slug);
                      }}
                      className={cn(
                        "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium",
                        isActive
                          ? "bg-emerald-50 text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-300"
                          : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
                      )}
                    >
                      <div className="flex items-center">
                        <Icon className="mr-3 h-4 w-4" />
                        <span>{api.title}</span>
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          isExpanded ? "rotate-180" : "rotate-0",
                        )}
                      />
                    </button>

                    {/* Section links */}
                    {isExpanded && (
                      <div className="ml-7 space-y-1">
                        {api.sections.map((section) => (
                          <button
                            key={section.id}
                            onClick={() => handleSectionClick(section.id)}
                            className={cn(
                              "block w-full rounded-md px-3 py-1.5 text-left text-sm",
                              activeSection === section.id
                                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"
                                : `text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800
                                  dark:hover:text-gray-300`,
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
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
}
