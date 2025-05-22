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
  MessageSquare,
  Filter,
  Calendar,
  CalendarDays,
  Globe,
  Coins,
  LineChart,
  LayoutDashboard,
  BarChart4,
  PieChart as PieChartIcon,
  ChevronRight,
  ChevronLeft,
  AlertCircle,
  Info,
  LucideProps,
  Disc,
  Bitcoin,
  Landmark,
  ServerCrash,
  Webhook,
  Cable,
  ServerOff,
  NetworkIcon,
  Lock,
  AlertTriangle,
  DollarSign as UsdIcon
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
  Tooltip as RechartsTooltip, 
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Legend
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

// Define timeframe options
const timeframeOptions = [
  { value: "today", label: "Today" },
  { value: "7d", label: "7D" },
  { value: "30d", label: "30D" },
  { value: "ytd", label: "YTD" },
];

// Define cryptocurrency options
const cryptoOptions = [
  { value: "all", label: "All Coins" },
  { value: "btc", label: "Bitcoin (BTC)" },
  { value: "eth", label: "Ethereum (ETH)" },
  { value: "usdt", label: "Tether (USDT)" },
  { value: "usdc", label: "USD Coin (USDC)" },
  { value: "bnb", label: "BNB" },
  { value: "sol", label: "Solana (SOL)" },
];

// Sample data for crypto distributions
const cryptoDistributionData = [
  { name: "BTC", value: 40, color: "#F7931A" },
  { name: "USDT (TRC20)", value: 35, color: "#26A17B" },
  { name: "ETH", value: 15, color: "#627EEA" },
  { name: "BNB", value: 10, color: "#F3BA2F" },
];

// Sample data for payment transactions
const recentPayments = [
  { 
    id: "TX-123456", 
    date: "2025-05-22 14:32", 
    amount: 245.50,
    coin: "BTC", 
    status: "success",
    customer: "Alex Johnson",
    email: "alex@example.com",
    protection: false
  },
  { 
    id: "TX-123457", 
    date: "2025-05-21 09:15", 
    amount: 1200.00,
    coin: "ETH", 
    status: "success",
    customer: "Maria Garcia",
    email: "maria@example.com",
    protection: true
  },
  { 
    id: "TX-123458", 
    date: "2025-05-21 11:45", 
    amount: 78.25,
    coin: "USDC", 
    status: "pending",
    customer: "John Smith",
    email: "john@example.com",
    protection: false
  },
  { 
    id: "TX-123459", 
    date: "2025-05-20 16:20", 
    amount: 450.00,
    coin: "SOL", 
    status: "success",
    customer: "Sarah Lee",
    email: "sarah@example.com",
    protection: false
  },
  { 
    id: "TX-123460", 
    date: "2025-05-19 08:05", 
    amount: 95.75,
    coin: "BTC", 
    status: "failed",
    customer: "David Kim",
    email: "david@example.com",
    protection: false
  },
];

// Sample data for volume chart
const volumeChartData = [
  { date: "May 16", volume: 4000 },
  { date: "May 17", volume: 3000 },
  { date: "May 18", volume: 5000 },
  { date: "May 19", volume: 2780 },
  { date: "May 20", volume: 1890 },
  { date: "May 21", volume: 2390 },
  { date: "May 22", volume: 3490 },
];

// Status badges component
const StatusBadge = ({ status }: { status: string }) => {
  const statusConfig = {
    success: { color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300", icon: CheckCircle2 },
    pending: { color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300", icon: Clock },
    failed: { color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300", icon: XCircle },
    blocked: { color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300", icon: Lock },
  };

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
  const Icon = config.icon;

  return (
    <Badge variant="outline" className={`flex items-center gap-1 font-medium ${config.color}`}>
      <Icon className="h-3 w-3" />
      <span className="capitalize">{status}</span>
    </Badge>
  );
};

export function ModernDashboard() {
  // State management for filters
  const [timeframe, setTimeframe] = useState("30d");
  const [selectedCoin, setSelectedCoin] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltersSticky, setIsFiltersSticky] = useState(false);

  // Balances
  const [availableBalance, setAvailableBalance] = useState(24680.75);
  const [blockedBalance, setBlockedBalance] = useState(1250.50);

  // System status
  const [systemStatus, setSystemStatus] = useState({
    allOperational: true,
    lastWebhookFail: "2025-05-20T14:32:00Z",
    lastApiError: null,
  });
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll for sticky filters on mobile
  useEffect(() => {
    const handleScroll = () => {
      setIsFiltersSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
  // Filter payments based on search query and selected filters
  const filteredPayments = recentPayments.filter(payment => {
    const matchesSearch = searchQuery === "" || 
      payment.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
      payment.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCoin = selectedCoin === "all" || payment.coin.toLowerCase() === selectedCoin.toLowerCase();
    
    return matchesSearch && matchesCoin;
  });
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Main content */}
      <div className="container mx-auto p-4 md:p-6">
        {/* Global Filter Bar */}
        <div className={`${isFiltersSticky ? 'sticky top-0 z-10 bg-gray-50 py-3 shadow-md dark:bg-gray-900' : ''} transition-all duration-200`}>
          <div className="mb-6 grid gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-800 md:flex md:items-center md:justify-between">
            <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center">
              {/* Timeframe selector */}
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-gray-500" />
                <Select value={timeframe} onValueChange={setTimeframe}>
                  <SelectTrigger className="h-9 w-[120px] border-gray-200 text-sm">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeframeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Coin selector */}
              <div className="flex items-center gap-2">
                <Coins className="h-4 w-4 text-gray-500" />
                <Select value={selectedCoin} onValueChange={setSelectedCoin}>
                  <SelectTrigger className="h-9 w-[180px] border-gray-200 text-sm md:w-[220px]">
                    <SelectValue placeholder="Select coin" />
                  </SelectTrigger>
                  <SelectContent>
                    {cryptoOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Search */}
            <div className="flex-1 md:max-w-xs">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search by TX ID or email..."
                  className="border-gray-200 pl-9 text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Loading state */}
        {isLoading ? (
          <div className="space-y-4">
            <div className="h-8 w-64 animate-pulse rounded-md bg-gray-200"></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-24 animate-pulse rounded-lg bg-gray-200"></div>
              ))}
            </div>
            <div className="mt-2 h-80 animate-pulse rounded-lg bg-gray-200"></div>
          </div>
        ) : (
          <>
            {/* KPI Cards */}
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Available Balance Card */}
              <Card className="overflow-hidden border-gray-200 shadow-sm transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-500">Available Balance</CardTitle>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs text-sm">Funds ready for immediate payout to your bank account</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end">
                    <div className="flex items-center text-3xl font-bold text-gray-900">
                      <UsdIcon className="mr-1 h-5 w-5 text-emerald-600" />
                      {availableBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <span className="ml-1 text-sm text-gray-500">USD</span>
                  </div>
                  <div className="mt-2 text-xs font-medium text-emerald-600">
                    Ready for payout
                  </div>
                </CardContent>
              </Card>
              
              {/* Blocked Balance Card */}
              <Card className="overflow-hidden border-gray-200 shadow-sm transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-500">Blocked Balance</CardTitle>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs text-sm">Funds held temporarily due to buyer protection or pending settlements</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end">
                    <div className="flex items-center text-3xl font-bold text-gray-900">
                      <UsdIcon className="mr-1 h-5 w-5 text-orange-500" />
                      {blockedBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <span className="ml-1 text-sm text-gray-500">USD</span>
                  </div>
                  <div className="mt-2 text-xs font-medium text-orange-600">
                    <Lock className="mr-1 inline-block h-3 w-3" />
                    Temporarily held
                  </div>
                </CardContent>
              </Card>
              
              {/* Total Volume Card */}
              <Card className="overflow-hidden border-gray-200 shadow-sm transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Total Volume (30d)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end">
                    <div className="flex items-center text-3xl font-bold text-gray-900">
                      <UsdIcon className="mr-1 h-5 w-5 text-blue-600" />
                      12,470.50
                    </div>
                    <span className="ml-1 text-sm text-gray-500">USD</span>
                  </div>
                  <div className="mt-2 flex items-center text-xs font-medium text-emerald-600">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    <span>+12.5% from previous period</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Actions Card */}
              <Card className="overflow-hidden border-gray-200 shadow-sm transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <Button size="sm" className="w-full justify-start bg-emerald-600 text-left hover:bg-emerald-700">
                    <Wallet className="mr-2 h-4 w-4" /> Request Payout
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start text-left">
                    <Landmark className="mr-2 h-4 w-4" /> Connect Bank
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start text-left">
                    <Download className="mr-2 h-4 w-4" /> Export Data
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Charts and Tables */}
            <div className="mb-6 grid gap-6 lg:grid-cols-3">
              {/* Recent Payments Table (on mobile will be cards) */}
              <Card className="col-span-full overflow-hidden border-gray-200 shadow-sm lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle>Recent Payments</CardTitle>
                  <Button variant="ghost" size="sm" className="gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700">
                    View All <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  {/* Desktop Table View */}
                  <div className="hidden md:block">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Transaction ID</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Amount (USD)</TableHead>
                          <TableHead>Coin</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredPayments.slice(0, 5).map((payment) => (
                          <TableRow key={payment.id}>
                            <TableCell className="font-medium">{payment.id}</TableCell>
                            <TableCell>{payment.date}</TableCell>
                            <TableCell>
                              ${payment.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              {payment.protection && (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Lock className="ml-1 inline h-3 w-3 text-orange-500" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Protected payment - funds temporarily held</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              )}
                            </TableCell>
                            <TableCell>{payment.coin}</TableCell>
                            <TableCell className="max-w-[150px] truncate" title={payment.email}>
                              {payment.email}
                            </TableCell>
                            <TableCell>
                              <StatusBadge status={payment.status} />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  
                  {/* Mobile Card View */}
                  <div className="space-y-3 md:hidden">
                    {filteredPayments.slice(0, 5).map((payment) => (
                      <div key={payment.id} className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
                        <div className="mb-2 flex items-center justify-between">
                          <div className="font-medium">{payment.id}</div>
                          <StatusBadge status={payment.status} />
                        </div>
                        <div className="mb-1 text-sm text-gray-500">{payment.date}</div>
                        <div className="mb-1 flex items-center">
                          <div className="font-medium">
                            ${payment.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                          <div className="ml-2 text-sm">{payment.coin}</div>
                          {payment.protection && <Lock className="ml-1 h-3 w-3 text-orange-500" />}
                        </div>
                        <div className="text-sm text-gray-500 truncate">{payment.email}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Coin Distribution Card */}
              <Card className="col-span-full overflow-hidden border-gray-200 shadow-sm lg:col-span-1">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>Most Used Coins (30d)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex justify-center pb-6 pt-4">
                  <div className="h-[240px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={cryptoDistributionData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {cryptoDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Legend
                          verticalAlign="bottom"
                          align="center"
                          layout="horizontal"
                          iconType="circle"
                          iconSize={8}
                        />
                        <RechartsTooltip
                          formatter={(value: number) => [`${value}%`, 'Percentage']}
                        />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Volume Chart & System Status */}
            <div className="mb-6 grid gap-6 lg:grid-cols-3">
              {/* Volume Chart */}
              <Card className="col-span-full overflow-hidden border-gray-200 shadow-sm lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle>Payment Volume</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={volumeChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis 
                          dataKey="date" 
                          tick={{ fontSize: 12 }} 
                          tickLine={false}
                          axisLine={{ stroke: '#f0f0f0' }}
                        />
                        <YAxis 
                          tick={{ fontSize: 12 }} 
                          tickFormatter={(value) => `$${value}`}
                          tickLine={false}
                          axisLine={false}
                        />
                        <RechartsTooltip 
                          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Volume']}
                          contentStyle={{ 
                            borderRadius: '4px', 
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                          }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="volume" 
                          stroke="#10b981" 
                          fill="url(#colorVolume)" 
                          strokeWidth={2}
                        />
                        <defs>
                          <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* System Status Card */}
              <Card className="col-span-full overflow-hidden border-gray-200 shadow-sm lg:col-span-1">
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {systemStatus.allOperational ? (
                    <div className="rounded-md bg-green-50 p-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="font-medium text-green-800">All Systems Operational</span>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-md bg-yellow-50 p-3">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600" />
                        <span className="font-medium text-yellow-800">System Degradation Detected</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Webhook className="h-4 w-4 text-gray-500" />
                        <span>Last webhook failure</span>
                      </div>
                      <div className="text-sm">
                        {systemStatus.lastWebhookFail ? (
                          <div className="flex items-center text-amber-600">
                            <Clock className="mr-1 h-3 w-3" />
                            {new Date(systemStatus.lastWebhookFail).toLocaleString(undefined, {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </div>
                        ) : (
                          <Badge variant="outline" className="bg-green-50 text-green-700">None</Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                      <div className="flex items-center gap-2 text-sm">
                        <ServerCrash className="h-4 w-4 text-gray-500" />
                        <span>Last API error</span>
                      </div>
                      <div className="text-sm">
                        {systemStatus.lastApiError ? (
                          <div className="flex items-center text-red-600">
                            <XCircle className="mr-1 h-3 w-3" />
                            {new Date(systemStatus.lastApiError).toLocaleString()}
                          </div>
                        ) : (
                          <Badge variant="outline" className="bg-green-50 text-green-700">All good</Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pb-2">
                      <div className="flex items-center gap-2 text-sm">
                        <NetworkIcon className="h-4 w-4 text-gray-500" />
                        <span>Blockchain connectivity</span>
                      </div>
                      <div className="text-sm">
                        <Badge variant="outline" className="bg-green-50 text-green-700">Normal</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
