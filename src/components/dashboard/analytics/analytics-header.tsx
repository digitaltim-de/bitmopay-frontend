"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AnalyticsHeaderProps {
  timeRange: string;
  setTimeRange: (value: string) => void;
  selectedCoin: string;
  setSelectedCoin: (value: string) => void;
  handleExportData: () => void;
}

export function AnalyticsHeader({
  timeRange,
  setTimeRange,
  selectedCoin,
  setSelectedCoin,
  handleExportData,
}: AnalyticsHeaderProps) {
  return (
    <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Insights and trends to help you understand your business performance
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row md:mt-0">
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Time Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7D">Last 7 Days</SelectItem>
            <SelectItem value="30D">Last 30 Days</SelectItem>
            <SelectItem value="90D">Last 90 Days</SelectItem>
            <SelectItem value="YTD">Year to Date</SelectItem>
            <SelectItem value="ALL">All Time</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedCoin} onValueChange={setSelectedCoin}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Coin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Coins</SelectItem>
            <SelectItem value="BTC">Bitcoin</SelectItem>
            <SelectItem value="ETH">Ethereum</SelectItem>
            <SelectItem value="USDT">USDT</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={handleExportData} variant="outline" className="flex items-center">
          <Download className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </div>
    </div>
  );
}
