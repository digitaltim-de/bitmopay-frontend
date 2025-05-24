"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CustomersHeaderProps {
  handleExportCSV: () => void;
}

export function CustomersHeader({ handleExportCSV }: CustomersHeaderProps) {
  return (
    <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Customers</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage and track all your customer relationships
        </p>
      </div>
      <div className="mt-4 md:mt-0">
        <Button onClick={handleExportCSV} variant="outline" className="flex items-center">
          <Download className="mr-2 h-4 w-4" />
          Export to CSV
        </Button>
      </div>
    </div>
  );
}
