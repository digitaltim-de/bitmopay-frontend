"use client";

import { useEffect, useRef } from "react";
import { ApiReference, ApiReferenceSection, ApiEndpoint } from "@/lib/types";
import { CodeBlock } from "@/components/documentation/code-block";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ApiReferenceContentProps {
  apiReference: ApiReference;
  activeSection: string | null;
  setActiveSection: (sectionId: string | null) => void;
}

export function ApiReferenceContent({
  apiReference,
  activeSection,
  setActiveSection,
}: ApiReferenceContentProps) {
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

  // Get method color
  const getMethodColor = (method: string) => {
    switch (method.toUpperCase()) {
      case "GET":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "POST":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "PUT":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
      case "DELETE":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "PATCH":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  // Render endpoint
  const renderEndpoint = (endpoint: ApiEndpoint, index: number) => {
    return (
      <Card key={index} className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Badge className={getMethodColor(endpoint.method)}>{endpoint.method}</Badge>
            <code className="rounded bg-gray-100 px-2 py-1 font-mono text-sm dark:bg-gray-800">
              {endpoint.url}
            </code>
          </div>
          <CardDescription className="mt-2">{endpoint.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Headers */}
          {endpoint.headers && endpoint.headers.length > 0 && (
            <div>
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Headers</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="px-3 py-2 text-left font-medium">Name</th>
                      <th className="px-3 py-2 text-left font-medium">Type</th>
                      <th className="px-3 py-2 text-left font-medium">Required</th>
                      <th className="px-3 py-2 text-left font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {endpoint.headers.map((header, i) => (
                      <tr key={i} className="border-b border-gray-100 dark:border-gray-800">
                        <td className="px-3 py-2 font-mono text-sm">{header.name}</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-400">
                          {header.type}
                        </td>
                        <td className="px-3 py-2">
                          <Badge variant={header.required ? "destructive" : "secondary"}>
                            {header.required ? "Required" : "Optional"}
                          </Badge>
                        </td>
                        <td className="px-3 py-2 text-gray-700 dark:text-gray-300">
                          {header.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Parameters */}
          {endpoint.parameters && endpoint.parameters.length > 0 && (
            <div>
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Parameters</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="px-3 py-2 text-left font-medium">Name</th>
                      <th className="px-3 py-2 text-left font-medium">Type</th>
                      <th className="px-3 py-2 text-left font-medium">Required</th>
                      <th className="px-3 py-2 text-left font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {endpoint.parameters.map((param, i) => (
                      <tr key={i} className="border-b border-gray-100 dark:border-gray-800">
                        <td className="px-3 py-2 font-mono text-sm">{param.name}</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-400">{param.type}</td>
                        <td className="px-3 py-2">
                          <Badge variant={param.required ? "destructive" : "secondary"}>
                            {param.required ? "Required" : "Optional"}
                          </Badge>
                        </td>
                        <td className="px-3 py-2 text-gray-700 dark:text-gray-300">
                          {param.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Request Example */}
          {endpoint.requestExample && (
            <div>
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Request Example</h4>
              <pre className="overflow-x-auto rounded-lg bg-gray-50 p-4 text-sm dark:bg-gray-900">
                <code>{endpoint.requestExample}</code>
              </pre>
            </div>
          )}

          {/* Response Example */}
          {endpoint.responseExample && (
            <div>
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Response Example</h4>
              <pre className="overflow-x-auto rounded-lg bg-gray-50 p-4 text-sm dark:bg-gray-900">
                <code>{endpoint.responseExample}</code>
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  // Render a section based on its content
  const renderSection = (section: ApiReferenceSection) => {
    return (
      <div
        key={section.id}
        id={section.id}
        ref={(el) => {
          sectionRefs.current[section.id] = el;
        }}
        className="mb-12 scroll-mt-20"
      >
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{section.title}</h2>

        {section.content && (
          <div className="prose prose-gray mb-6 max-w-none dark:prose-invert">
            {formatContent(section.content)}
          </div>
        )}

        {/* Render endpoints if any */}
        {section.endpoints?.map((endpoint, index) => renderEndpoint(endpoint, index))}

        {/* Render code blocks if any */}
        {section.codeBlocks?.map((codeBlock, index) => (
          <CodeBlock
            key={`${section.id}-code-${index}`}
            title={codeBlock.title}
            languages={codeBlock.languages}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          {apiReference.title}
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-400 sm:text-lg">
          {apiReference.description}
        </p>
      </div>

      <div className="space-y-8">
        {apiReference.sections.map((section) => renderSection(section))}
      </div>
    </div>
  );
}
