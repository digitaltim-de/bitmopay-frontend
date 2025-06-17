"use client";

import { useState, useEffect } from "react";
import { ApiReference } from "@/lib/types";
import { ApiReferenceSidebar } from "./api-reference-sidebar";
import { ApiReferenceContent } from "./api-reference-content";
import { ApiReferenceHeader } from "./api-reference-header";

interface ApiReferenceLayoutProps {
  apiReference: ApiReference;
  allApiReference: ApiReference[];
}

export function ApiReferenceLayout({ apiReference, allApiReference }: ApiReferenceLayoutProps) {
  const [activeApi, setActiveApi] = useState<ApiReference>(apiReference);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(
    apiReference.sections[0]?.id || null,
  );

  // Update active API when apiReference prop changes
  useEffect(() => {
    setActiveApi(apiReference);
    setActiveSection(apiReference.sections[0]?.id || null);
  }, [apiReference]);

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
      <ApiReferenceHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div className="container flex flex-col justify-center lg:flex-row">
        {/* Sidebar */}
        <ApiReferenceSidebar
          allApiReference={allApiReference}
          activeApi={activeApi}
          setActiveApi={setActiveApi}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Main content */}
        <main className="flex-1 px-4 py-8">
          <ApiReferenceContent
            apiReference={activeApi}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </main>
      </div>
    </div>
  );
}
