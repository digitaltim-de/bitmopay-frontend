"use client";

import { useState, useEffect } from "react";
import { Documentation } from "@/lib/types";
import { DocumentationSidebar } from "./documentation-sidebar";
import { DocumentationContent } from "./documentation-content";
import { DocumentationHeader } from "./documentation-header";

interface DocumentationLayoutProps {
  documentation: Documentation;
  allDocumentation: Documentation[];
}

export function DocumentationLayout({ documentation, allDocumentation }: DocumentationLayoutProps) {
  const [activeDoc, setActiveDoc] = useState<Documentation>(documentation);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(
    documentation.sections[0]?.id || null,
  );

  // Update active doc when documentation prop changes
  useEffect(() => {
    setActiveDoc(documentation);
    setActiveSection(documentation.sections[0]?.id || null);
  }, [documentation]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      {/* Header */}
      <DocumentationHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />{" "}
      <div className="container flex flex-col justify-center lg:flex-row">
        {/* Sidebar */}
        <DocumentationSidebar
          allDocumentation={allDocumentation}
          activeDoc={activeDoc}
          setActiveDoc={setActiveDoc}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Main content */}
        <main className="flex-1 px-4 py-8">
          <DocumentationContent
            documentation={activeDoc}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </main>
      </div>
    </div>
  );
}
