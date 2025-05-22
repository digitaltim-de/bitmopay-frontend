"use client";

import Link from "next/link";
import { Menu, X, Search, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DocumentationHeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export function DocumentationHeader({ toggleSidebar, isSidebarOpen }: DocumentationHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <button
            className="mr-4 rounded-md p-2 text-gray-500 hover:bg-gray-100 lg:hidden dark:text-gray-400 dark:hover:bg-gray-800"
            onClick={toggleSidebar}
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          
          <Link href="/" className="flex items-center">
            <div className="mr-3 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 p-1.5 shadow-md">
              <svg
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="hidden text-xl font-bold text-gray-900 dark:text-white sm:inline-block">
              Bitmopay
            </span>
            <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              API Documentation
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search bar - hidden on mobile */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search documentation..."
              className="py-1.5 pl-10 pr-4 w-64 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
            />
          </div>

          {/* Navigation links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/documentation" 
              className="text-sm font-medium text-gray-900 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-500"
            >
              Docs
            </Link>
            <Link 
              href="/documentation" 
              className="text-sm font-medium text-gray-900 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-500"
            >
              API Reference
            </Link>
            <Link 
              href="/dashboard" 
              className="text-sm font-medium text-gray-900 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-500"
            >
              Dashboard
            </Link>
          </nav>

          {/* Login button */}
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden md:flex"
            asChild
          >
            <Link href="/login">
              Login
              <ExternalLink className="ml-2 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}