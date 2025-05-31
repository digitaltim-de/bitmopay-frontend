"use client";

import { useState, useMemo } from "react";
import { getTrendStylesForDashboard } from "./dashboard-utils";
import { Users, TrendingUp, CreditCard } from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis, 
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip
} from "recharts";

// Sample data for demonstration
const demoData = [
  { name: "Jan", value: 400, transactions: 24, customers: 15, avgTransaction: 40 },
  { name: "Feb", value: 300, transactions: 13, customers: 20, avgTransaction: 35 },
  { name: "Mar", value: 200, transactions: 18, customers: 25, avgTransaction: 30 },
  { name: "Apr", value: 278, transactions: 39, customers: 30, avgTransaction: 28 },
  { name: "May", value: 189, transactions: 48, customers: 40, avgTransaction: 25 },
];

export function TrendColorExample() {
  const [selectedCoin] = useState("all");
  const averageTransactionTrend = -2.3; // Negative trend to show red styling
  
  // Pre-calculate trend values using useMemo for performance optimization
  const transactionTrendValues = useMemo(() => 
    getTrendStylesForDashboard(true, "colorTransactions"), []);
    
  const customerTrendValues = useMemo(() => 
    getTrendStylesForDashboard(true, "colorCustomers"), []);
    
  const avgTransactionTrendValues = useMemo(() => 
    getTrendStylesForDashboard(averageTransactionTrend > 0, "colorAvgTransaction"), 
    [averageTransactionTrend]);

  // Helper function to filter chart data (simplified for the example)
  const getFilteredChartData = (data) => {
    return selectedCoin === "all" ? data : data.filter(item => item.coin === selectedCoin);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 space-y-6">
      <h2 className="text-xl font-bold mb-4">Dashboard Cards with Trend-Based Colors</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Transaction Card - Positive Trend (Green) */}
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className={`mr-3 rounded-lg ${transactionTrendValues.iconBg} p-2`}>
                  <CreditCard className={`h-5 w-5 ${transactionTrendValues.iconText}`} />
                </div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Transactions
                </h3>
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
                data={getFilteredChartData(demoData)}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorTransactions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={transactionTrendValues.stopColor} stopOpacity={transactionTrendValues.stopOpacity} />
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
        
        {/* Customers Card - Positive Trend (Green) */}
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className={`mr-3 rounded-lg ${customerTrendValues.iconBg} p-2`}>
                  <Users className={`h-5 w-5 ${customerTrendValues.iconText}`} />
                </div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Customers
                </h3>
              </div>
              <div className="flex items-center">
                <span className={`mr-2 ${customerTrendValues.changeText}`}>+8.2%</span>
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">548</span>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">total</span>
            </div>
          </div>
          <div className="h-[60px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={getFilteredChartData(demoData)}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorCustomers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={customerTrendValues.stopColor} stopOpacity={customerTrendValues.stopOpacity} />
                    <stop offset="95%" stopColor={customerTrendValues.stopColor} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="customers"
                  stroke={customerTrendValues.strokeColor}
                  strokeWidth={2}
                  fillOpacity={1}
                  fill={customerTrendValues.fillGradient}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Avg Transaction Card - Negative Trend (Red) */}
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className={`mr-3 rounded-lg ${avgTransactionTrendValues.iconBg} p-2`}>
                  <TrendingUp className={`h-5 w-5 ${avgTransactionTrendValues.iconText}`} />
                </div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Avg. Transaction
                </h3>
              </div>
              <div className="flex items-center">
                <span className={`mr-2 ${avgTransactionTrendValues.changeText}`}>
                  {averageTransactionTrend > 0 ? "+" : ""}
                  {Math.abs(averageTransactionTrend)}%
                </span>
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">$112.43</span>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">per transaction</span>
            </div>
          </div>
          <div className="h-[60px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={getFilteredChartData(demoData)}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorAvgTransaction" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={avgTransactionTrendValues.stopColor} stopOpacity={avgTransactionTrendValues.stopOpacity} />
                    <stop offset="95%" stopColor={avgTransactionTrendValues.stopColor} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="avgTransaction"
                  stroke={avgTransactionTrendValues.strokeColor}
                  strokeWidth={2}
                  fillOpacity={1}
                  fill={avgTransactionTrendValues.fillGradient}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Main Chart - Full Width */}
      <div className="mt-6 h-80 rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-medium">Volume over Time</h3>
        <ResponsiveContainer width="100%" height="90%">
          <AreaChart
            data={getFilteredChartData(demoData)}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <RechartsTooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              fillOpacity={1}
              fill="url(#colorVolume)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
