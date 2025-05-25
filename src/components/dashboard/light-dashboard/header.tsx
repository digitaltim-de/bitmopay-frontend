"use client";

import {
  Menu,
  Search,
  Bell,
  HelpCircle,
  ChevronDown,
  User,
  Settings,
  Shield,
  X,
  Check,
  Clock,
  Info,
  AlertCircle,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
}

interface HeaderProps {
  toggleSidebar: () => void;
  toggleSearchBar: () => void;
  toggleDarkMode: () => void;
  darkMode: boolean;
}

function NotificationBell() {
  const [unreadCount, setUnreadCount] = useState(3);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Payment Received",
      message: "You received a payment of $250.00 via Bitcoin.",
      time: "10 mins ago",
      type: "success",
      read: false,
    },
    {
      id: "2",
      title: "New User Registration",
      message: "A new user has registered on your platform.",
      time: "1 hour ago",
      type: "info",
      read: false,
    },
    {
      id: "3",
      title: "System Update",
      message: "System maintenance scheduled for tonight at 2:00 AM.",
      time: "3 hours ago",
      type: "warning",
      read: false,
    },
    {
      id: "4",
      title: "Failed Transaction",
      message: "A transaction has failed due to insufficient funds.",
      time: "Yesterday",
      type: "error",
      read: true,
    },
    {
      id: "5",
      title: "Weekly Report",
      message: "Your weekly transaction report is now available.",
      time: "2 days ago",
      type: "info",
      read: true,
    },
  ]);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })));
    setUnreadCount(0);
  };

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
    setUnreadCount((prev) => Math.max(prev - 1, 0));
  };
  const getIconForType = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return <Check className="h-5 w-5 text-green-600 dark:text-green-400" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />;
      case "error":
        return <X className="h-5 w-5 text-red-600 dark:text-red-400" />;
      default:
        return <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="relative rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100
            dark:text-gray-300 dark:hover:bg-gray-700"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span
              className="absolute right-1.5 top-1.5 flex h-2 w-2 items-center justify-center rounded-full bg-red-500 ring-2
                ring-white dark:ring-gray-800"
            >
              {unreadCount > 9 && (
                <span className="absolute text-[8px] font-bold text-white">{unreadCount}</span>
              )}
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between p-4">
            <h3 className="font-medium">Notifications</h3>
            <button
              onClick={markAllAsRead}
              className="text-xs font-medium text-emerald-600 hover:text-emerald-800 dark:text-emerald-400
                dark:hover:text-emerald-300"
            >
              Mark all as read
            </button>
          </div>
        </div>
        <div className="max-h-80 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <Bell className="mb-2 h-10 w-10 text-gray-400" />
              <p className="text-sm text-gray-500">No notifications yet</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`border-b border-gray-100 p-4 transition-colors last:border-0 hover:bg-gray-50 dark:border-gray-700
                  dark:hover:bg-gray-800 ${notification.read ? "opacity-70" : "bg-gray-50 dark:bg-gray-800/50"}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-start">
                  <div
                    className={`mr-3 flex items-start rounded-full p-1.5 ${
                      notification.type === "success"
                        ? "bg-green-100 dark:bg-green-900/30"
                        : notification.type === "info"
                          ? "bg-blue-100 dark:bg-blue-900/30"
                          : notification.type === "warning"
                            ? "bg-amber-100 dark:bg-amber-900/30"
                            : "bg-red-100 dark:bg-red-900/30"
                      }`}
                  >
                    {getIconForType(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <p className="font-medium text-gray-900 dark:text-white">
                        {notification.title}
                      </p>
                      <span className="ml-2 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400">
                        {notification.time}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {notification.message}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="border-t border-gray-200 p-2 dark:border-gray-700">
          <button
            className="w-full rounded-md p-2 text-center text-sm font-medium text-gray-700 transition-colors
              hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            View all notifications
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function DashboardHeader({
  toggleSidebar,
  toggleSearchBar,
  toggleDarkMode,
  darkMode,
}: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-gray-100 bg-white/80 px-6
        shadow-sm backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80"
    >
      <div className="flex items-center">
        <button
          className="mr-4 rounded-full p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100
            dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden"
          onClick={toggleSidebar}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center space-x-3">
        {/* Search toggle for mobile */}
        <button
          className="rounded-full p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-400
            dark:hover:bg-gray-700 md:hidden"
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
                className="h-9 w-9 border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600
                  dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
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
        {/* Notification bell with popover */}
        <NotificationBell /> {/* Help button with popover */}{" "}
        <Popover>
          <PopoverTrigger asChild>
            <button
              className="hidden rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100
                dark:text-gray-300 dark:hover:bg-gray-700 md:flex"
            >
              <HelpCircle className="h-5 w-5" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between p-4">
                <h3 className="font-medium">Help & Support</h3>
              </div>
            </div>{" "}
            <div className="max-h-80 overflow-y-auto">
              <a
                href="#"
                className="block border-b border-gray-100 p-4 text-gray-900 transition-colors hover:bg-gray-50
                  dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
              >
                Documentation
              </a>
              <a
                href="#"
                className="block border-b border-gray-100 p-4 text-gray-900 transition-colors hover:bg-gray-50
                  dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
              >
                Contact Support
              </a>
              <a
                href="#"
                className="block p-4 text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800"
              >
                FAQs
              </a>
            </div>
            <div className="border-t border-gray-200 p-2 dark:border-gray-700">
              <button
                className="w-full rounded-md p-2 text-center text-sm font-medium text-gray-700 transition-colors
                  hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Visit help center
              </button>
            </div>
          </PopoverContent>
        </Popover>
        {/* User dropdown */}
        <div className="group relative">
          <div
            className="flex cursor-pointer items-center space-x-2 rounded-full px-2 py-1 transition-colors duration-200
              hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Avatar className="h-8 w-8 border-2 border-white dark:border-gray-800">
              <AvatarImage src="/abstract-profile-avatar.png" alt="JD" />
              <AvatarFallback className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white">
                JD
              </AvatarFallback>
            </Avatar>
            <span className="hidden text-sm font-medium text-gray-700 dark:text-gray-300 md:inline-block">
              John Doe
            </span>
            <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </div>
          <div
            className="absolute right-0 z-50 mt-2 hidden w-56 rounded-lg border border-gray-100 bg-white py-2 shadow-xl
              transition-all duration-200 group-hover:block dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="border-b border-gray-100 px-4 py-2 dark:border-gray-700">
              <div className="font-medium text-gray-900 dark:text-white">John Doe</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">john@example.com</div>
            </div>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50
                dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <div className="flex items-center">
                <User className="mr-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
                Profile
              </div>
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50
                dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <div className="flex items-center">
                <Settings className="mr-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
                Settings
              </div>
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50
                dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <div className="flex items-center">
                <Shield className="mr-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
                API Keys
              </div>
            </a>
            <div className="mt-1 border-t border-gray-100 pt-1 dark:border-gray-700">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-red-600 transition-colors duration-200 hover:bg-gray-50
                  dark:text-red-400 dark:hover:bg-gray-700"
              >
                <div className="flex items-center">
                  <X className="mr-3 h-4 w-4" />
                  Logout
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function MobileSearchBar({
  show,
  onSearch,
}: {
  show: boolean;
  onSearch?: (query: string) => void;
}) {
  return show ? (
    <div className="border-b border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 md:hidden">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search transactions..."
          className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-transparent
            focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-gray-600 dark:bg-gray-700
            dark:text-white dark:placeholder-gray-400"
          autoFocus
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
    </div>
  ) : null;
}
