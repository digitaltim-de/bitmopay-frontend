"use client"

import { useState, useEffect } from "react"
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
  MessageSquare,
  Filter,
  ChevronRight,
  ChevronLeft,
  BarChart3,
  LineChart,
  ArrowUp,
  ArrowDown,
  Info,
  Calendar,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
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
} from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { de } from "date-fns/locale"

export function DashboardContent() {
  const [showNotification, setShowNotification] = useState(true)
  const [activeTimeRange, setActiveTimeRange] = useState("30d")
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [chartView, setChartView] = useState<"area" | "bar" | "line">("area")
  const [selectedCoin, setSelectedCoin] = useState<string>("all")

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Funktion zum Filtern der Daten basierend auf dem ausgewählten Coin
  const getFilteredData = (data: any[], coin: string) => {
    if (coin === "all") return data
    return data.filter((item) => item.coin === coin)
  }

  // Funktion zum Filtern der Chart-Daten (simuliert)
  const getFilteredChartData = (data: any[], coin: string) => {
    if (coin === "all") return data

    // In einer echten Anwendung würden hier die tatsächlichen Daten gefiltert
    // Hier simulieren wir gefilterte Daten für verschiedene Coins
    if (coin === "BTC") {
      return data.map((item) => ({
        ...item,
        volume: Math.round(item.volume * 0.6),
        transactions: Math.round(item.transactions * 0.5),
        customers: Math.round(item.customers * 0.4),
      }))
    } else if (coin === "ETH") {
      return data.map((item) => ({
        ...item,
        volume: Math.round(item.volume * 0.3),
        transactions: Math.round(item.transactions * 0.4),
        customers: Math.round(item.customers * 0.5),
      }))
    } else if (coin === "USDC") {
      return data.map((item) => ({
        ...item,
        volume: Math.round(item.volume * 0.1),
        transactions: Math.round(item.transactions * 0.2),
        customers: Math.round(item.customers * 0.3),
      }))
    } else if (coin === "SOL") {
      return data.map((item) => ({
        ...item,
        volume: Math.round(item.volume * 0.2),
        transactions: Math.round(item.transactions * 0.1),
        customers: Math.round(item.customers * 0.2),
      }))
    }

    return data
  }

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
  ]

  // Sample data for the bar chart
  const barChartData = [
    { name: "BTC", value: 4200, change: 12.5 },
    { name: "ETH", value: 3800, change: 8.3 },
    { name: "USDT", value: 2500, change: -2.1 },
    { name: "SOL", value: 1800, change: 15.7 },
    { name: "USDC", value: 1200, change: 1.2 },
  ]

  // Sample data for the pie chart
  const pieChartData = [
    { name: "Success", value: 85 },
    { name: "Pending", value: 10 },
    { name: "Failed", value: 5 },
  ]

  const COLORS = ["#10b981", "#f59e0b", "#ef4444"]

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
  ]

  // Sample data for growth metrics
  const growthMetrics = [
    { label: "Volume Growth", value: "+12.5%", trend: "up", previousValue: "+8.2%" },
    { label: "New Customers", value: "+8.3%", trend: "up", previousValue: "+5.7%" },
    { label: "Avg. Transaction", value: "$245", trend: "up", previousValue: "$210" },
    { label: "Conversion Rate", value: "3.2%", trend: "down", previousValue: "3.8%" },
  ]

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
  ]

  return isLoading ? (
    <div className="flex flex-col space-y-4">
      <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        ))}
      </div>
      <div className="h-80 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mt-2"></div>
    </div>
  ) : (
    <>
      {/* Notification Banner */}
      {showNotification && (
        <div className="mb-6 overflow-hidden rounded-lg border border-emerald-200 dark:border-emerald-800 bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-800 shadow-inner">
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
                className="hidden text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors duration-200 sm:inline-block"
              >
                Learn more
              </a>
              <button
                onClick={() => setShowNotification(false)}
                className="rounded-full p-1.5 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-800 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors duration-200"
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
      <Tabs defaultValue="overview" className="mb-6" onValueChange={(value) => setActiveTab(value as string)}>
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4">
          {/* Filter und Suchbereich */}
          <div className="mb-6 flex flex-wrap items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-0">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP", { locale: de }) : "Datum wählen"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 dark:bg-gray-800 dark:border-gray-700">
                  <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>

              <div className="flex rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                    activeTimeRange === "7d"
                      ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveTimeRange("7d")}
                >
                  7D
                </button>
                <button
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                    activeTimeRange === "30d"
                      ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveTimeRange("30d")}
                >
                  30D
                </button>
                <button
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                    activeTimeRange === "90d"
                      ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveTimeRange("90d")}
                >
                  90D
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="w-full py-2 pl-10 pr-4 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 dark:text-white dark:placeholder-gray-400"
                />
              </div>

              <Select value={selectedCoin} onValueChange={setSelectedCoin}>
                <SelectTrigger className="w-[130px] border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <SelectValue placeholder="All Coins" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Coins</SelectItem>
                  <SelectItem value="BTC">Bitcoin</SelectItem>
                  <SelectItem value="ETH">Ethereum</SelectItem>
                  <SelectItem value="USDC">USDC</SelectItem>
                  <SelectItem value="SOL">Solana</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-9 w-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                        onClick={() => setChartView("area")}
                      >
                        <BarChart className={`h-4 w-4 ${chartView === "area" ? "text-emerald-600 dark:text-emerald-400" : ""}`} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Area Chart</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-9 w-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                        onClick={() => setChartView("bar")}
                      >
                        <BarChart3 className={`h-4 w-4 ${chartView === "bar" ? "text-emerald-600 dark:text-emerald-400" : ""}`} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Bar Chart</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-9 w-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                        onClick={() => setChartView("line")}
                      >
                        <LineChart className={`h-4 w-4 ${chartView === "line" ? "text-emerald-600 dark:text-emerald-400" : ""}`} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Line Chart</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>

          {/* KPI Karten */}
          <div className="grid gap-6 mb-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Karte 1: Zahlungsvolumen */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="mr-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 p-2">
                      <CreditCard className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Payment Volume</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      12.5%
                    </span>
                  </div>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">$12,426</span>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">this month</span>
                </div>
              </div>
              <div className="h-[60px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={getFilteredChartData(areaChartData, selectedCoin)}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="volume"
                      stroke="#10b981"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorVolume)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Karte 2: Abonnements */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="mr-3 rounded-lg bg-blue-100 dark:bg-blue-900/50 p-2">
                      <Repeat className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Subscriptions</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 flex items-center">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      8.3%
                    </span>
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
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="transactions"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorTransactions)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Karte 3: Kunden */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="mr-3 rounded-lg bg-purple-100 dark:bg-purple-900/50 p-2">
                      <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Customers</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs font-medium text-purple-600 dark:text-purple-400 flex items-center">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      5.2%
                    </span>
                  </div>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">2,845</span>
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
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="customers"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorCustomers)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Karte 4: API-Gesundheit */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="mr-3 rounded-lg bg-green-100 dark:bg-green-900/50 p-2">
                    <Activity className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">API Health</h3>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Uptime</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">99.98%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "99.98%" }}></div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Response Time</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">124ms</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Error Rate</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">0.02%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "0.5%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Hauptdiagramm */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Payment Volume</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Overview of your payment volume over time
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-2">
                <Badge variant="outline" className="text-xs font-normal">
                  <ArrowUp className="h-3 w-3 mr-1 text-emerald-500" />
                  12.5% from last period
                </Badge>
                <Button variant="outline" size="sm" className="h-8 px-2 text-xs">
                  <Download className="h-3 w-3 mr-1" />
                  Export
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
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={{ stroke: "#e5e7eb" }}
                    />
                    <YAxis
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={{ stroke: "#e5e7eb" }}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <RechartsTooltip
                      formatter={(value: number) => [`$${value}`, "Volume"]}
                      labelFormatter={(label) => `Date: ${label}`}
                    />
                    <Area
                      type="monotone"
                      dataKey="volume"
                      stroke="#10b981"
                      fillOpacity={1}
                      fill="url(#colorVol)"
                    />
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
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={{ stroke: "#e5e7eb" }}
                    />
                    <YAxis
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={{ stroke: "#e5e7eb" }}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <RechartsTooltip
                      formatter={(value: number) => [`$${value}`, "Volume"]}
                      labelFormatter={(label) => `Date: ${label}`}
                    />
                    <Bar dataKey="volume" fill="#10b981" radius={[4, 4, 0, 0]} />
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
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={{ stroke: "#e5e7eb" }}
                    />
                    <YAxis
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={{ stroke: "#e5e7eb" }}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <RechartsTooltip
                      formatter={(value: number) => [`$${value}`, "Volume"]}
                      labelFormatter={(label) => `Date: ${label}`}
                    />
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

          {/* Unterer Bereich: Letzte Zahlungen und Wachstumsmetriken */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Letzte Zahlungen */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recent Payments</h2>
                  <Button variant="ghost" size="sm" className="text-xs h-8 px-2 text-gray-600 dark:text-gray-400">
                    View All
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Transaction
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Method
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {recentPayments.map((payment) => (
                      <tr key={payment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
                              {payment.coin === "BTC" && <div className="text-amber-500 text-xs font-bold">₿</div>}
                              {payment.coin === "ETH" && <div className="text-blue-500 text-xs font-bold">Ξ</div>}
                              {payment.coin === "USDC" && <div className="text-blue-500 text-xs font-bold">$</div>}
                              {payment.coin === "SOL" && <div className="text-purple-500 text-xs font-bold">◎</div>}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{payment.id}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{payment.date}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">{payment.customer}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{payment.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{payment.amount}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{payment.coin}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {payment.status === "success" && (
                            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Success
                            </Badge>
                          )}
                          {payment.status === "pending" && (
                            <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                              <Clock className="h-3 w-3 mr-1" />
                              Pending
                            </Badge>
                          )}
                          {payment.status === "failed" && (
                            <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                              <XCircle className="h-3 w-3 mr-1" />
                              Failed
                            </Badge>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {payment.method}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Rechte Spalte: Wachstumsmetriken und Schnellaktionen */}
            <div className="space-y-6">
              {/* Wachstumsmetriken */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Growth Metrics</h2>
                <div className="space-y-4">
                  {growthMetrics.map((metric) => (
                    <div key={metric.label} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                            metric.trend === "up"
                              ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400"
                              : "bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400"
                          }`}
                        >
                          {metric.trend === "up" ? (
                            <ArrowUp className="h-4 w-4" />
                          ) : (
                            <ArrowDown className="h-4 w-4" />
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{metric.label}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">vs. {metric.previousValue} last period</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schnellaktionen */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-auto py-3 px-4 justify-start text-left">
                    <div className="flex flex-col items-start">
                      <div className="flex items-center mb-1">
                        <Plus className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                        <span className="font-medium">New Invoice</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Create a new invoice</span>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto py-3 px-4 justify-start text-left">
                    <div className="flex flex-col items-start">
                      <div className="flex items-center mb-1">
                        <Wallet className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                        <span className="font-medium">Add Wallet</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Connect a new wallet</span>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto py-3 px-4 justify-start text-left">
                    <div className="flex flex-col items-start">
                      <div className="flex items-center mb-1">
                        <Users className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                        <span className="font-medium">Customers</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">View all customers</span>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto py-3 px-4 justify-start text-left">
                    <div className="flex flex-col items-start">
                      <div className="flex items-center mb-1">
                        <BarChart className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                        <span className="font-medium">Analytics</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">View detailed reports</span>
                    </div>
                  </Button>
                </div>
              </div>

              {/* Bevorstehende Zahlungen */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Upcoming Payments</h2>
                <div className="space-y-4">
                  {upcomingPayments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
                          {payment.coin === "BTC" && <div className="text-amber-500 text-xs font-bold">₿</div>}
                          {payment.coin === "ETH" && <div className="text-blue-500 text-xs font-bold">Ξ</div>}
                          {payment.coin === "USDC" && <div className="text-blue-500 text-xs font-bold">$</div>}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{payment.customer}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{payment.type}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{payment.amount}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{payment.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="mt-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Transaction History</h2>
              <Button variant="outline" size="sm" className="text-xs h-8 px-2">
                <Filter className="mr-1 h-3 w-3" />
                Filter
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Transaction ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Method
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {recentPayments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{payment.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 dark:text-gray-400">{payment.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">{payment.customer}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{payment.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{payment.amount}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{payment.coin}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {payment.status === "success" && (
                          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Success
                          </Badge>
                        )}
                        {payment.status === "pending" && (
                          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                            <Clock className="h-3 w-3 mr-1" />
                            Pending
                          </Badge>
                        )}
                        {payment.status === "failed" && (
                          <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                            <XCircle className="h-3 w-3 mr-1" />
                            Failed
                          </Badge>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {payment.method}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{" "}
                <span className="font-medium">42</span> results
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="mt-4">
          <div className="text-center p-12 text-gray-500 dark:text-gray-400">
            <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gray-400 dark:text-gray-500" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Analytics Dashboard Coming Soon
            </h3>
            <p>
              We're working on a comprehensive analytics dashboard to help you track your payment performance.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
