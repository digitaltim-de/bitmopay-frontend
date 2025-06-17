"use client";

import { Badge } from "@/components/ui/badge";

// Customer type definition
export interface Customer {
  id: string;
  email: string;
  firstSeen: string;
  lastPayment: string;
  totalVolume: number;
  coin: string;
  country: string;
  transactions: Transaction[];
  subscriptions: Subscription[];
}

// Transaction type definition
export interface Transaction {
  id: string;
  date: string;
  amount: number;
  coin: string;
  status: string;
}

// Subscription type definition
export interface Subscription {
  id: string;
  plan: string;
  startDate: string;
  nextBilling: string;
  status: string;
  amount: number;
  coin: string;
}

// Utility function to get status badge
export function getStatusBadge(status: string) {
  switch (status) {
    case "success":
      return (
        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Success</Badge>
      );
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Pending</Badge>;
    case "failed":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Failed</Badge>;
    case "active":
      return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Active</Badge>;
    default:
      return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">{status}</Badge>;
  }
}

// Utility function to get initials for avatar
export function getInitials(email: string) {
  const parts = email.split("@")[0].split(".");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return email.substring(0, 2).toUpperCase();
}
