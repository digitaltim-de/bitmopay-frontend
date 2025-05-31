"use client";

import { CircleDollarSign, Users, CreditCard, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  change?: {
    value: string;
    trend: "up" | "down" | "neutral";
  };
  icon: ReactNode;
}

export function StatCard({ title, value, change, icon }: StatCardProps) {
  return (
    <div
      className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all
        duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="p-6">
        <div className="flex items-center justify-between">          <div
            className={`mr-4 rounded-xl p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md
              ${change?.trend === "down" 
                ? "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30" 
                : "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30"}`}
          >
            {icon}
          </div>
          {change && (
            <div
              className={`flex items-center text-xs font-medium ${
              change.trend === "up"
                  ? "text-emerald-600 dark:text-emerald-400"
                  : change.trend === "down"
                    ? "text-red-600 dark:text-red-400"
                    : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {change.value}
              {change.trend === "up" ? (
                <TrendingUp className="ml-1 h-3 w-3" />
              ) : change.trend === "down" ? (
                <ArrowDown className="ml-1 h-3 w-3" />
              ) : null}
            </div>
          )}
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
        </div>
        {change && (
          <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
            <div
              className={`h-full ${
              change.trend === "up"
                  ? "bg-emerald-500 dark:bg-emerald-600"
                  : change.trend === "down"
                    ? "bg-red-500 dark:bg-red-600"
                    : "bg-gray-500 dark:bg-gray-600"
              }`}
              style={{ width: "70%" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

interface DashboardStatsProps {
  metrics?: {
    title: string;
    value: string;
    change: {
      value: string;
      trend: "up" | "down" | "neutral";
    };
    icon: ReactNode;
  }[];
}

export function DashboardStats({ metrics }: DashboardStatsProps) {  const defaultMetrics = [
    {
      title: "Total Volume",
      value: "$428,560",
      change: { value: "+12.5%", trend: "up" as const },
      icon: <CircleDollarSign className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Transactions",
      value: "3,842",
      change: { value: "+8.2%", trend: "up" as const },
      icon: <CreditCard className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Total Customers",
      value: "1,389",
      change: { value: "+5.1%", trend: "up" as const },
      icon: <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Avg. Transaction",
      value: "$112.43",
      change: { value: "-2.3%", trend: "down" as const },
      icon: <TrendingUp className="h-6 w-6 text-red-600 dark:text-red-400" />,
    },
  ];

  const statsToRender = metrics || defaultMetrics;

  return (
    <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {statsToRender.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}
