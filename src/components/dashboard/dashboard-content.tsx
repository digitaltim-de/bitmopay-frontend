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
  ShieldCheck,
  TrendingUp,
  Zap,
  BarChart3,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getTrendStylesForDashboard } from "./dashboard-utils";
import { Badge } from "@/components/ui/badge";

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

  // Sample data for charts
  const areaChartData = [
    { date: "Jan", value: 400, transactions: 24, customers: 15, avgTransaction: 40, volume: 2400 },
    { date: "Feb", value: 300, transactions: 13, customers: 20, avgTransaction: 35, volume: 1300 },
    { date: "Mar", value: 200, transactions: 18, customers: 25, avgTransaction: 30, volume: 2000 },
    { date: "Apr", value: 278, transactions: 39, customers: 30, avgTransaction: 28, volume: 2780 },
    { date: "May", value: 189, transactions: 48, customers: 40, avgTransaction: 25, volume: 1890 },
  ];

  // Helper function to filter chart data
  const getFilteredChartData = (data: any[], coin: string) => {
    return coin === "all" ? data : data.filter((item) => item.coin === coin);
  };

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
                <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />
              </div>
              <div>
                <h3 className="font-medium text-emerald-800 dark:text-emerald-300">
                  New Chain Supported: USDC on Base
                </h3>
                <p className="text-sm text-emerald-700 dark:text-emerald-400">
                  You can now accept USDC payments on Base with lower fees and faster confirmations.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="hidden text-sm font-medium text-emerald-700 transition-colors duration-200 hover:text-emerald-800
                  dark:text-emerald-400 dark:hover:text-emerald-300 sm:inline-block"
              >
                Learn more
              </a>
              <button
                onClick={() => setShowNotification(false)}
                className="rounded-full p-1.5 text-emerald-600 transition-colors duration-200 hover:bg-emerald-200
                  hover:text-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-800 dark:hover:text-emerald-300"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
        </div>
      )}

      {/* Dashboard Tabs */}
      <Tabs
        defaultValue="overview"
        className="mb-6"
        onValueChange={(value) => setActiveTab(value as string)}
      >
        <TabsList className="grid w-full grid-cols-3 md:inline-flex md:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4">
          {/* Dashboard Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Transactions - Positive trend (green) */}
            <div
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-700
                dark:bg-gray-800"
            >
              <div className="p-6">
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
                        <stop
                          offset="95%"
                          stopColor={transactionTrendValues.stopColor}
                          stopOpacity={0}
                        />
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

            {/* Card 2: Customers - Positive trend (green) */}
            <div
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-700
                dark:bg-gray-800"
            >
              <div className="p-6">
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
                    data={getFilteredChartData(areaChartData, selectedCoin)}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorCustomers" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor={customerTrendValues.stopColor}
                          stopOpacity={customerTrendValues.stopOpacity}
                        />
                        <stop
                          offset="95%"
                          stopColor={customerTrendValues.stopColor}
                          stopOpacity={0}
                        />
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

            {/* Card 3: Average Transaction - Negative trend (red) */}
            <div
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-700
                dark:bg-gray-800"
            >
              <div className="p-6">
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
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    per transaction
                  </span>
                </div>
              </div>
              <div className="h-[60px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={getFilteredChartData(areaChartData, selectedCoin)}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorAvgTransaction" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor={avgTransactionTrendValues.stopColor}
                          stopOpacity={avgTransactionTrendValues.stopOpacity}
                        />
                        <stop
                          offset="95%"
                          stopColor={avgTransactionTrendValues.stopColor}
                          stopOpacity={0}
                        />
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

            {/* Card 4: API Health */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3 rounded-lg bg-green-100 p-2 dark:bg-green-900/50">
                    <ShieldCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    API Health
                  </h3>
                </div>
                <Badge
                  className="bg-green-500 text-white hover:bg-green-600 dark:bg-green-700 dark:text-green-100
                    dark:hover:bg-green-600"
                >
                  Operational
                </Badge>
              </div>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</span>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">uptime</span>
              </div>
            </div>
          </div>

          {/* Main Chart */}
          <div
            className="mb-6 mt-6 rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700
              dark:bg-gray-800"
          >
            <div className="mb-6 flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Payment Volume</h2>
              <div className="flex space-x-2">
                <Button
                  variant={chartView === "area" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setChartView("area")}
                  className="text-xs"
                >
                  Area
                </Button>
                <Button
                  variant={chartView === "bar" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setChartView("bar")}
                  className="text-xs"
                >
                  Bar
                </Button>
                <Button
                  variant={chartView === "line" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setChartView("line")}
                  className="text-xs"
                >
                  Line
                </Button>
              </div>
            </div>

            <div className="h-80">
              {/* Area Chart */}
              {chartView === "area" && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={getFilteredChartData(areaChartData, selectedCoin)}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorVol" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor={volumeTrendValues.stopColor}
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor={volumeTrendValues.stopColor}
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area
                      type="monotone"
                      dataKey="volume"
                      stroke={volumeTrendValues.strokeColor}
                      strokeWidth={2}
                      fillOpacity={1}
                      fill={volumeTrendValues.fillGradient}
                    />
                    <RechartsTooltip />
                  </AreaChart>
                </ResponsiveContainer>
              )}

              {/* Bar Chart */}
              {chartView === "bar" && (
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart
                    data={getFilteredChartData(areaChartData, selectedCoin)}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <RechartsTooltip />
                    <Bar dataKey="volume" fill="#10b981" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              )}

              {/* Line Chart */}
              {chartView === "line" && (
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart
                    data={getFilteredChartData(areaChartData, selectedCoin)}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <RechartsTooltip />
                    <Line
                      type="monotone"
                      dataKey="volume"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#10b981", stroke: "#10b981", strokeWidth: 2 }}
                      activeDot={{ r: 6, fill: "#10b981", stroke: "#fff", strokeWidth: 2 }}
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="mt-4">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Recent Transactions
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              This tab will display a list of your recent transactions with filtering options.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="mt-4">
          <div className="p-12 text-center text-gray-500 dark:text-gray-400">
            <BarChart3 className="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-500" />
            <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Analytics Dashboard Coming Soon
            </h3>
            <p>
              We're working on a comprehensive analytics dashboard to help you track your payment
              performance.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
