"use client";

import { Section } from "@/components/shared/section";
import HeadTitle from "@/components/shared/head-title";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, FileDigit, Globe, Code } from "lucide-react";

interface TargetGroup {
  title: string;
  description: string;
  icon: string;
}

interface TargetGroupsProps {
  groups: TargetGroup[];
}

// Icon selection function
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "ShoppingBag":
      return <ShoppingBag className="h-6 w-6" />;
    case "FileDigit":
      return <FileDigit className="h-6 w-6" />;
    case "Globe":
      return <Globe className="h-6 w-6" />;
    case "Code":
      return <Code className="h-6 w-6" />;
    default:
      return null;
  }
};

export function TargetGroups({ groups }: TargetGroupsProps) {
  return (
    <Section className="bg-white dark:bg-gray-950">
      <HeadTitle
        title="Target Groups & Compatibility"
        subtitle="Bitmopay works seamlessly with various platforms and business models"
      />

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, index) => (
          <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400">
                {renderIcon(group.icon)}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{group.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{group.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}