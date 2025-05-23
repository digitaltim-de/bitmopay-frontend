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
import { usePathname } from "next/navigation"
import Link from "next/link"
import { sidebarLinks } from "@/config/sidebar-links"
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
import { format } from "date-fns"
import { de } from "date-fns/locale"

export function LightDashboard({ children }: { children?: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(true)
  const [activeTimeRange, setActiveTimeRange] = useState("30d")
  const [isLoading, setIsLoading] = useState(true)
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [chartView, setChartView] = useState<"area" | "bar" | "line">("area")
  const [darkMode, setDarkMode] = useState(false)
  const [selectedCoin, setSelectedCoin] = useState<string>("all")

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    // In einer echten Anwendung würde hier die Klasse "dark" zum HTML-Element hinzugefügt werden
  }

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

  return (
      <div className={`flex min-h-screen bg-gray-50 ${darkMode ? "dark bg-gray-900" : ""}`}>
        {/* Mobile sidebar backdrop */}
        {isSidebarOpen && <div className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden" onClick={toggleSidebar}></div>}

        {/* Sidebar */}
        <aside
            className={`fixed top-0 left-0 z-50 h-full w-72 transform bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 ease-in-out lg:relative lg:translate-x-0 ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-gray-100 dark:border-gray-700 px-6">
            <div className="flex items-center">
              <div className="mr-3 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 p-1.5 shadow-md">
                <Wallet className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Bitmopay</span>
            </div>
            <button
                className="rounded-full p-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 lg:hidden"
                onClick={toggleSidebar}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6">
            {/* User profile section */}
            <div className="mb-6 flex items-center">
              <div className="relative mr-3">
                <Avatar className="h-10 w-10 border-2 border-white dark:border-gray-800">
                  <AvatarImage src="/abstract-profile-avatar.png" alt="JD" />
                  <AvatarFallback className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-white dark:border-gray-800"></div>
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">John Doe</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Premium Account</div>
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
                  className="w-full py-2 pl-10 pr-4 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 dark:text-white dark:placeholder-gray-400"
              />
            </div>

            {sidebarLinks.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {section.title}
                </div>
                <nav className={sectionIndex === 0 ? "mb-6" : ""}>
                  <ul className="space-y-1">
                    {section.links.map((link, linkIndex) => {
                      const pathname = usePathname();
                      const isActive = pathname === link.href || (link.href !== "/dashboard" && pathname?.startsWith(link.href));

                      return (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className={`flex items-center rounded-lg ${
                              isActive
                                ? "bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 text-emerald-700 dark:text-emerald-300"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                            } px-4 py-2.5 font-medium transition-all duration-200 group`}
                          >
                            <div className={`mr-3 rounded-md ${
                              isActive
                                ? "bg-emerald-200/60 dark:bg-emerald-800/60 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800"
                                : "bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600"
                            } p-1.5 transition-colors duration-200`}>
                              {link.icon && <link.icon className="h-4 w-4" />}
                            </div>
                            <span>{link.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            ))}

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
          <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-gray-100 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 shadow-sm">
            <div className="flex items-center">
              <button
                  className="mr-4 rounded-full p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 lg:hidden"
                  onClick={toggleSidebar}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center space-x-3">
              {/* Search toggle for mobile */}
              <button
                  className="md:hidden rounded-full p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  onClick={toggleSearchBar}
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Dark mode toggle */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-9 w-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                        onClick={toggleDarkMode}
                    >
                      {darkMode ? (
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-sun"
                          >
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2" />
                            <path d="M12 20v2" />
                            <path d="m4.93 4.93 1.41 1.41" />
                            <path d="m17.66 17.66 1.41 1.41" />
                            <path d="M2 12h2" />
                            <path d="M20 12h2" />
                            <path d="m6.34 17.66-1.41 1.41" />
                            <path d="m19.07 4.93-1.41 1.41" />
                          </svg>
                      ) : (
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-moon"
                          >
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                          </svg>
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Notification bell with indicator */}
              <div className="relative">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="relative rounded-full p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>3 unread notifications</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              {/* Help button */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="hidden md:flex rounded-full p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                      <HelpCircle className="h-5 w-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Help & Support</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* User dropdown */}
              <div className="relative group">
                <div className="flex items-center space-x-2 cursor-pointer rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 py-1 px-2 transition-colors duration-200">
                  <Avatar className="h-8 w-8 border-2 border-white dark:border-gray-800">
                    <AvatarImage src="/abstract-profile-avatar.png" alt="JD" />
                    <AvatarFallback className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden md:inline-block">
                  John Doe
                </span>
                  <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </div>
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 border border-gray-100 dark:border-gray-700 hidden group-hover:block transition-all duration-200 z-50">
                  <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                    <div className="font-medium text-gray-900 dark:text-white">John Doe</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">john@example.com</div>
                  </div>
                  <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-3 text-gray-500 dark:text-gray-400" />
                      Profile
                    </div>
                  </a>
                  <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <Settings className="h-4 w-4 mr-3 text-gray-500 dark:text-gray-400" />
                      Settings
                    </div>
                  </a>
                  <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 mr-3 text-gray-500 dark:text-gray-400" />
                      API Keys
                    </div>
                  </a>
                  <div className="border-t border-gray-100 dark:border-gray-700 mt-1 pt-1">
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
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
              <div className="p-4 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 md:hidden">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                      type="text"
                      placeholder="Search transactions..."
                      className="w-full py-2 pl-10 pr-4 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:text-white dark:placeholder-gray-400"
                      autoFocus
                  />
                </div>
              </div>
          )}

          {/* Dashboard content */}
          <main className="p-4 lg:p-6">
            {children ? (
              children
            ) : isLoading ? (
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
                            <button
                                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                                    activeTimeRange === "ytd"
                                        ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
                                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                                }`}
                                onClick={() => setActiveTimeRange("ytd")}
                            >
                              YTD
                            </button>
                            <button
                                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                                    activeTimeRange === "all"
                                        ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
                                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                                }`}
                                onClick={() => setActiveTimeRange("all")}
                            >
                              All time
                            </button>
                          </div>

                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                  variant="outline"
                                  className="h-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center"
                              >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-coins mr-2"
                                >
                                  <circle cx="8" cy="8" r="6" />
                                  <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
                                  <path d="M7 6h1v4" />
                                  <path d="m16.71 13.88.7.71-2.82 2.82" />
                                </svg>
                                {selectedCoin === "all" ? "All Coins" : selectedCoin}
                                <ChevronDown className="ml-2 h-4 w-4" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-48 p-0 dark:bg-gray-800 dark:border-gray-700">
                              <div className="p-2">
                                <div className="space-y-1">
                                  <button
                                      className={`w-full flex items-center px-2 py-1.5 text-sm rounded-md transition-colors duration-200 ${
                                          selectedCoin === "all"
                                              ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
                                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                      }`}
                                      onClick={() => setSelectedCoin("all")}
                                  >
                                    All Coins
                                  </button>
                                  <button
                                      className={`w-full flex items-center px-2 py-1.5 text-sm rounded-md transition-colors duration-200 ${
                                          selectedCoin === "BTC"
                                              ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
                                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                      }`}
                                      onClick={() => setSelectedCoin("BTC")}
                                  >
                                    <div className="mr-2 h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-bold">
                                      B
                                    </div>
                                    Bitcoin (BTC)
                                  </button>
                                  <button
                                      className={`w-full flex items-center px-2 py-1.5 text-sm rounded-md transition-colors duration-200 ${
                                          selectedCoin === "ETH"
                                              ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
                                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                      }`}
                                      onClick={() => setSelectedCoin("ETH")}
                                  >
                                    <div className="mr-2 h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xs font-bold">
                                      E
                                    </div>
                                    Ethereum (ETH)
                                  </button>
                                  <button
                                      className={`w-full flex items-center px-2 py-1.5 text-sm rounded-md transition-colors duration-200 ${
                                          selectedCoin === "USDC"
                                              ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
                                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                      }`}
                                      onClick={() => setSelectedCoin("USDC")}
                                  >
                                    <div className="mr-2 h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-xs font-bold">
                                      U
                                    </div>
                                    USD Coin (USDC)
                                  </button>
                                  <button
                                      className={`w-full flex items-center px-2 py-1.5 text-sm rounded-md transition-colors duration-200 ${
                                          selectedCoin === "SOL"
                                              ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
                                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                      }`}
                                      onClick={() => setSelectedCoin("SOL")}
                                  >
                                    <div className="mr-2 h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 flex items-center justify-center text-xs font-bold">
                                      S
                                    </div>
                                    Solana (SOL)
                                  </button>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400" />
                          </div>
                          <input
                              type="text"
                              placeholder="Search by TX ID or email..."
                              className="py-1.5 pl-10 pr-4 w-full sm:w-64 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 dark:text-white dark:placeholder-gray-400"
                          />
                        </div>
                      </div>

                      {/* Stats cards */}
                      <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="group overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700">
                          <div className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="mr-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                                <CircleDollarSign className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                              </div>
                              <div className="flex items-center text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                <span className="mr-1">+12.5%</span>
                                <TrendingUp className="h-3 w-3" />
                              </div>
                            </div>
                            <div className="mt-4">
                              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Volume</p>
                              <div className="mt-1 flex items-end">
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">$12,470.02</p>
                                <p className="ml-2 text-xs text-gray-500 dark:text-gray-400">USD</p>
                              </div>
                            </div>
                            <div className="mt-4 h-1 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                            </div>
                          </div>
                        </div>

                        <div className="group overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700">
                          <div className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="mr-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                                <CreditCard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div className="flex items-center text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                <span className="mr-1">+8.3%</span>
                                <TrendingUp className="h-3 w-3" />
                              </div>
                            </div>
                            <div className="mt-4">
                              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">New Payments Today</p>
                              <div className="mt-1 flex items-end">
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">23</p>
                                <p className="ml-2 text-xs text-gray-500 dark:text-gray-400">transactions</p>
                              </div>
                            </div>
                            <div className="mt-4 h-1 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full w-1/2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                            </div>
                          </div>
                        </div>

                        <div className="group overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700">
                          <div className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="mr-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                              </div>
                              <div className="flex items-center text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                <span className="mr-1">+5.2%</span>
                                <TrendingUp className="h-3 w-3" />
                              </div>
                            </div>
                            <div className="mt-4">
                              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Customers</p>
                              <div className="mt-1 flex items-end">
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">148</p>
                                <p className="ml-2 text-xs text-gray-500 dark:text-gray-400">users</p>
                              </div>
                            </div>
                            <div className="mt-4 h-1 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full w-2/3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
                            </div>
                          </div>
                        </div>

                        <div className="group overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700">
                          <div className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="mr-4 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                                <RefreshCw className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                              </div>
                              <div className="flex items-center text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                <span className="mr-1">+15.8%</span>
                                <TrendingUp className="h-3 w-3" />
                              </div>
                            </div>
                            <div className="mt-4">
                              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Subscriptions</p>
                              <div className="mt-1 flex items-end">
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">72</p>
                                <p className="ml-2 text-xs text-gray-500 dark:text-gray-400">recurring</p>
                              </div>
                            </div>
                            <div className="mt-4 h-1 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full w-4/5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Chart Section */}
                      <div className="mb-8 grid gap-6 lg:grid-cols-3">
                        {/* Main Chart */}
                        <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700 lg:col-span-2">
                          <div className="mb-6 flex flex-wrap items-center justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Volume</h3>
                              <div className="mt-1 flex items-center">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  {activeTimeRange === "7d"
                                      ? "Last 7 days"
                                      : activeTimeRange === "30d"
                                          ? "Last 30 days"
                                          : activeTimeRange === "90d"
                                              ? "Last 90 days"
                                              : activeTimeRange === "ytd"
                                                  ? "Year to date"
                                                  : "All time"}
                                </p>
                                <div className="ml-4 flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:text-emerald-300">
                                  <TrendingUp className="mr-1 h-3 w-3" />
                                  12.5% from previous period
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <div className="flex rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <button
                                          className={`px-2 py-1.5 ${chartView === "area" ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"}`}
                                          onClick={() => setChartView("area")}
                                      >
                                        <LineChart className="h-4 w-4" />
                                      </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Area Chart</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>

                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <button
                                          className={`px-2 py-1.5 ${chartView === "bar" ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"}`}
                                          onClick={() => setChartView("bar")}
                                      >
                                        <BarChart3 className="h-4 w-4" />
                                      </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Bar Chart</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>

                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <button
                                          className={`px-2 py-1.5 ${chartView === "line" ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"}`}
                                          onClick={() => setChartView("line")}
                                      >
                                        <LineChart className="h-4 w-4" />
                                      </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Line Chart</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>

                              <button className="rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                                Export
                              </button>
                              <button className="rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                                <MoreHorizontal className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                              {chartView === "area" && (
                                  <AreaChart
                                      data={getFilteredChartData(areaChartData, selectedCoin)}
                                      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                                  >
                                    <defs>
                                      <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                      </linearGradient>
                                    </defs>
                                    <XAxis
                                        dataKey="date"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: darkMode ? "#9CA3AF" : "#9CA3AF" }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: darkMode ? "#9CA3AF" : "#9CA3AF" }}
                                        tickFormatter={(value) => `$${value}`}
                                        dx={-10}
                                    />
                                    <CartesianGrid
                                        vertical={false}
                                        strokeDasharray="3 3"
                                        stroke={darkMode ? "#374151" : "#E5E7EB"}
                                    />
                                    <RechartsTooltip
                                        contentStyle={{
                                          backgroundColor: darkMode ? "#1F2937" : "white",
                                          borderRadius: "0.5rem",
                                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                          border: darkMode ? "1px solid #374151" : "1px solid #E5E7EB",
                                          padding: "0.5rem",
                                          color: darkMode ? "#E5E7EB" : "inherit",
                                        }}
                                        formatter={(value) => [`$${value}`, "Volume"]}
                                        labelFormatter={(label) => `Date: ${label}`}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="volume"
                                        stroke="#10b981"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorVolume)"
                                        activeDot={{ r: 6, strokeWidth: 0, fill: "#059669" }}
                                    />
                                  </AreaChart>
                              )}

                              {chartView === "bar" && (
                                  <RechartsBarChart
                                      data={getFilteredChartData(areaChartData, selectedCoin)}
                                      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                                  >
                                    <XAxis
                                        dataKey="date"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: darkMode ? "#9CA3AF" : "#9CA3AF" }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: darkMode ? "#9CA3AF" : "#9CA3AF" }}
                                        tickFormatter={(value) => `$${value}`}
                                        dx={-10}
                                    />
                                    <CartesianGrid
                                        vertical={false}
                                        strokeDasharray="3 3"
                                        stroke={darkMode ? "#374151" : "#E5E7EB"}
                                    />
                                    <RechartsTooltip
                                        contentStyle={{
                                          backgroundColor: darkMode ? "#1F2937" : "white",
                                          borderRadius: "0.5rem",
                                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                          border: darkMode ? "1px solid #374151" : "1px solid #E5E7EB",
                                          padding: "0.5rem",
                                          color: darkMode ? "#E5E7EB" : "inherit",
                                        }}
                                        formatter={(value) => [`$${value}`, "Volume"]}
                                        labelFormatter={(label) => `Date: ${label}`}
                                    />
                                    <Bar dataKey="volume" fill="#10b981" radius={[4, 4, 0, 0]} barSize={20} />
                                  </RechartsBarChart>
                              )}

                              {chartView === "line" && (
                                  <RechartsLineChart
                                      data={getFilteredChartData(areaChartData, selectedCoin)}
                                      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                                  >
                                    <XAxis
                                        dataKey="date"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: darkMode ? "#9CA3AF" : "#9CA3AF" }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: darkMode ? "#9CA3AF" : "#9CA3AF" }}
                                        tickFormatter={(value) => `$${value}`}
                                        dx={-10}
                                    />
                                    <CartesianGrid
                                        vertical={false}
                                        strokeDasharray="3 3"
                                        stroke={darkMode ? "#374151" : "#E5E7EB"}
                                    />
                                    <RechartsTooltip
                                        contentStyle={{
                                          backgroundColor: darkMode ? "#1F2937" : "white",
                                          borderRadius: "0.5rem",
                                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                          border: darkMode ? "1px solid #374151" : "1px solid #E5E7EB",
                                          padding: "0.5rem",
                                          color: darkMode ? "#E5E7EB" : "inherit",
                                        }}
                                        formatter={(value) => [`$${value}`, "Volume"]}
                                        labelFormatter={(label) => `Date: ${label}`}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="volume"
                                        stroke="#10b981"
                                        strokeWidth={2}
                                        dot={{ r: 4, fill: "#10b981", strokeWidth: 0 }}
                                        activeDot={{ r: 6, fill: "#059669", strokeWidth: 0 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="transactions"
                                        stroke="#3b82f6"
                                        strokeWidth={2}
                                        dot={{ r: 4, fill: "#3b82f6", strokeWidth: 0 }}
                                        activeDot={{ r: 6, fill: "#2563eb", strokeWidth: 0 }}
                                    />
                                  </RechartsLineChart>
                              )}
                            </ResponsiveContainer>
                          </div>
                        </div>

                        {/* Side Charts */}
                        <div className="space-y-6">
                          {/* Payment Methods Chart */}
                          <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
                            <div className="mb-4 flex items-center justify-between">
                              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Payment Methods</h3>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button className="rounded-lg p-1 text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>More options</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
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
                                      tick={{ fontSize: 12, fill: darkMode ? "#9CA3AF" : "#9CA3AF" }}
                                      dy={10}
                                  />
                                  <YAxis hide={true} />
                                  <RechartsTooltip
                                      contentStyle={{
                                        backgroundColor: darkMode ? "#1F2937" : "white",
                                        borderRadius: "0.5rem",
                                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                        border: darkMode ? "1px solid #374151" : "1px solid #E5E7EB",
                                        padding: "0.5rem",
                                        color: darkMode ? "#E5E7EB" : "inherit",
                                      }}
                                      formatter={(value) => [`$${value}`, "Volume"]}
                                  />
                                  <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                                    {barChartData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={
                                              index % 5 === 0
                                                  ? "#10b981"
                                                  : index % 5 === 1
                                                      ? "#3b82f6"
                                                      : index % 5 === 2
                                                          ? "#8b5cf6"
                                                          : index % 5 === 3
                                                              ? "#f59e0b"
                                                              : "#ef4444"
                                            }
                                        />
                                    ))}
                                  </Bar>
                                </RechartsBarChart>
                              </ResponsiveContainer>
                            </div>
                          </div>

                          {/* Transaction Status Chart */}
                          <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
                            <div className="mb-4 flex items-center justify-between">
                              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Transaction Status</h3>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button className="rounded-lg p-1 text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200">
                                      <Info className="h-4 w-4" />
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Status breakdown of all transactions</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
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
                                  <RechartsTooltip
                                      contentStyle={{
                                        backgroundColor: darkMode ? "#1F2937" : "white",
                                        borderRadius: "0.5rem",
                                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                        border: darkMode ? "1px solid #374151" : "1px solid #E5E7EB",
                                        padding: "0.5rem",
                                        color: darkMode ? "#E5E7EB" : "inherit",
                                      }}
                                      formatter={(value) => [`${value}%`, "Percentage"]}
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
                                    <span className="text-xs text-gray-600 dark:text-gray-400">{entry.name}</span>
                                  </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Recent payments */}
                      <div className="mb-8 overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700">
                        <div className="p-6">
                          <div className="mb-6 flex flex-wrap items-center justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Payments</h3>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Your latest transactions</p>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                  <Search className="h-4 w-4 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search payments..."
                                    className="py-1.5 pl-10 pr-4 w-48 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 dark:text-white dark:placeholder-gray-400"
                                />
                              </div>
                              <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <Filter className="mr-1.5 h-3.5 w-3.5" />
                                Filter
                              </Button>
                              <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-9 border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-800/50"
                              >
                                <Download className="mr-1.5 h-3.5 w-3.5" />
                                Export
                              </Button>
                            </div>
                          </div>

                          <div className="overflow-x-auto -mx-6">
                            <table className="w-full min-w-full">
                              <thead>
                              <tr className="border-b border-gray-100 dark:border-gray-700">
                                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                  Transaction ID
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                  Customer
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                  Date
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                  Amount
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                  Coin
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                  Method
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                  Status
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                  Actions
                                </th>
                              </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                              {getFilteredData(recentPayments, selectedCoin).map((payment) => (
                                  <tr
                                      key={payment.id}
                                      className="group hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                                  >
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                      {payment.id}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                      <div className="flex items-center">
                                        <Avatar className="h-8 w-8 mr-3">
                                          <AvatarFallback className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs">
                                            {payment.customer
                                                .split(" ")
                                                .map((name) => name[0])
                                                .join("")}
                                          </AvatarFallback>
                                        </Avatar>
                                        <div>
                                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                                            {payment.customer}
                                          </div>
                                          <div className="text-xs text-gray-500 dark:text-gray-400">{payment.email}</div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                      {payment.date}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                      {payment.amount}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                      <div className="flex items-center">
                                        <div
                                            className={`mr-2 h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold
                                      ${
                                                payment.coin === "BTC"
                                                    ? "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300"
                                                    : payment.coin === "ETH"
                                                        ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                                                        : payment.coin === "USDC"
                                                            ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
                                                            : payment.coin === "SOL"
                                                                ? "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
                                                                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                            }`}
                                        >
                                          {payment.coin.substring(0, 1)}
                                        </div>
                                        <span className="text-sm text-gray-700 dark:text-gray-300">{payment.coin}</span>
                                      </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                      {payment.method}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                                      {payment.status === "success" && (
                                          <Badge
                                              variant="outline"
                                              className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                                          >
                                            <CheckCircle2 className="mr-1 h-3 w-3" />
                                            Success
                                          </Badge>
                                      )}
                                      {payment.status === "pending" && (
                                          <Badge
                                              variant="outline"
                                              className="bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800"
                                          >
                                            <Clock className="mr-1 h-3 w-3" />
                                            Pending
                                          </Badge>
                                      )}
                                      {payment.status === "failed" && (
                                          <Badge
                                              variant="outline"
                                              className="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800"
                                          >
                                            <XCircle className="mr-1 h-3 w-3" />
                                            Failed
                                          </Badge>
                                      )}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                                      <div className="invisible group-hover:visible flex items-center justify-end space-x-2">
                                        <TooltipProvider>
                                          <Tooltip>
                                            <TooltipTrigger asChild>
                                              <button className="rounded-full p-1 text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200">
                                                <ExternalLink className="h-4 w-4" />
                                              </button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                              <p>View details</p>
                                            </TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>
                                        <TooltipProvider>
                                          <Tooltip>
                                            <TooltipTrigger asChild>
                                              <button className="rounded-full p-1 text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200">
                                                <MoreHorizontal className="h-4 w-4" />
                                              </button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                              <p>More options</p>
                                            </TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>
                                      </div>
                                    </td>
                                  </tr>
                              ))}
                              </tbody>
                            </table>
                          </div>

                          <div className="mt-6 flex items-center justify-between">
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              Showing{" "}
                              <span className="font-medium">{getFilteredData(recentPayments, selectedCoin).length}</span> of{" "}
                              <span className="font-medium">42</span> payments
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <ChevronLeft className="mr-1 h-4 w-4" />
                                Previous
                              </Button>
                              <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-9 border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-800/50"
                              >
                                Next
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick actions and System Health */}
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Quick Actions Panel */}
                        <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
                          <div className="mb-5 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h3>
                            <div className="rounded-full bg-emerald-50 dark:bg-emerald-900/50 p-1.5">
                              <Zap className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
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

                            <button className="group w-full rounded-xl bg-white dark:bg-gray-700 px-4 py-3 text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-200">
                              <div className="flex items-center">
                                <div className="mr-3 rounded-lg bg-blue-50 dark:bg-blue-900/50 p-2">
                                  <RefreshCw className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="flex-1 text-left">
                                  <div className="font-medium">Generate Subscription</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Create recurring payment plans
                                  </div>
                                </div>
                                <ArrowRight className="h-4 w-4 text-gray-400 dark:text-gray-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                              </div>
                            </button>

                            <button className="group w-full rounded-xl bg-white dark:bg-gray-700 px-4 py-3 text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-200">
                              <div className="flex items-center">
                                <div className="mr-3 rounded-lg bg-purple-50 dark:bg-purple-900/50 p-2">
                                  <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div className="flex-1 text-left">
                                  <div className="font-medium">View API Docs</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Explore integration options
                                  </div>
                                </div>
                                <ArrowRight className="h-4 w-4 text-gray-400 dark:text-gray-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                              </div>
                            </button>

                            <button className="group w-full rounded-xl bg-white dark:bg-gray-700 px-4 py-3 text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-200">
                              <div className="flex items-center">
                                <div className="mr-3 rounded-lg bg-amber-50 dark:bg-amber-900/50 p-2">
                                  <ShieldCheck className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                                </div>
                                <div className="flex-1 text-left">
                                  <div className="font-medium">Test in Sandbox</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Try features in test environment
                                  </div>
                                </div>
                                <ArrowRight className="h-4 w-4 text-gray-400 dark:text-gray-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                              </div>
                            </button>
                          </div>
                        </div>

                        {/* System Health Widget */}
                        <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
                          <div className="mb-5 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">System Health</h3>
                            <div className="rounded-full bg-green-50 dark:bg-green-900/50 p-1.5">
                              <Activity className="h-4 w-4 text-green-600 dark:text-green-400" />
                            </div>
                          </div>

                          <div className="mb-6 space-y-4">
                            <div className="flex items-center justify-between rounded-lg bg-gray-50 dark:bg-gray-700 p-3 border border-gray-100 dark:border-gray-600">
                              <div className="flex items-center">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="ml-3">
                                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                                    API Webhook Status
                                  </div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">All systems operational</div>
                                </div>
                              </div>
                              <Badge
                                  variant="outline"
                                  className="bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800"
                              >
                                Online
                              </Badge>
                            </div>

                            <div className="space-y-3">
                              <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3">
                                <div className="flex items-center">
                                  <div className="mr-3 rounded-md bg-emerald-100 dark:bg-emerald-900/50 p-1.5">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                  </div>
                                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Last Transaction
                              </span>
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">3 min ago</span>
                              </div>

                              <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3">
                                <div className="flex items-center">
                                  <div className="mr-3 rounded-md bg-emerald-100 dark:bg-emerald-900/50 p-1.5">
                                    <RefreshCw className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                  </div>
                                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Last API Usage
                              </span>
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">2h ago</span>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <div className="mr-3 rounded-md bg-emerald-100 dark:bg-emerald-900/50 p-1.5">
                                    <Shield className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                  </div>
                                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Security Status
                              </span>
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Protected</span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 rounded-lg bg-gray-50 dark:bg-gray-700 p-3 border border-gray-100 dark:border-gray-600">
                            <div className="flex items-center">
                              <div className="mr-3 rounded-md bg-blue-100 dark:bg-blue-900/50 p-1.5">
                                <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-white">System Uptime</div>
                                <div className="mt-1 h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-600">
                                  <div className="h-1.5 w-[99.8%] rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
                                </div>
                                <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                  99.8% uptime in the last 30 days
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Help & Support Card */}
                        <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700 sm:col-span-2 lg:col-span-1">
                          <div className="mb-5 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Help & Support</h3>
                            <div className="rounded-full bg-blue-50 dark:bg-blue-900/50 p-1.5">
                              <HelpCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            </div>
                          </div>

                          <div className="mb-5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-4">
                            <div className="flex items-start">
                              <div className="mr-4 mt-1 rounded-full bg-white dark:bg-gray-800 p-2 shadow-sm">
                                <Sparkles className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">24/7 Support Available</h4>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                                  Our support team is available around the clock to help you with any questions or issues.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <button className="group flex w-full items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 px-4 py-3 text-left hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200">
                              <div className="flex items-center">
                                <div className="mr-3 rounded-md bg-gray-100 dark:bg-gray-600 p-1.5">
                                  <FileText className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Documentation</span>
                              </div>
                              <ArrowUpRight className="h-4 w-4 text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200" />
                            </button>

                            <button className="group flex w-full items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 px-4 py-3 text-left hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200">
                              <div className="flex items-center">
                                <div className="mr-3 rounded-md bg-gray-100 dark:bg-gray-600 p-1.5">
                                  <MessageSquare className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Contact Support
                            </span>
                              </div>
                              <ArrowUpRight className="h-4 w-4 text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200" />
                            </button>

                            <button className="group flex w-full items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 px-4 py-3 text-left hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200">
                              <div className="flex items-center">
                                <div className="mr-3 rounded-md bg-gray-100 dark:bg-gray-600 p-1.5">
                                  <Layers className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Knowledge Base</span>
                              </div>
                              <ArrowUpRight className="h-4 w-4 text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="transactions" className="mt-4">
                      {/* Upcoming Payments */}
                      <div className="mb-8 overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700">
                        <div className="p-6">
                          <div className="mb-6 flex flex-wrap items-center justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Payments</h3>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Scheduled recurring payments</p>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                className="h-9 border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-800/50"
                            >
                              <Plus className="mr-1.5 h-3.5 w-3.5" />
                              New Subscription
                            </Button>
                          </div>

                          <div className="overflow-x-auto -mx-6">
                            <table className="w-full min-w-full">
                              <thead>
                              <tr className="border-b border-gray-100 dark:border-gray-700">
                                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                  Subscription ID
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                  Customer
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                  Next Payment
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                  Amount
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                  Coin
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                  Type
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                  Actions
                                </th>
                              </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                              {getFilteredData(upcomingPayments, selectedCoin).map((payment) => (
                                  <tr
                                      key={payment.id}
                                      className="group hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                                  >
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                      {payment.id}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                      <div className="flex items-center">
                                        <Avatar className="h-8 w-8 mr-3">
                                          <AvatarFallback className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs">
                                            {payment.customer
                                                .split(" ")
                                                .map((name) => name[0])
                                                .join("")}
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                                          {payment.customer}
                                        </div>
                                      </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                      {payment.date}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                      {payment.amount}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                      <div className="flex items-center">
                                        <div
                                            className={`mr-2 h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold
                                      ${
                                                payment.coin === "BTC"
                                                    ? "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300"
                                                    : payment.coin === "ETH"
                                                        ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                                                        : payment.coin === "USDC"
                                                            ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
                                                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                            }`}
                                        >
                                          {payment.coin.substring(0, 1)}
                                        </div>
                                        <span className="text-sm text-gray-700 dark:text-gray-300">{payment.coin}</span>
                                      </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                      {payment.type}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                                      <div className="invisible group-hover:visible flex items-center justify-end space-x-2">
                                        <TooltipProvider>
                                          <Tooltip>
                                            <TooltipTrigger asChild>
                                              <button className="rounded-full p-1 text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200">
                                                <ExternalLink className="h-4 w-4" />
                                              </button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                              <p>View details</p>
                                            </TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>
                                        <TooltipProvider>
                                          <Tooltip>
                                            <TooltipTrigger asChild>
                                              <button className="rounded-full p-1 text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200">
                                                <MoreHorizontal className="h-4 w-4" />
                                              </button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                              <p>More options</p>
                                            </TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>
                                      </div>
                                    </td>
                                  </tr>
                              ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {/* Growth Metrics */}
                      <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {growthMetrics.map((metric, index) => (
                            <div
                                key={index}
                                className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700"
                            >
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{metric.label}</h3>
                                <div
                                    className={`flex items-center text-xs font-medium ${
                                        metric.trend === "up"
                                            ? "text-emerald-600 dark:text-emerald-400"
                                            : "text-red-600 dark:text-red-400"
                                    }`}
                                >
                                  {metric.trend === "up" ? (
                                      <ArrowUp className="h-3 w-3 mr-1" />
                                  ) : (
                                      <ArrowDown className="h-3 w-3 mr-1" />
                                  )}
                                  {metric.value}
                                </div>
                              </div>
                              <div className="flex items-end justify-between">
                                <div>
                                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    vs {metric.previousValue} last period
                                  </p>
                                </div>
                                <div
                                    className={`h-10 w-10 rounded-full flex items-center justify-center ${
                                        metric.trend === "up"
                                            ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400"
                                            : "bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400"
                                    }`}
                                >
                                  {metric.trend === "up" ? (
                                      <TrendingUp className="h-5 w-5" />
                                  ) : (
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="20"
                                          height="20"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="lucide lucide-trending-down"
                                      >
                                        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                                        <polyline points="16 17 22 17 22 11" />
                                      </svg>
                                  )}
                                </div>
                              </div>
                            </div>
                        ))}
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
            )}
          </main>
        </div>
      </div>
  )
}
