"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Video,
  Code,
  FileQuestion,
  PieChart,
  Newspaper,
  GraduationCap,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSubtleAnimation } from "@/hooks/use-subtle-animation";
import { resourceCategories } from "@/config/resource-categories";

export function ResourceLibrary() {
  // Get icon component based on icon name
  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, LucideIcon> = {
      BookOpen,
      FileText,
      Video,
      Code,
      FileQuestion,
      PieChart,
      Newspaper,
      GraduationCap,
    };

    return iconMap[iconName as keyof typeof iconMap] || FileText;
  };
  useSubtleAnimation({
    fadeInElements: ".resource-card",
    fadeInDistance: 15,
    fadeInDuration: 0.4,
    fadeInStagger: 0.05,
    fadeInTrigger: ".resource-grid",
    fadeInStart: "top bottom-=50px",
  });

  return (
    <div className="bg-white py-24 dark:bg-gray-900" id="resource-library">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Resource Library
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-500 dark:text-gray-400">
            Everything you need to successfully implement and optimize Bitmopay for your business
          </p>
        </div>
        <div className="resource-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {resourceCategories.map((resource, index) => (
            <div
              key={index}
              className="resource-card group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all
                duration-200 hover:border-emerald-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800
                dark:hover:border-emerald-800"
            >
              <div className="flex h-full flex-col">
                {" "}
                <div className="flex items-center justify-between">
                  <div className={cn("rounded-lg p-3", resource.color)}>
                    {(() => {
                      const IconComponent = getIconComponent(resource.iconName);
                      return <IconComponent className="h-6 w-6" />;
                    })()}
                  </div>
                  {resource.badge && (
                    <Badge
                      variant="secondary"
                      className={cn(
                        "bg-gradient-to-r",
                        resource.badge === "New"
                          ? "from-blue-500 to-violet-500 text-white"
                          : "from-amber-500 to-orange-500 text-white",
                      )}
                    >
                      {resource.badge}
                    </Badge>
                  )}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {resource.title}
                </h3>
                <p className="mt-2 flex-grow text-gray-500 dark:text-gray-400">
                  {resource.description}
                </p>
                <Link
                  href={resource.href}
                  className="mt-5 inline-flex items-center font-medium text-emerald-600 hover:text-emerald-800
                    dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  View resources
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
