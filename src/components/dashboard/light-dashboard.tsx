"use client";

import { useState, useEffect } from "react";
import { 
  BarChart, 
  Bell, 
  CreditCard, 
  DollarSign, 
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
  Link as LinkIcon,
  Repeat,
  ShieldCheck,
  CheckCircle2,
  Clock,
  XCircle,
  ChevronDown,
  Activity,
  ArrowRight,
  ArrowUpRight,
  MoreHorizontal,
  Search,
  HelpCircle,
  Sparkles,
  Zap,
  CircleDollarSign,
  TrendingUp,
  Layers,
  Shield,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

export function LightDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [activeTimeRange, setActiveTimeRange] = useState("30d");
  const [isLoading, setIsLoading] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);

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

  // Sample data for the area chart
  const areaChartData = [
    { date: "Jan 1", volume: 4000, transactions: 24 },
    { date: "Jan 5", volume: 3000, transactions: 18 },
    { date: "Jan 10", volume: 5000, transactions: 32 },
    { date: "Jan 15", volume: 2780, transactions: 15 },
    { date: "Jan 20", volume: 1890, transactions: 12 },
    { date: "Jan 25", volume: 2390, transactions: 14 },
    { date: "Jan 30", volume: 3490, transactions: 22 },
    { date: "Feb 5", volume: 3200, transactions: 20 },
    { date: "Feb 10", volume: 2800, transactions: 18 },
    { date: "Feb 15", volume: 4100, transactions: 26 },
    { date: "Feb 20", volume: 4500, transactions: 28 },
    { date: "Feb 25", volume: 5200, transactions: 34 },
  ];

  // Sample data for the bar chart
  const barChartData = [
    { name: "BTC", value: 4200 },
    { name: "ETH", value: 3800 },
    { name: "USDT", value: 2500 },
    { name: "SOL", value: 1800 },
    { name: "USDC", value: 1200 },
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
      email: "alex@example.com"
    },
    { 
      id: "TX-123457", 
      date: "2023-05-14 09:15", 
      amount: "$1,200.00", 
      coin: "ETH", 
      status: "success",
      customer: "Maria Garcia",
      email: "maria@example.com"
    },
    { 
      id: "TX-123458", 
      date: "2023-05-14 11:45", 
      amount: "$78.25", 
      coin: "USDC", 
      status: "pending",
      customer: "John Smith",
      email: "john@example.com"
    },
    { 
      id: "TX-123459", 
      date: "2023-05-13 16:20", 
      amount: "$450.00", 
      coin: "SOL", 
      status: "success",
      customer: "Sarah Lee",
      email: "sarah@example.com"
    },
    { 
      id: "TX-123460", 
      date: "2023-05-12 08:05", 
      amount: "$95.75", 
      coin: "BTC", 
      status: "failed",
      customer: "David Kim",
      email: "david@example.com"
    },
  ];

  // Sample data for growth metrics
  const growthMetrics = [
    { label: "Volume Growth", value: "+12.5%", trend: "up" },
    { label: "New Customers", value: "+8.3%", trend: "up" },
    { label: "Avg. Transaction", value: "$245", trend: "up" },
    { label: "Conversion Rate", value: "3.2%", trend: "down" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-50 h-full w-72 transform bg-white shadow-xl transition-all duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-100 px-6">
          <div className="flex items-center">
            <div className="mr-3 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 p-1.5 shadow-md">
              <Wallet className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Bitmopay</span>
          </div>
          <button 
            className="rounded-full p-1.5 text-gray-500 hover:bg-gray-100 transition-colors duration-200 lg:hidden"
            onClick={toggleSidebar}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {/* User profile section */}
          <div className="mb-6 flex items-center">
            <div className="relative mr-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-medium shadow-md">
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-white"></div>
            </div>
            <div>
              <div className="font-medium text-gray-900">John Doe</div>
              <div className="text-xs text-gray-500">Premium Account</div>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full py-2 pl-10 pr-4 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Main</div>
          <nav className="mb-6">
            <ul className="space-y-1">
              <li>
                <a 
                  href="#" 
                  className="flex items-center rounded-lg bg-gradient-to-r from-emerald-50 to-emerald-100 px-4 py-2.5 text-emerald-700 font-medium transition-all duration-200 group"
                >
                  <div className="mr-3 rounded-md bg-emerald-200/60 p-1.5 group-hover:bg-emerald-200 transition-colors duration-200">
                    <Home className="h-4 w-4" />
                  </div>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center rounded-lg px-4 py-2.5 text-gray-700 hover:bg-gray-50 font-medium transition-all duration-200 group"
                >
                  <div className="mr-3 rounded-md bg-gray-100 p-1.5 group-hover:bg-gray-200 transition-colors duration-200">
                    <CreditCard className="h-4 w-4" />
                  </div>
                  <span>Payments</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center rounded-lg px-4 py-2.5 text-gray-700 hover:bg-gray-50 font-medium transition-all duration-200 group"
                >
                  <div className="mr-3 rounded-md bg-gray-100 p-1.5 group-hover:bg-gray-200 transition-colors duration-200">
                    <Repeat className="h-4 w-4" />
                  </div>
                  <span>Subscriptions</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center rounded-lg px-4 py-2.5 text-gray-700 hover:bg-gray-50 font-medium transition-all duration-200 group"
                >
                  <div className="mr-3 rounded-md bg-gray-100 p-1.5 group-hover:bg-gray-200 transition-colors duration-200">
                    <Users className="h-4 w-4" />
                  </div>
                  <span>Customers</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Resources</div>
          <nav>
            <ul className="space-y-1">
              <li>
                <a 
                  href="#" 
                  className="flex items-center rounded-lg px-4 py-2.5 text-gray-700 hover:bg-gray-50 font-medium transition-all duration-200 group"
                >
                  <div className="mr-3 rounded-md bg-gray-100 p-1.5 group-hover:bg-gray-200 transition-colors duration-200">
                    <FileText className="h-4 w-4" />
                  </div>
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center rounded-lg px-4 py-2.5 text-gray-700 hover:bg-gray-50 font-medium transition-all duration-200 group"
                >
                  <div className="mr-3 rounded-md bg-gray-100 p-1.5 group-hover:bg-gray-200 transition-colors duration-200">
                    <Settings className="h-4 w-4" />
                  </div>
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center rounded-lg px-4 py-2.5 text-gray-700 hover:bg-gray-50 font-medium transition-all duration-200 group"
                >
                  <div className="mr-3 rounded-md bg-gray-100 p-1.5 group-hover:bg-gray-200 transition-colors duration-200">
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <span>Help & Support</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Pro upgrade card */}
          <div className="mt-8 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 p-4 text-white shadow-lg">
            <div className="mb-2 flex items-center">
              <Sparkles className="mr-2 h-5 w-5 text-emerald-300" />
              <h3 className="font-semibold">Upgrade to Pro</h3>
            </div>
            <p className="mb-3 text-xs text-emerald-100">Get advanced features, lower fees, and priority support.</p>
            <button className="w-full rounded-lg bg-white py-1.5 text-sm font-medium text-emerald-700 hover:bg-emerald-50 transition-colors duration-200">
              Upgrade Now
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-gray-100 bg-white/80 backdrop-blur-sm px-6 shadow-sm">
          <div className="flex items-center">
            <button 
              className="mr-4 rounded-full p-2 text-gray-500 hover:bg-gray-100 transition-colors duration-200 lg:hidden"
              onClick={toggleSidebar}
            >
              <Menu className="h-5 w-5" />
            </button>

            <div className="hidden md:flex items-center space-x-1">
              <button 
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeTimeRange === "7d" 
                    ? "bg-emerald-100 text-emerald-700" 
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTimeRange("7d")}
              >
                7D
              </button>
              <button 
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeTimeRange === "30d" 
                    ? "bg-emerald-100 text-emerald-700" 
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTimeRange("30d")}
              >
                30D
              </button>
              <button 
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeTimeRange === "90d" 
                    ? "bg-emerald-100 text-emerald-700" 
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTimeRange("90d")}
              >
                90D
              </button>
              <button 
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeTimeRange === "ytd" 
                    ? "bg-emerald-100 text-emerald-700" 
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTimeRange("ytd")}
              >
                YTD
              </button>
              <button 
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeTimeRange === "all" 
                    ? "bg-emerald-100 text-emerald-700" 
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTimeRange("all")}
              >
                All time
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Search toggle for mobile */}
            <button 
              className="md:hidden rounded-full p-2 text-gray-500 hover:bg-gray-100 transition-colors duration-200"
              onClick={toggleSearchBar}
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Search bar for desktop */}
            <div className="relative hidden md:block mr-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search transactions..." 
                className="py-1.5 pl-10 pr-4 w-64 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Notification bell with indicator */}
            <div className="relative">
              <button className="relative rounded-full p-2 text-gray-600 hover:bg-gray-100 transition-colors duration-200">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>
            </div>

            {/* Help button */}
            <button className="hidden md:flex rounded-full p-2 text-gray-600 hover:bg-gray-100 transition-colors duration-200">
              <HelpCircle className="h-5 w-5" />
            </button>

            {/* User dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-2 cursor-pointer rounded-full hover:bg-gray-50 py-1 px-2 transition-colors duration-200">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-medium shadow-sm">
                  JD
                </div>
                <span className="text-sm font-medium text-gray-700 hidden md:inline-block">John Doe</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100 hidden group-hover:block transition-all duration-200 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <div className="font-medium text-gray-900">John Doe</div>
                  <div className="text-xs text-gray-500">john@example.com</div>
                </div>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-3 text-gray-500" />
                    Profile
                  </div>
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center">
                    <Settings className="h-4 w-4 mr-3 text-gray-500" />
                    Settings
                  </div>
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-3 text-gray-500" />
                    API Keys
                  </div>
                </a>
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center">
                      <X className="h-4 w-4 mr-3" />
                      Logout
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile search bar */}
        {showSearchBar && (
          <div className="p-4 bg-white border-b border-gray-100 md:hidden">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search transactions..." 
                className="w-full py-2 pl-10 pr-4 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Dashboard content */}
        <main className="p-4 lg:p-6">
          {/* Loading state */}
          {isLoading ? (
            <div className="flex flex-col space-y-4">
              <div className="h-8 w-64 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-24 bg-gray-200 rounded-lg animate-pulse"></div>
                ))}
              </div>
              <div className="h-80 bg-gray-200 rounded-lg animate-pulse mt-2"></div>
            </div>
          ) : (
            <>
              {/* Notification Banner */}
              {showNotification && (
                <div className="mb-6 overflow-hidden rounded-lg border border-emerald-200 bg-gradient-to-r from-emerald-50 to-emerald-100 shadow-sm">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 shadow-inner">
                        <Zap className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-emerald-800">New Chain Supported: USDC on Base</h3>
                        <p className="text-sm text-emerald-700">
                          You can now accept USDC payments on Base with lower fees and faster confirmations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <a 
                        href="#" 
                        className="hidden text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors duration-200 sm:inline-block"
                      >
                        Learn more
                      </a>
                      <button 
                        onClick={() => setShowNotification(false)}
                        className="rounded-full p-1.5 text-emerald-600 hover:bg-emerald-200 hover:text-emerald-800 transition-colors duration-200"
                        aria-label="Dismiss"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                </div>
              )}</>
          )}

          {/* Stats cards */}
          <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="mr-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <CircleDollarSign className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex items-center text-xs font-medium text-emerald-600">
                    <span className="mr-1">+12.5%</span>
                    <TrendingUp className="h-3 w-3" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">Total Volume</p>
                  <div className="mt-1 flex items-end">
                    <p className="text-2xl font-bold text-gray-900">$12,470.02</p>
                    <p className="ml-2 text-xs text-gray-500">USD</p>
                  </div>
                </div>
                <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="mr-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <CreditCard className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex items-center text-xs font-medium text-emerald-600">
                    <span className="mr-1">+8.3%</span>
                    <TrendingUp className="h-3 w-3" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">New Payments Today</p>
                  <div className="mt-1 flex items-end">
                    <p className="text-2xl font-bold text-gray-900">23</p>
                    <p className="ml-2 text-xs text-gray-500">transactions</p>
                  </div>
                </div>
                <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="mr-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex items-center text-xs font-medium text-emerald-600">
                    <span className="mr-1">+5.2%</span>
                    <TrendingUp className="h-3 w-3" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">Active Customers</p>
                  <div className="mt-1 flex items-end">
                    <p className="text-2xl font-bold text-gray-900">148</p>
                    <p className="ml-2 text-xs text-gray-500">users</p>
                  </div>
                </div>
                <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="mr-4 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <RefreshCw className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="flex items-center text-xs font-medium text-emerald-600">
                    <span className="mr-1">+15.8%</span>
                    <TrendingUp className="h-3 w-3" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">Active Subscriptions</p>
                  <div className="mt-1 flex items-end">
                    <p className="text-2xl font-bold text-gray-900">72</p>
                    <p className="ml-2 text-xs text-gray-500">recurring</p>
                  </div>
                </div>
                <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="mb-8 grid gap-6 lg:grid-cols-3">
            {/* Main Chart */}
            <div className="rounded-xl bg-white p-6 shadow-md border border-gray-100 lg:col-span-2">
              <div className="mb-6 flex flex-wrap items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Payment Volume</h3>
                  <div className="mt-1 flex items-center">
                    <p className="text-sm text-gray-500">
                      {activeTimeRange === "7d" ? "Last 7 days" : 
                       activeTimeRange === "30d" ? "Last 30 days" : 
                       activeTimeRange === "90d" ? "Last 90 days" : 
                       activeTimeRange === "ytd" ? "Year to date" : "All time"}
                    </p>
                    <div className="ml-4 flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      12.5% from previous period
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors duration-200">
                    Export
                  </button>
                  <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors duration-200">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={areaChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="date" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#9CA3AF' }}
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#9CA3AF' }}
                      tickFormatter={(value) => `$${value}`}
                      dx={-10}
                    />
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#E5E7EB" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        borderRadius: '0.5rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        border: '1px solid #E5E7EB',
                        padding: '0.5rem'
                      }}
                      formatter={(value) => [`$${value}`, 'Volume']}
                      labelFormatter={(label) => `Date: ${label}`}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="volume" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorVolume)" 
                      activeDot={{ r: 6, strokeWidth: 0, fill: '#059669' }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Side Charts */}
            <div className="space-y-6">
              {/* Payment Methods Chart */}
              <div className="rounded-xl bg-white p-6 shadow-md border border-gray-100">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900">Payment Methods</h3>
                  <button className="rounded-lg p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-500 transition-colors duration-200">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>

                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                      data={barChartData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                      barSize={24}
                      barGap={8}
                    >
                      <XAxis 
                        dataKey="name" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#9CA3AF' }}
                        dy={10}
                      />
                      <YAxis 
                        hide={true}
                      />
                      <Tooltip
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          borderRadius: '0.5rem',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                          border: '1px solid #E5E7EB',
                          padding: '0.5rem'
                        }}
                        formatter={(value) => [`$${value}`, 'Volume']}
                      />
                      <Bar 
                        dataKey="value" 
                        radius={[4, 4, 4, 4]}
                      >
                        {barChartData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={index % 5 === 0 ? '#10b981' : 
                                 index % 5 === 1 ? '#3b82f6' : 
                                 index % 5 === 2 ? '#8b5cf6' : 
                                 index % 5 === 3 ? '#f59e0b' : 
                                 '#ef4444'} 
                          />
                        ))}
                      </Bar>
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Transaction Status Chart */}
              <div className="rounded-xl bg-white p-6 shadow-md border border-gray-100">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900">Transaction Status</h3>
                  <button className="rounded-lg p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-500 transition-colors duration-200">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex h-48 items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={60}
                        paddingAngle={2}
                        dataKey="value"
                        stroke="none"
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          borderRadius: '0.5rem',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                          border: '1px solid #E5E7EB',
                          padding: '0.5rem'
                        }}
                        formatter={(value) => [`${value}%`, 'Percentage']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-2 grid grid-cols-3 gap-2">
                  {pieChartData.map((entry, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="mr-2 h-3 w-3 rounded-full" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <span className="text-xs text-gray-600">{entry.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent payments */}
          <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-md border border-gray-100">
            <div className="p-6">
              <div className="mb-6 flex flex-wrap items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Recent Payments</h3>
                  <p className="mt-1 text-sm text-gray-500">Your latest transactions</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Search payments..." 
                      className="py-1.5 pl-10 pr-4 w-48 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors duration-200">
                    Filter
                  </button>
                  <button className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 hover:bg-emerald-100 transition-colors duration-200">
                    <Download className="mr-1.5 inline-block h-3.5 w-3.5" />
                    Export
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto -mx-6">
                <table className="w-full min-w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Transaction ID
                      </th>
                      <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Customer
                      </th>
                      <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Date
                      </th>
                      <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Amount
                      </th>
                      <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Coin
                      </th>
                      <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Status
                      </th>
                      <th className="whitespace-nowrap px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recentPayments.map((payment) => (
                      <tr 
                        key={payment.id} 
                        className="group hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          {payment.id}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-medium text-xs mr-3">
                              {payment.customer.split(' ').map(name => name[0]).join('')}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{payment.customer}</div>
                              <div className="text-xs text-gray-500">{payment.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          {payment.date}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          {payment.amount}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex items-center">
                            <div className={`mr-2 h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold
                              ${payment.coin === 'BTC' ? 'bg-amber-100 text-amber-700' : 
                                payment.coin === 'ETH' ? 'bg-blue-100 text-blue-700' : 
                                payment.coin === 'USDC' ? 'bg-emerald-100 text-emerald-700' : 
                                payment.coin === 'SOL' ? 'bg-purple-100 text-purple-700' : 
                                'bg-gray-100 text-gray-700'}`}
                            >
                              {payment.coin.substring(0, 1)}
                            </div>
                            <span className="text-sm text-gray-700">{payment.coin}</span>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm">
                          {payment.status === "success" && (
                            <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-200">
                              <CheckCircle2 className="mr-1 h-3 w-3" />
                              Success
                            </span>
                          )}
                          {payment.status === "pending" && (
                            <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 border border-amber-200">
                              <Clock className="mr-1 h-3 w-3" />
                              Pending
                            </span>
                          )}
                          {payment.status === "failed" && (
                            <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700 border border-red-200">
                              <XCircle className="mr-1 h-3 w-3" />
                              Failed
                            </span>
                          )}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                          <div className="invisible group-hover:visible flex items-center justify-end space-x-2">
                            <button className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors duration-200">
                              <ExternalLink className="h-4 w-4" />
                            </button>
                            <button className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors duration-200">
                              <MoreHorizontal className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Showing <span className="font-medium">5</span> of <span className="font-medium">42</span> payments
                </div>
                <div className="flex items-center space-x-2">
                  <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors duration-200">
                    Previous
                  </button>
                  <button className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 hover:bg-emerald-100 transition-colors duration-200">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick actions and System Health */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Quick Actions Panel */}
            <div className="rounded-xl bg-white p-6 shadow-md border border-gray-100">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                <div className="rounded-full bg-emerald-50 p-1.5">
                  <Zap className="h-4 w-4 text-emerald-600" />
                </div>
              </div>

              <div className="space-y-3">
                <button className="group w-full rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-3 text-white shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center">
                    <div className="mr-3 rounded-lg bg-white/20 p-2">
                      <LinkIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium">Create Payment Link</div>
                      <div className="text-xs text-white/80">Generate shareable payment URLs</div>
                    </div>
                    <ArrowRight className="h-4 w-4 opacity-70 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </button>

                <button className="group w-full rounded-xl bg-white px-4 py-3 text-gray-700 shadow-sm hover:shadow-md border border-gray-200 hover:border-gray-300 transition-all duration-200">
                  <div className="flex items-center">
                    <div className="mr-3 rounded-lg bg-blue-50 p-2">
                      <RefreshCw className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium">Generate Subscription</div>
                      <div className="text-xs text-gray-500">Create recurring payment plans</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-700" />
                  </div>
                </button>

                <button className="group w-full rounded-xl bg-white px-4 py-3 text-gray-700 shadow-sm hover:shadow-md border border-gray-200 hover:border-gray-300 transition-all duration-200">
                  <div className="flex items-center">
                    <div className="mr-3 rounded-lg bg-purple-50 p-2">
                      <FileText className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium">View API Docs</div>
                      <div className="text-xs text-gray-500">Explore integration options</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-700" />
                  </div>
                </button>

                <button className="group w-full rounded-xl bg-white px-4 py-3 text-gray-700 shadow-sm hover:shadow-md border border-gray-200 hover:border-gray-300 transition-all duration-200">
                  <div className="flex items-center">
                    <div className="mr-3 rounded-lg bg-amber-50 p-2">
                      <ShieldCheck className="h-5 w-5 text-amber-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium">Test in Sandbox</div>
                      <div className="text-xs text-gray-500">Try features in test environment</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-700" />
                  </div>
                </button>
              </div>
            </div>

            {/* System Health Widget */}
            <div className="rounded-xl bg-white p-6 shadow-md border border-gray-100">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">System Health</h3>
                <div className="rounded-full bg-green-50 p-1.5">
                  <Activity className="h-4 w-4 text-green-600" />
                </div>
              </div>

              <div className="mb-6 space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 border border-gray-100">
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">API Webhook Status</div>
                      <div className="text-xs text-gray-500">All systems operational</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">Online</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div className="flex items-center">
                      <div className="mr-3 rounded-md bg-emerald-100 p-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">Last Transaction</span>
                    </div>
                    <span className="text-sm text-gray-500">3 min ago</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div className="flex items-center">
                      <div className="mr-3 rounded-md bg-emerald-100 p-1.5">
                        <RefreshCw className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">Last API Usage</span>
                    </div>
                    <span className="text-sm text-gray-500">2h ago</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-3 rounded-md bg-emerald-100 p-1.5">
                        <Shield className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">Security Status</span>
                    </div>
                    <span className="text-sm text-gray-500">Protected</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-gray-50 p-3 border border-gray-100">
                <div className="flex items-center">
                  <div className="mr-3 rounded-md bg-blue-100 p-1.5">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">System Uptime</div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-gray-200">
                      <div className="h-1.5 w-[99.8%] rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">99.8% uptime in the last 30 days</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Help & Support Card */}
            <div className="rounded-xl bg-white p-6 shadow-md border border-gray-100 sm:col-span-2 lg:col-span-1">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Help & Support</h3>
                <div className="rounded-full bg-blue-50 p-1.5">
                  <HelpCircle className="h-4 w-4 text-blue-600" />
                </div>
              </div>

              <div className="mb-5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-white p-2 shadow-sm">
                    <Sparkles className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">24/7 Support Available</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Our support team is available around the clock to help you with any questions or issues.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="group flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-left hover:border-gray-300 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center">
                    <div className="mr-3 rounded-md bg-gray-100 p-1.5">
                      <FileText className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Documentation</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-gray-700 transition-colors duration-200" />
                </button>

                <button className="group flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-left hover:border-gray-300 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center">
                    <div className="mr-3 rounded-md bg-gray-100 p-1.5">
                      <MessageSquare className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Contact Support</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-gray-700 transition-colors duration-200" />
                </button>

                <button className="group flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-left hover:border-gray-300 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center">
                    <div className="mr-3 rounded-md bg-gray-100 p-1.5">
                      <Layers className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Knowledge Base</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-gray-700 transition-colors duration-200" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
