"use client";

import { useState } from "react";
import { 
  BarChart, 
  Bell, 
  CreditCard, 
  DollarSign, 
  Download, 
  Home, 
  Menu, 
  Settings, 
  User, 
  Wallet, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function LightDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
        className={`fixed top-0 left-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 lg:relative lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <div className="flex items-center">
            <div className="mr-2 rounded-lg bg-emerald-100 p-1">
              <Wallet className="h-6 w-6 text-emerald-600" />
            </div>
            <span className="text-xl font-bold text-gray-900">Bitmopay</span>
          </div>
          <button 
            className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 lg:hidden"
            onClick={toggleSidebar}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a 
                href="#" 
                className="flex items-center rounded-lg bg-emerald-50 px-4 py-2 text-emerald-700"
              >
                <Home className="mr-3 h-5 w-5" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <CreditCard className="mr-3 h-5 w-5" />
                <span>Transactions</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <Wallet className="mr-3 h-5 w-5" />
                <span>Wallets</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <BarChart className="mr-3 h-5 w-5" />
                <span>Analytics</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <Settings className="mr-3 h-5 w-5" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-4 lg:px-6">
          <button 
            className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 lg:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-4">
            <button className="rounded-full p-1 text-gray-500 hover:bg-gray-100">
              <Bell className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-medium">
                JD
              </div>
              <span className="text-sm font-medium text-gray-700">John Doe</span>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-4 lg:p-6">
          <h1 className="mb-6 text-2xl font-bold text-gray-900">Dashboard</h1>
          
          {/* Stats cards */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-emerald-100 p-2">
                  <DollarSign className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Balance</p>
                  <p className="text-2xl font-bold text-gray-900">$12,345.67</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-emerald-100 p-2">
                  <CreditCard className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Transactions</p>
                  <p className="text-2xl font-bold text-gray-900">1,234</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-emerald-100 p-2">
                  <User className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Customers</p>
                  <p className="text-2xl font-bold text-gray-900">567</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-emerald-100 p-2">
                  <BarChart className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Conversion Rate</p>
                  <p className="text-2xl font-bold text-gray-900">3.2%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent transactions */}
          <div className="mb-6 rounded-lg border bg-white shadow-sm">
            <div className="border-b px-4 py-3">
              <h2 className="font-semibold text-gray-900">Recent Transactions</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">
                        TX-{Math.floor(Math.random() * 1000000)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {new Date().toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        ${(Math.random() * 1000).toFixed(2)}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t px-4 py-3 text-right">
              <Button variant="outline" size="sm" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <h3 className="mb-3 font-semibold text-gray-900">Quick Actions</h3>
              <div className="space-y-2">
                <Button className="w-full justify-start bg-emerald-600 hover:bg-emerald-700">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Create Invoice
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Wallet className="mr-2 h-4 w-4" />
                  Withdraw Funds
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  API Settings
                </Button>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <h3 className="mb-3 font-semibold text-gray-900">Payment Methods</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-3 h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center text-yellow-800 font-bold text-xs">₿</div>
                    <span className="font-medium text-gray-900">Bitcoin</span>
                  </div>
                  <span className="text-sm text-gray-500">0.12 BTC</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-3 h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold text-xs">Ξ</div>
                    <span className="font-medium text-gray-900">Ethereum</span>
                  </div>
                  <span className="text-sm text-gray-500">1.45 ETH</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-3 h-8 w-8 rounded-full bg-green-400 flex items-center justify-center text-white font-bold text-xs">$</div>
                    <span className="font-medium text-gray-900">USDT</span>
                  </div>
                  <span className="text-sm text-gray-500">2,500 USDT</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-gradient-to-br from-emerald-500 to-emerald-700 p-4 text-white shadow-sm sm:col-span-2 lg:col-span-1">
              <h3 className="mb-3 font-semibold">Upgrade to Pro</h3>
              <p className="mb-4 text-sm text-emerald-100">
                Get access to advanced features, lower fees, and priority support.
              </p>
              <Button className="bg-white text-emerald-700 hover:bg-emerald-50">
                Upgrade Now
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}