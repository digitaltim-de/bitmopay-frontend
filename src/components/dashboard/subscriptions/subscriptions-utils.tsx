"use client";

import { Badge } from "@/components/ui/badge";

// Define Subscription type
export interface Transaction {
  id: string;
  date: string;
  amount: number;
  status: string;
}

export interface Subscription {
  id: string;
  email: string;
  plan: string;
  amount: number;
  startDate: string;
  nextBilling: string;
  status: string;
  coin: string;
  paymentMethod: string;
  cancelledDate?: string;
  cancellationReason?: string;
  transactions: Transaction[];
}

// Mock data for subscriptions
export const subscriptions: Subscription[] = [
  {
    id: "sub-001",
    email: "john.doe@example.com",
    plan: "Pro Monthly",
    amount: 29.99,
    startDate: "2023-04-15T10:30:00",
    nextBilling: "2023-05-15T10:30:00",
    status: "active",
    coin: "BTC",
    paymentMethod: "Lightning",
    transactions: [
      {
        id: "tx-001",
        date: "2023-04-15T10:30:00",
        amount: 29.99,
        status: "completed",
      },
    ],
  },
  {
    id: "sub-002",
    email: "alice.smith@example.com",
    plan: "Pro Yearly",
    amount: 299.99,
    startDate: "2023-03-10T14:45:00",
    nextBilling: "2024-03-10T14:45:00",
    status: "active",
    coin: "ETH",
    paymentMethod: "On-chain",
    transactions: [
      {
        id: "tx-002",
        date: "2023-03-10T14:45:00",
        amount: 299.99,
        status: "completed",
      },
    ],
  },
  {
    id: "sub-003",
    email: "bob.johnson@example.com",
    plan: "Basic Monthly",
    amount: 9.99,
    startDate: "2023-04-25T09:15:00",
    nextBilling: "2023-05-25T09:15:00",
    status: "trial",
    coin: "BTC",
    paymentMethod: "Lightning",
    transactions: [],
  },
  {
    id: "sub-004",
    email: "emma.wilson@example.com",
    plan: "Pro Monthly",
    amount: 29.99,
    startDate: "2023-02-12T16:20:00",
    nextBilling: "",
    status: "cancelled",
    coin: "USDT",
    paymentMethod: "On-chain",
    cancelledDate: "2023-03-28T11:45:00",
    cancellationReason: "Switching to a different service",
    transactions: [
      {
        id: "tx-004",
        date: "2023-02-12T16:20:00",
        amount: 29.99,
        status: "completed",
      },
      {
        id: "tx-005",
        date: "2023-03-12T16:20:00",
        amount: 29.99,
        status: "completed",
      },
    ],
  },
  {
    id: "sub-005",
    email: "michael.brown@example.com",
    plan: "Basic Yearly",
    amount: 99.99,
    startDate: "2023-01-05T11:05:00",
    nextBilling: "2024-01-05T11:05:00",
    status: "active",
    coin: "ETH",
    paymentMethod: "On-chain",
    transactions: [
      {
        id: "tx-006",
        date: "2023-01-05T11:05:00",
        amount: 99.99,
        status: "completed",
      },
    ],
  },
];

// Get status badge for subscription
export const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Active</Badge>;
    case "trial":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Trial</Badge>;
    case "cancelled":
      return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Cancelled</Badge>;
    default:
      return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">{status}</Badge>;
  }
};

// Get initials for avatar
export const getInitials = (email: string) => {
  const parts = email.split("@")[0].split(".");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return email.substring(0, 2).toUpperCase();
};
