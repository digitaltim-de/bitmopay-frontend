"use client";

import { ArrowDownRight, ArrowUpRight, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SummaryCardProps {
  title: string;
  value: string | number;
  changePercentage?: number;
  icon: LucideIcon;
  subtitle?: string;
}

export function SummaryCard({
  title,
  value,
  changePercentage,
  icon: Icon,
  subtitle,
}: SummaryCardProps) {
  const isPositive = changePercentage !== undefined ? changePercentage >= 0 : false;
  const bgColorClass = isPositive ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600";
  const textColorClass = isPositive ? "text-emerald-600" : "text-red-600";

  return (
    <Card className="border-0 shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">{value}</div>
            {changePercentage !== undefined ? (
              <div className={`mt-1 flex items-center text-xs ${textColorClass}`}>
                {isPositive ? (
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                ) : (
                  <ArrowDownRight className="mr-1 h-3 w-3" />
                )}
                {Math.abs(changePercentage)}% from previous period
              </div>
            ) : subtitle ? (
              <div className="mt-1 text-xs text-gray-500">{subtitle}</div>
            ) : null}
          </div>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              changePercentage !== undefined ? bgColorClass : "bg-blue-100 text-blue-600" }`}
          >
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
