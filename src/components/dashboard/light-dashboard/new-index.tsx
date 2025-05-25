"use client";

import { useState, useEffect } from "react";
import { MoreHorizontal, CircleDollarSign, Users, CreditCard, TrendingUp } from "lucide-react";
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
  PieChart,
  Pie,
  Cell,
  LineChart as RechartsLineChart,
  Line,
} from "recharts";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// Import the modular components we created
import { Sidebar } from "./sidebar";
import { DashboardHeader } from "./header";
import { MobileSearchBar } from "./header";
import { NotificationBanner } from "./notification-banner";
import { DashboardFilters } from "./filters";
import { DashboardTabs, DashboardTabContent } from "./tabs";
import { DashboardLoader } from "./loader";
import { DashboardStats } from "./stats-cards";
import { sidebarLinks } from "@/config/sidebar-links";

export function LightDashboard({ children }: { children?: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [activeTimeRange, setActiveTimeRange] = useState("30d");
  const [isLoading, setIsLoading] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [chartView, setChartView] = useState<"area" | "bar" | "line">("area");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<string>("all");

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real application, we would add the "dark" class to the HTML element
  };

  // Function to filter data based on selected coin
  const getFilteredData = (data: any[], coin: string) => {
    if (coin === "all") return data;
    return data.filter((item) => item.coin === coin);
  };

  // Function to filter chart data (simulated)
  const getFilteredChartData = (data: any[], coin: string) => {
    if (coin === "all") return data;

    // In a real application, we would filter actual data here
    // Here we simulate filtered data for different coins
    if (coin === "BTC") {
      return data.map((item) => ({
        ...item,
        volume: Math.round(item.volume * 0.6),
        transactions: Math.round(item.transactions * 0.5),
        customers: Math.round(item.customers * 0.4),
      }));
    } else if (coin === "ETH") {
      return data.map((item) => ({
        ...item,
        volume: Math.round(item.volume * 0.3),
        transactions: Math.round(item.transactions * 0.4),
        customers: Math.round(item.customers * 0.5),
      }));
    } else if (coin === "USDC") {
      return data.map((item) => ({
        ...item,
        volume: Math.round(item.volume * 0.1),
        transactions: Math.round(item.transactions * 0.2),
        customers: Math.round(item.customers * 0.3),
      }));
    } else if (coin === "SOL") {
      return data.map((item) => ({
        ...item,
        volume: Math.round(item.volume * 0.2),
        transactions: Math.round(item.transactions * 0.1),
        customers: Math.round(item.customers * 0.2),
      }));
    }

    return data;
  };

  // Sample data for the area chart
  const areaChartData = [
    { date: "Jan 1", volume: 4000, transactions: 24, customers: 15 },
    { date: "Jan 5", volume: 3000, transactions: 18, customers: 12 },
    { date: "Jan 10", volume: 5000, transactions: 32, customers: 22 },
    { date: "Jan 15", volume: 2780, transactions: 15, customers: 10 },
    { date: "Jan 20", volume: 1890, transactions: 12, customers: 8 },
    { date: "Jan 25", volume: 2390, transactions: 14, customers: 11 },
    { date: "Jan 30", volume: 3490, transactions: 22, customers: 16 },
    { date: "Feb 5", volume: 3200, transactions: 20, customers: 14 },
    { date: "Feb 10", volume: 2800, transactions: 18, customers: 13 },
    { date: "Feb 15", volume: 4100, transactions: 26, customers: 18 },
    { date: "Feb 20", volume: 4500, transactions: 28, customers: 20 },
    { date: "Feb 25", volume: 5200, transactions: 34, customers: 24 },
  ];

  // Sample data for the bar chart
  const barChartData = [
    { name: "BTC", value: 4200, change: 12.5 },
    { name: "ETH", value: 3800, change: 8.3 },
    { name: "USDT", value: 2500, change: -2.1 },
    { name: "SOL", value: 1800, change: 15.7 },
    { name: "USDC", value: 1200, change: 1.2 },
  ];

  // Sample data for the pie chart
  const pieChartData = [
    { name: "Success", value: 85 },
    { name: "Pending", value: 10 },
    { name: "Failed", value: 5 },
  ];

  const COLORS = ["#10b981", "#f59e0b", "#ef4444"];

  // Sample data for recent payments
  const recentPayments = [
    {
      id: "TX-123456",
      date: "2023-05-15 14:32",
      amount: "$245.50",
      coin: "BTC",
      status: "success",
      customer: "Alex Johnson",
      email: "alex@example.com",
      method: "Lightning Network",
    },
    {
      id: "TX-123457",
      date: "2023-05-14 09:15",
      amount: "$1,200.00",
      coin: "ETH",
      status: "success",
      customer: "Maria Garcia",
      email: "maria@example.com",
      method: "Metamask",
    },
    {
      id: "TX-123458",
      date: "2023-05-14 11:45",
      amount: "$78.25",
      coin: "USDC",
      status: "pending",
      customer: "John Smith",
      email: "john@example.com",
      method: "Credit Card",
    },
    {
      id: "TX-123459",
      date: "2023-05-13 16:20",
      amount: "$450.00",
      coin: "SOL",
      status: "success",
      customer: "Sarah Lee",
      email: "sarah@example.com",
      method: "Phantom Wallet",
    },
    {
      id: "TX-123460",
      date: "2023-05-12 08:05",
      amount: "$95.75",
      coin: "BTC",
      status: "failed",
      customer: "David Kim",
      email: "david@example.com",
      method: "On-chain",
    },
  ];
  // Sample data for growth metrics
  const growthMetrics = [
    {
      title: "Total Volume",
      value: "$428,560",
      change: { value: "+12.5%", trend: "up" as const },
      icon: <CircleDollarSign className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Transactions",
      value: "3,842",
      change: { value: "+8.3%", trend: "up" as const },
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
      icon: <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
    },
  ];

  // Sample data for upcoming payments
  const upcomingPayments = [
    {
      id: "SUB-123456",
      date: "2023-05-20",
      amount: "$49.99",
      coin: "USDC",
      customer: "Thomas Wilson",
      type: "Monthly Subscription",
    },
    {
      id: "SUB-123457",
      date: "2023-05-22",
      amount: "$199.00",
      coin: "ETH",
      customer: "Emma Brown",
      type: "Annual Plan",
    },
    {
      id: "SUB-123458",
      date: "2023-05-25",
      amount: "$29.99",
      coin: "BTC",
      customer: "Michael Davis",
      type: "Monthly Subscription",
    },
  ];

  return (
    <div className={`flex min-h-screen bg-gray-50 ${darkMode ? "dark bg-gray-900" : ""}`}>
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/50 lg:hidden" onClick={toggleSidebar}></div>
      )}{" "}
      {/* Sidebar Component */}
      <Sidebar
        sidebarLinks={sidebarLinks}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      {/* Main content */}
      <div className="flex-1">
        {/* Header Component */}
        <DashboardHeader
          toggleSidebar={toggleSidebar}
          toggleSearchBar={toggleSearchBar}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />{" "}
        {/* Mobile search bar Component */}
        {showSearchBar && (
          <MobileSearchBar show={showSearchBar} onSearch={(query) => console.log(query)} />
        )}
        {/* Dashboard content */}
        <main className="p-4 lg:p-6">
          {children ? (
            children
          ) : isLoading ? (
            <DashboardLoader />
          ) : (
            <>
              {/* Notification Banner Component */}
              {showNotification && (
                <NotificationBanner
                  title="New Chain Supported: USDC on Base"
                  description="You can now accept USDC payments on Base with lower fees and faster confirmations."
                  onDismiss={() => setShowNotification(false)}
                />
              )}

              {/* Dashboard Tabs Component */}
              <DashboardTabs activeTab={activeTab} onTabChange={(value) => setActiveTab(value)}>
                {/* Overview Tab Content */}
                <DashboardTabContent value="overview">
                  {/* Filters Component */}
                  <DashboardFilters
                    date={date}
                    onDateChange={setDate}
                    activeTimeRange={activeTimeRange}
                    onTimeRangeChange={setActiveTimeRange}
                    selectedCoin={selectedCoin}
                    onCoinChange={setSelectedCoin}
                  />

                  {/* Stats Cards Component */}
                  <DashboardStats metrics={growthMetrics} />

                  {/* Charts Section */}
                  <div className="mb-6 grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            Transaction Volume
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Last 30 days activity
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            className={`rounded-md p-1 transition-colors duration-200 ${
                              chartView === "area"
                                ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                                : "text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                              }`}
                            onClick={() => setChartView("area")}
                            aria-label="Area Chart"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-area-chart"
                            >
                              <path d="M3 3v18h18" />
                              <path d="M7 12a2 2 0 1 1 0 4 2 2 0 1 1 0-4Z" />
                              <path d="m21 12-4-4-4 4-3-3-3 4v5h14v-6Z" />
                            </svg>
                          </button>
                          <button
                            className={`rounded-md p-1 transition-colors duration-200 ${
                              chartView === "bar"
                                ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                                : "text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                              }`}
                            onClick={() => setChartView("bar")}
                            aria-label="Bar Chart"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-bar-chart-3"
                            >
                              <path d="M3 3v18h18" />
                              <path d="M9 9v8" />
                              <path d="M13 13v4" />
                              <path d="M18 6v11" />
                            </svg>
                          </button>
                          <button
                            className={`rounded-md p-1 transition-colors duration-200 ${
                              chartView === "line"
                                ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                                : "text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                              }`}
                            onClick={() => setChartView("line")}
                            aria-label="Line Chart"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-line-chart"
                            >
                              <path d="M3 3v18h18" />
                              <path d="m19 9-5 5-4-4-3 3" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="h-60">
                        <ResponsiveContainer width="100%" height="100%">
                          {chartView === "area" ? (
                            <AreaChart
                              data={getFilteredChartData(areaChartData, selectedCoin)}
                              margin={{ top: 5, right: 0, left: -20, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                              <XAxis
                                dataKey="date"
                                tick={{ fontSize: 12 }}
                                tickLine={false}
                                axisLine={{ stroke: "#eaeaea" }}
                              />
                              <YAxis
                                tick={{ fontSize: 12 }}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${value}`}
                              />
                              <RechartsTooltip
                                formatter={(value: number) => [`$${value}`, "Volume"]}
                                labelFormatter={(label) => `Date: ${label}`}
                                contentStyle={{
                                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                                  border: "none",
                                  borderRadius: "4px",
                                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                                }}
                              />
                              <Area
                                type="monotone"
                                dataKey="volume"
                                stroke="#10b981"
                                strokeWidth={2}
                                fill="url(#colorVolume)"
                                animationDuration={1000}
                              />
                              <defs>
                                <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                </linearGradient>
                              </defs>
                            </AreaChart>
                          ) : chartView === "bar" ? (
                            <RechartsBarChart
                              data={getFilteredChartData(areaChartData, selectedCoin)}
                              margin={{ top: 5, right: 0, left: -20, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                              <XAxis
                                dataKey="date"
                                tick={{ fontSize: 12 }}
                                tickLine={false}
                                axisLine={{ stroke: "#eaeaea" }}
                              />
                              <YAxis
                                tick={{ fontSize: 12 }}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${value}`}
                              />
                              <RechartsTooltip
                                formatter={(value: number) => [`$${value}`, "Volume"]}
                                labelFormatter={(label) => `Date: ${label}`}
                                contentStyle={{
                                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                                  border: "none",
                                  borderRadius: "4px",
                                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                                }}
                              />
                              <Bar
                                dataKey="volume"
                                fill="#10b981"
                                barSize={20}
                                radius={[4, 4, 0, 0]}
                                animationDuration={1000}
                              />
                            </RechartsBarChart>
                          ) : (
                            <RechartsLineChart
                              data={getFilteredChartData(areaChartData, selectedCoin)}
                              margin={{ top: 5, right: 0, left: -20, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                              <XAxis
                                dataKey="date"
                                tick={{ fontSize: 12 }}
                                tickLine={false}
                                axisLine={{ stroke: "#eaeaea" }}
                              />
                              <YAxis
                                tick={{ fontSize: 12 }}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${value}`}
                              />
                              <RechartsTooltip
                                formatter={(value: number) => [`$${value}`, "Volume"]}
                                labelFormatter={(label) => `Date: ${label}`}
                                contentStyle={{
                                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                                  border: "none",
                                  borderRadius: "4px",
                                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                                }}
                              />
                              <Line
                                type="monotone"
                                dataKey="volume"
                                stroke="#10b981"
                                strokeWidth={2}
                                dot={{ r: 3, fill: "#10b981", stroke: "#10b981", strokeWidth: 2 }}
                                activeDot={{
                                  r: 5,
                                  fill: "#10b981",
                                  stroke: "#fff",
                                  strokeWidth: 2,
                                }}
                                animationDuration={1000}
                              />
                            </RechartsLineChart>
                          )}
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            Payment Status
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Transaction success rate
                          </p>
                        </div>
                      </div>
                      <div className="flex h-60 items-center justify-center">
                        <ResponsiveContainer width="80%" height="100%">
                          <PieChart>
                            <Pie
                              data={pieChartData}
                              cx="50%"
                              cy="50%"
                              innerRadius={50}
                              outerRadius={80}
                              paddingAngle={2}
                              dataKey="value"
                              animationDuration={1000}
                              label={({
                                cx,
                                cy,
                                midAngle,
                                innerRadius,
                                outerRadius,
                                percent,
                                name,
                              }) => {
                                const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
                                const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                                const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                                return (
                                  <text
                                    x={x}
                                    y={y}
                                    fill={darkMode ? "#e5e7eb" : "#4b5563"}
                                    textAnchor={x > cx ? "start" : "end"}
                                    dominantBaseline="central"
                                    fontSize={12}
                                  >
                                    {`${name} ${(percent * 100).toFixed(0)}%`}
                                  </text>
                                );
                              }}
                            >
                              {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>

                  {/* Recent Payments Table */}
                  <div
                    className="mb-6 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-700
                      dark:bg-gray-800"
                  >
                    <div className="px-5 py-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          Recent Payments
                        </h3>
                        <a
                          href="#"
                          className="text-sm font-medium text-emerald-600 transition-colors duration-200 hover:text-emerald-700
                            dark:text-emerald-500 dark:hover:text-emerald-400"
                        >
                          View All
                        </a>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-full divide-y divide-gray-100 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700/50">
                          <tr>
                            <th
                              scope="col"
                              className="whitespace-nowrap px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500
                                dark:text-gray-400"
                            >
                              Transaction
                            </th>
                            <th
                              scope="col"
                              className="whitespace-nowrap px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500
                                dark:text-gray-400"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="whitespace-nowrap px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500
                                dark:text-gray-400"
                            >
                              Amount
                            </th>
                            <th
                              scope="col"
                              className="whitespace-nowrap px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500
                                dark:text-gray-400"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="whitespace-nowrap px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500
                                dark:text-gray-400"
                            >
                              Customer
                            </th>
                            <th
                              scope="col"
                              className="whitespace-nowrap px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500
                                dark:text-gray-400"
                            >
                              Method
                            </th>
                            <th scope="col" className="relative px-5 py-3">
                              <span className="sr-only">Actions</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white dark:divide-gray-700 dark:bg-gray-800">
                          {getFilteredData(recentPayments, selectedCoin).map((payment) => (
                            <tr
                              key={payment.id}
                              className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
                            >
                              <td className="whitespace-nowrap px-5 py-4">
                                <div className="flex items-center">
                                  <div
                                    className={`mr-3 flex h-8 w-8 items-center justify-center rounded-lg ${
                                      payment.coin === "BTC"
                                        ? "bg-amber-100 dark:bg-amber-900/50"
                                        : payment.coin === "ETH"
                                          ? "bg-blue-100 dark:bg-blue-900/50"
                                          : payment.coin === "USDC"
                                            ? "bg-emerald-100 dark:bg-emerald-900/50"
                                            : "bg-purple-100 dark:bg-purple-900/50"
                                      }`}
                                  >
                                    <span
                                      className={`text-xs font-bold ${
                                        payment.coin === "BTC"
                                          ? "text-amber-700 dark:text-amber-300"
                                          : payment.coin === "ETH"
                                            ? "text-blue-700 dark:text-blue-300"
                                            : payment.coin === "USDC"
                                              ? "text-emerald-700 dark:text-emerald-300"
                                              : "text-purple-700 dark:text-purple-300"
                                        }`}
                                    >
                                      {payment.coin.charAt(0)}
                                    </span>
                                  </div>
                                  <div>
                                    <div className="font-medium text-gray-900 dark:text-white">
                                      {payment.id}
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                      {payment.coin}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-700 dark:text-gray-300">
                                {payment.date}
                              </td>
                              <td className="whitespace-nowrap px-5 py-4">
                                <span className="font-medium text-gray-900 dark:text-white">
                                  {payment.amount}
                                </span>
                              </td>
                              <td className="whitespace-nowrap px-5 py-4">
                                <span
                                  className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                                    payment.status === "success"
                                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                      : payment.status === "pending"
                                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                                        : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                    }`}
                                >
                                  {payment.status === "success" && "Completed"}
                                  {payment.status === "pending" && "Processing"}
                                  {payment.status === "failed" && "Failed"}
                                </span>
                              </td>
                              <td className="whitespace-nowrap px-5 py-4">
                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                  {payment.customer}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  {payment.email}
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-700 dark:text-gray-300">
                                {payment.method}
                              </td>
                              <td className="relative whitespace-nowrap px-5 py-4 text-right text-sm font-medium">
                                <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                                  <MoreHorizontal className="h-5 w-5" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </DashboardTabContent>

                {/* Transactions Tab Content */}
                <DashboardTabContent value="transactions">
                  <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      Transactions
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Detailed transaction history and analytics coming soon.
                    </p>
                  </div>
                </DashboardTabContent>

                {/* Analytics Tab Content */}
                <DashboardTabContent value="analytics">
                  <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      Advanced Analytics
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We&apos;re working on a comprehensive analytics dashboard to help you track
                      your payment performance.
                    </p>
                  </div>
                </DashboardTabContent>
              </DashboardTabs>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
