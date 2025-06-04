"use client";

import { useState, useEffect, useMemo } from "react";
import {
  BarChart,
  Bell,
  CreditCard,
  Download,
  FileText,
  Home,
  Menu,
  Settings,
  User,
  Wallet,
  X,
  Users,
  RefreshCw,
  ExternalLink,
  LinkIcon,
  Repeat,
  // Include all your other imports
} from "lucide-react";
import { getTrendStylesForDashboard } from "./dashboard-utils";

export function DashboardContent() {
  const [showNotification, setShowNotification] = useState(true);
  const [activeTimeRange, setActiveTimeRange] = useState("30d");
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [chartView, setChartView] = useState<"area" | "bar" | "line">("area");
  const [selectedCoin, setSelectedCoin] = useState<string>("all");
  // Add a mock negative trend for average transaction value
  const averageTransactionTrend = -2.3; // negative value to show red charts

  // Pre-calculate all trend values for dashboard cards
  const transactionTrendValues = useMemo(
    () => getTrendStylesForDashboard(true, "colorTransactions"),
    [],
  );

  const customerTrendValues = useMemo(() => getTrendStylesForDashboard(true, "colorCustomers"), []);

  const avgTransactionTrendValues = useMemo(
    () => getTrendStylesForDashboard(averageTransactionTrend > 0, "colorAvgTransaction"),
    [averageTransactionTrend],
  );

  const volumeTrendValues = useMemo(() => getTrendStylesForDashboard(true, "colorVol"), []);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Basic render structure with proper syntax
  if (isLoading) {
    return (
      <div className="flex flex-col space-y-4">
        <div className="h-8 w-64 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700"></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-24 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"
            ></div>
          ))}
        </div>
        <div className="mt-2 h-80 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
      </div>
    );
  }

  // Main dashboard content
  return (
    <>
      {/* Notification Banner */}
      {showNotification && (
        <div
          className="mb-6 overflow-hidden rounded-lg border border-emerald-200 bg-gradient-to-r from-emerald-50
            to-emerald-100 shadow-sm dark:border-emerald-800 dark:from-emerald-900/30 dark:to-emerald-800/30"
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 shadow-inner
                  dark:bg-emerald-800"
              >
                {/* Add your icon here, e.g., <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-300" /> */}
              </div>
              <div>
                <h3 className="font-medium text-emerald-800 dark:text-emerald-300">
                  New Feature Available
                </h3>
                <p className="text-sm text-emerald-700 dark:text-emerald-400">
                  You can now accept USDC payments with lower fees.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowNotification(false)}
                className="rounded-full p-1.5 text-emerald-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
        </div>
      )}

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {/* Transaction Card - using pre-calculated values */}
        <div
          className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-700
            dark:bg-gray-800"
        >
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
          {/* Add your area chart here if needed */}
        </div>

        {/* Customer Card */}
        <div
          className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-700
            dark:bg-gray-800"
        >
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className={`mr-3 rounded-lg ${customerTrendValues.iconBg} p-2`}>
                  <Users className={`h-5 w-5 ${customerTrendValues.iconText}`} />
                </div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Customers</h3>
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
          {/* Add your area chart here if needed */}
        </div>

        {/* Average Transaction Card - Negative trend (Red) */}
        <div
          className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-700
            dark:bg-gray-800"
        >
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
          {/* Add your area chart here if needed */}
        </div>
      </div>
    </>
  );
}
