"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

interface DashboardTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  children?: ReactNode;
}

export function DashboardTabs({ activeTab, onTabChange, children }: DashboardTabsProps) {
  return (
    <Tabs defaultValue={activeTab} className="mb-6" onValueChange={(value) => onTabChange(value)}>
      <TabsList className="grid w-full grid-cols-3 md:inline-flex md:w-auto">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="transactions">Transactions</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>

      {children}
    </Tabs>
  );
}

export function DashboardTabContent({ value, children }: { value: string; children: ReactNode }) {
  return (
    <TabsContent value={value} className="mt-4">
      {children}
    </TabsContent>
  );
}
