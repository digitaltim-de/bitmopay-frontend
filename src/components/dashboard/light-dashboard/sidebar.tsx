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
        </div>
      </aside>
    </>
  );
}
