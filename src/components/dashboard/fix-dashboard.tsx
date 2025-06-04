"use client";

import { useEffect, useState } from "react";
import { getTrendStylesForDashboard } from "./dashboard-utils";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

// This file demonstrates the proper way to handle the IIFE patterns in the dashboard

export function FixedDashboardExample() {
  const [selectedCoin, setSelectedCoin] = useState("all");
  const averageTransactionTrend = -2.3; // negative trend

  // Sample data for the chart
  const areaChartData = [
    { name: "Jan", value: 400, transactions: 24, customers: 15, avgTransaction: 40 },
    { name: "Feb", value: 300, transactions: 13, customers: 20, avgTransaction: 35 },
    { name: "Mar", value: 200, transactions: 18, customers: 25, avgTransaction: 30 },
    { name: "Apr", value: 278, transactions: 39, customers: 30, avgTransaction: 28 },
    { name: "May", value: 189, transactions: 48, customers: 40, avgTransaction: 25 },
  ];

  // Helper function to filter chart data by coin
  const getFilteredChartData = (data, coin) => {
    return coin === "all" ? data : data.filter((item) => item.coin === coin);
  };

  // Example 1: Prepare the trend values outside of JSX
  const transactionTrendValues = getTrendStylesForDashboard(true, "colorTransactions");
  const customerTrendValues = getTrendStylesForDashboard(true, "colorCustomers");
  const avgTransactionTrendValues = getTrendStylesForDashboard(
    averageTransactionTrend > 0,
    "colorAvgTransaction",
  );

  return (
    <div>
      <h2>Transaction Chart - Fixed Example</h2>

      {/* Example of correct card with pre-calculated trend values */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className={`mr-3 rounded-lg ${transactionTrendValues.iconBg} p-2`}>
                <span className={`h-5 w-5 ${transactionTrendValues.iconText}`}>Icon</span>
              </div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Transactions</h3>
            </div>
            <div className="flex items-center">
              <span className={`mr-2 ${transactionTrendValues.changeText}`}>+12.5%</span>
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">156</span>
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">active</span>
          </div>
        </div>
        <div className="h-[60px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={getFilteredChartData(areaChartData, selectedCoin)}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorTransactions" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={transactionTrendValues.stopColor}
                    stopOpacity={transactionTrendValues.stopOpacity}
                  />
                  <stop offset="95%" stopColor={transactionTrendValues.stopColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="transactions"
                stroke={transactionTrendValues.strokeColor}
                strokeWidth={2}
                fillOpacity={1}
                fill={transactionTrendValues.fillGradient}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
