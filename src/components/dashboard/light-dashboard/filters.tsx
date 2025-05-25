"use client";

import { ChevronDown, Calendar, Coins } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { Search } from "lucide-react";

interface DashboardFiltersProps {
  date?: Date;
  onDateChange: (date: Date | undefined) => void;
  activeTimeRange: string;
  onTimeRangeChange: (range: string) => void;
  selectedCoin: string;
  onCoinChange: (coin: string) => void;
  onSearch?: (query: string) => void;
}

export function DashboardFilters({
  date,
  onDateChange,
  activeTimeRange,
  onTimeRangeChange,
  selectedCoin,
  onCoinChange,
  onSearch,
}: DashboardFiltersProps) {
  const availableCoins = [
    { id: "all", name: "All Coins" },
    { id: "BTC", name: "Bitcoin" },
    { id: "ETH", name: "Ethereum" },
    { id: "USDT", name: "Tether" },
    { id: "SOL", name: "Solana" },
    { id: "USDC", name: "USD Coin" },
  ];

  return (
    <div
      className="mb-6 flex flex-wrap items-center justify-between rounded-xl border border-gray-100 bg-white p-4
        shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="mb-2 flex flex-wrap items-center gap-2 sm:mb-0">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="flex h-9 items-center border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600
                dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP", { locale: de }) : "Datum wählen"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 dark:border-gray-700 dark:bg-gray-800">
            <CalendarComponent mode="single" selected={date} onSelect={onDateChange} initialFocus />
          </PopoverContent>
        </Popover>

        <div className="flex overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
          <button
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
              activeTimeRange === "7d"
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            onClick={() => onTimeRangeChange("7d")}
          >
            7D
          </button>
          <button
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
              activeTimeRange === "30d"
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            onClick={() => onTimeRangeChange("30d")}
          >
            30D
          </button>
          <button
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
              activeTimeRange === "90d"
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            onClick={() => onTimeRangeChange("90d")}
          >
            90D
          </button>
          <button
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
              activeTimeRange === "ytd"
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            onClick={() => onTimeRangeChange("ytd")}
          >
            YTD
          </button>
          <button
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
              activeTimeRange === "all"
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            onClick={() => onTimeRangeChange("all")}
          >
            All time
          </button>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="flex h-9 items-center border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600
                dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <Coins className="mr-2 h-4 w-4" />
              {selectedCoin === "all" ? "All Coins" : selectedCoin}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-0 dark:border-gray-700 dark:bg-gray-800">
            <div className="p-2">
              <div className="space-y-1">
                {availableCoins.map((coin) => (
                  <button
                    key={coin.id}
                    onClick={() => onCoinChange(coin.id)}
                    className={`flex w-full items-center rounded-md px-2 py-1 text-left text-sm ${
                    selectedCoin === coin.id
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`}
                  >
                    {coin.name}
                  </button>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by TX ID or email..."
          className="w-full rounded-lg border border-gray-200 bg-gray-50 py-1.5 pl-10 pr-4 text-sm transition-all
            duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500
            dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:w-64"
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
    </div>
  );
}
