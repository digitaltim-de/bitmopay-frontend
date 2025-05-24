"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubscriptionsHeaderProps {
  onExportCSV: () => void;
}

export function SubscriptionsHeader({ onExportCSV }: SubscriptionsHeaderProps) {
  return (
    <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Subscriptions</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your recurring subscribers and subscription plans
        </p>
      </div>
      <div className="mt-4 md:mt-0">
        <Button onClick={onExportCSV} variant="outline" className="flex items-center">
          <Download className="mr-2 h-4 w-4" />
          Export to CSV
        </Button>
      </div>
    </div>
  );
}
