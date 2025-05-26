"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Wallet, X, Search, Sparkles, User, Settings, Key, LogOut } from "lucide-react";
import { SidebarSection } from "@/config/sidebar-links";
import { UpgradeProDialog } from "./upgrade-pro-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SidebarProps {
  sidebarLinks: SidebarSection[];
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export function Sidebar({ sidebarLinks, isSidebarOpen, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();
  const [isUpgradeDialogOpen, setIsUpgradeDialogOpen] = useState(false);

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/50 lg:hidden" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          `!sticky left-0 top-0 z-50 h-screen w-72 transform overflow-y-auto overscroll-contain bg-white
          shadow-xl transition-all duration-300 ease-in-out dark:bg-gray-800 lg:relative lg:translate-x-0`,
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-100 px-6 dark:border-gray-700">
          <div className="flex items-center">
            <div className="mr-3 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 p-1.5 shadow-md">
              <Wallet className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Bitmopay
            </span>
          </div>
          <button
            className="rounded-full p-1.5 text-gray-500 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-400
              dark:hover:bg-gray-700 lg:hidden"
            onClick={toggleSidebar}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {" "}
          {/* User profile section */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                className="mb-6 flex w-full cursor-pointer items-center justify-between rounded-lg p-2 transition-colors
                  hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="relative mr-3">
                  <Avatar className="h-10 w-10 border-2 border-white dark:border-gray-800">
                    <AvatarImage src="/abstract-profile-avatar.png" alt="JD" />
                    <AvatarFallback className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500
                      dark:border-gray-800"
                  ></div>
                </div>{" "}
                <div className="flex-grow">
                  <div className="font-medium text-gray-900 dark:text-white">John Doe</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Premium Account</div>
                </div>
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
                  className="ml-1 text-gray-400"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link
                  href="/dashboard/settings/profile"
                  className="flex cursor-pointer items-center"
                >
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings" className="flex cursor-pointer items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/dashboard/settings/api-keys"
                  className="flex cursor-pointer items-center"
                >
                  <Key className="mr-2 h-4 w-4" />
                  <span>API Keys</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/auth/logout" className="flex cursor-pointer items-center text-red-500">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Search bar */}
          <div className="relative mb-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm transition-all
                duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500
                dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
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
                    const isActive =
                      pathname === link.href ||
                      (link.href !== "/dashboard" && pathname?.startsWith(link.href));

                    return (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className={`flex items-center rounded-lg ${
                          isActive
                              ? `bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-700 dark:from-emerald-900/30
                                dark:to-emerald-800/30 dark:text-emerald-300`
                              : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                          } group px-4 py-2.5 font-medium transition-all duration-200`}
                        >
                          <div
                            className={`mr-3 rounded-md ${
                            isActive
                                ? "bg-emerald-200/60 group-hover:bg-emerald-200 dark:bg-emerald-800/60 dark:group-hover:bg-emerald-800"
                                : "bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-700 dark:group-hover:bg-gray-600"
                            } p-1.5 transition-colors duration-200`}
                          >
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
            <p className="mb-3 text-xs text-emerald-100">
              Get advanced features, lower fees, and priority support.
            </p>{" "}
            <button
              className="w-full rounded-lg bg-white py-1.5 text-sm font-medium text-emerald-700 transition-colors
                duration-200 hover:bg-emerald-50"
              onClick={() => setIsUpgradeDialogOpen(true)}
            >
              Upgrade Now
            </button>
          </div>
        </div>
      </aside>

      {/* Upgrade Pro Dialog */}
      <UpgradeProDialog isOpen={isUpgradeDialogOpen} onOpenChange={setIsUpgradeDialogOpen} />
    </>
  );
}
