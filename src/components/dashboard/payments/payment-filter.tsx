"use client";

import { Search, X, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";

interface PaymentFilterProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  coinFilter: string;
  setCoinFilter: (value: string) => void;
  dateRange: {
    from: Date | undefined;
    to: Date | undefined;
  };
  isCalendarOpen: boolean;
  setIsCalendarOpen: (value: boolean) => void;
  handleDateRangeSelect: (range: any) => void;
  clearFilters: () => void;
}

export function PaymentFilter({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  coinFilter,
  setCoinFilter,
  dateRange,
  isCalendarOpen,
  setIsCalendarOpen,
  handleDateRangeSelect,
  clearFilters,
}: PaymentFilterProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search by email or transaction ID"
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="flex w-full items-center justify-between sm:w-auto"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {dateRange.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                  </>
                ) : (
                  format(dateRange.from, "LLL dd, y")
                )
              ) : (
                "Date Range"
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              initialFocus
              mode="range"
              defaultMonth={dateRange.from}
              selected={dateRange}
              onSelect={handleDateRangeSelect}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="success">Success</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>

        <Select value={coinFilter} onValueChange={setCoinFilter}>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Coin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Coins</SelectItem>
            <SelectItem value="BTC">Bitcoin</SelectItem>
            <SelectItem value="ETH">Ethereum</SelectItem>
            <SelectItem value="USDT">USDT</SelectItem>
          </SelectContent>
        </Select>

        {(searchQuery || statusFilter !== "all" || coinFilter !== "all" || dateRange.from) && (
          <Button variant="ghost" onClick={clearFilters} className="flex items-center">
            <X className="mr-2 h-4 w-4" />
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}
