"use client";

import { useState } from "react";
import {
  BarChart,
  LineChart,
  TrendingUp,
  Download,
  CreditCard,
  Repeat,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
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
  Legend,
} from "recharts";
import { format, subDays, startOfYear } from "date-fns";

// Mock data for payments by day
const generatePaymentsByDay = (days: number) => {
  const data = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = subDays(today, i);
    data.push({
      date: format(date, "MMM dd"),
      amount: Math.floor(Math.random() * 1000) + 500,
    });
  }
  
  return data;
};

// Mock data for subscription growth
const generateSubscriptionGrowth = (days: number) => {
  const data = [];
  const today = new Date();
  let total = 120; // Starting value
  
  for (let i = days - 1; i >= 0; i--) {
    const date = subDays(today, i);
    const newSubs = Math.floor(Math.random() * 10) + 1;
    total += newSubs;
    
    data.push({
      date: format(date, "MMM dd"),
      total: total,
      new: newSubs,
    });
  }
  
  return data;
};

// Mock data for average transaction value
const generateAvgTransactionValue = (days: number) => {
  const data = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = subDays(today, i);
    data.push({
      date: format(date, "MMM dd"),
      value: Math.floor(Math.random() * 100) + 50,
    });
  }
  
  return data;
};

// Mock data for payment methods
const paymentMethodsData = [
  { name: "Lightning", value: 45 },
  { name: "On-chain", value: 30 },
  { name: "Exchange", value: 15 },
  { name: "Other", value: 10 },
];

// Colors for pie chart
const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#6366f1"];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30D");
  const [selectedCoin, setSelectedCoin] = useState("all");
  
  // Get number of days based on selected time range
  const getDaysFromTimeRange = () => {
    switch (timeRange) {
      case "7D":
        return 7;
      case "30D":
        return 30;
      case "90D":
        return 90;
      case "YTD":
        return Math.floor((new Date().getTime() - startOfYear(new Date()).getTime()) / (1000 * 60 * 60 * 24));
      case "ALL":
        return 365; // Just use a year for "All time" in this mock
      default:
        return 30;
    }
  };
  
  const days = getDaysFromTimeRange();
  const paymentsByDayData = generatePaymentsByDay(days);
  const subscriptionGrowthData = generateSubscriptionGrowth(days);
  const avgTransactionValueData = generateAvgTransactionValue(days);
  
  // Calculate summary metrics
  const totalPaymentVolume = paymentsByDayData.reduce((sum, item) => sum + item.amount, 0);
  const totalSubscribers = subscriptionGrowthData[subscriptionGrowthData.length - 1].total;
  const newSubscribers = subscriptionGrowthData.reduce((sum, item) => sum + item.new, 0);
  const avgTransactionValue = avgTransactionValueData.reduce((sum, item) => sum + item.value, 0) / avgTransactionValueData.length;
  
  // Calculate percentage changes (mock data)
  const paymentVolumeChange = 12.5;
  const subscribersChange = 8.3;
  const avgTransactionChange = -3.2;
  
  // Handle export analytics data
  const handleExportData = () => {
    console.log("Exporting analytics data...");
  };
  
  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-md shadow-md">
          <p className="text-sm font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.name === "total" ? entry.value : `$${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container mx-auto p-6">
      <section className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Analytics
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Insights and trends to help you understand your business performance
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
            <Select
              value={timeRange}
              onValueChange={setTimeRange}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7D">Last 7 Days</SelectItem>
                <SelectItem value="30D">Last 30 Days</SelectItem>
                <SelectItem value="90D">Last 90 Days</SelectItem>
                <SelectItem value="YTD">Year to Date</SelectItem>
                <SelectItem value="ALL">All Time</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={selectedCoin}
              onValueChange={setSelectedCoin}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Coin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Coins</SelectItem>
                <SelectItem value="BTC">Bitcoin</SelectItem>
                <SelectItem value="ETH">Ethereum</SelectItem>
                <SelectItem value="USDT">USDT</SelectItem>
              </SelectContent>
            </Select>
            
            <Button
              onClick={handleExportData}
              variant="outline"
              className="flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Payment Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">${totalPaymentVolume.toLocaleString()}</div>
                  <div className={`flex items-center text-xs ${paymentVolumeChange >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    {paymentVolumeChange >= 0 ? (
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                    )}
                    {Math.abs(paymentVolumeChange)}% from previous period
                  </div>
                </div>
                <div className={`p-2 rounded-full ${paymentVolumeChange >= 0 ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                  <CreditCard className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Subscribers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">{totalSubscribers.toLocaleString()}</div>
                  <div className={`flex items-center text-xs ${subscribersChange >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    {subscribersChange >= 0 ? (
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                    )}
                    {Math.abs(subscribersChange)}% from previous period
                  </div>
                </div>
                <div className={`p-2 rounded-full ${subscribersChange >= 0 ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                  <Repeat className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">New Subscribers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">{newSubscribers}</div>
                  <div className="text-xs text-gray-500">
                    In the selected period
                  </div>
                </div>
                <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                  <Repeat className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Avg. Transaction Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">${avgTransactionValue.toFixed(2)}</div>
                  <div className={`flex items-center text-xs ${avgTransactionChange >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    {avgTransactionChange >= 0 ? (
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                    )}
                    {Math.abs(avgTransactionChange)}% from previous period
                  </div>
                </div>
                <div className={`p-2 rounded-full ${avgTransactionChange >= 0 ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                  <TrendingUp className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Payments by Day</CardTitle>
              <CardDescription>
                Daily payment volume over the selected period
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={paymentsByDayData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="date" 
                      tick={{ fontSize: 12 }}
                      tickMargin={10}
                      axisLine={{ stroke: '#e5e7eb' }}
                      tickLine={false}
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }}
                      tickMargin={10}
                      axisLine={{ stroke: '#e5e7eb' }}
                      tickLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <RechartsTooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="amount" 
                      stroke="#10b981" 
                      fillOpacity={1} 
                      fill="url(#colorAmount)" 
                      name="Amount"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Subscription Growth</CardTitle>
              <CardDescription>
                Total subscribers over the selected period
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={subscriptionGrowthData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="date" 
                      tick={{ fontSize: 12 }}
                      tickMargin={10}
                      axisLine={{ stroke: '#e5e7eb' }}
                      tickLine={false}
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }}
                      tickMargin={10}
                      axisLine={{ stroke: '#e5e7eb' }}
                      tickLine={false}
                    />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <RechartsTooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="total" 
                      stroke="#3b82f6" 
                      fillOpacity={1} 
                      fill="url(#colorTotal)" 
                      name="Total Subscribers"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Average Transaction Value</CardTitle>
              <CardDescription>
                Average value per transaction over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart
                    data={avgTransactionValueData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <XAxis 
                      dataKey="date" 
                      tick={{ fontSize: 12 }}
                      tickMargin={10}
                      axisLine={{ stroke: '#e5e7eb' }}
                      tickLine={false}
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }}
                      tickMargin={10}
                      axisLine={{ stroke: '#e5e7eb' }}
                      tickLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <RechartsTooltip content={<CustomTooltip />} />
                    <Bar 
                      dataKey="value" 
                      fill="#6366f1" 
                      radius={[4, 4, 0, 0]}
                      name="Avg Value"
                    />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>
                Distribution of payment methods used
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={paymentMethodsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {paymentMethodsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <RechartsTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}