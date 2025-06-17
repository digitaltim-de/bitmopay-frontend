"use client";

import { Badge } from "@/components/ui/badge";

// Payment type definition
export interface Payment {
  id: string;
  customer: string;
  date: string;
  amount: number;
  coin: string;
  status: string;
  method: string;
}

// Sample payment data
export const payments: Payment[] = [
  {
    id: "TX-2023-07-15-001",
    customer: "john.doe@example.com",
    date: "2023-07-15T10:30:00",
    amount: 250.0,
    coin: "BTC",
    status: "success",
    method: "Lightning",
  },
  {
    id: "TX-2023-07-14-002",
    customer: "alice.smith@example.com",
    date: "2023-07-14T14:45:00",
    amount: 75.5,
    coin: "ETH",
    status: "success",
    method: "On-chain",
  },
  {
    id: "TX-2023-07-13-003",
    customer: "bob.johnson@example.com",
    date: "2023-07-13T09:15:00",
    amount: 120.0,
    coin: "USDT",
    status: "pending",
    method: "On-chain",
  },
  {
    id: "TX-2023-07-12-004",
    customer: "emma.wilson@example.com",
    date: "2023-07-12T16:20:00",
    amount: 300.0,
    coin: "BTC",
    status: "success",
    method: "Lightning",
  },
  {
    id: "TX-2023-07-11-005",
    customer: "michael.brown@example.com",
    date: "2023-07-11T11:05:00",
    amount: 50.0,
    coin: "ETH",
    status: "failed",
    method: "On-chain",
  },
  {
    id: "TX-2023-07-10-006",
    customer: "sophia.garcia@example.com",
    date: "2023-07-10T13:40:00",
    amount: 180.0,
    coin: "USDT",
    status: "success",
    method: "On-chain",
  },
  {
    id: "TX-2023-07-09-007",
    customer: "david.martinez@example.com",
    date: "2023-07-09T15:30:00",
    amount: 95.0,
    coin: "BTC",
    status: "success",
    method: "Lightning",
  },
  {
    id: "TX-2023-07-08-008",
    customer: "olivia.taylor@example.com",
    date: "2023-07-08T10:15:00",
    amount: 200.0,
    coin: "ETH",
    status: "pending",
    method: "On-chain",
  },
  {
    id: "TX-2023-07-07-009",
    customer: "james.anderson@example.com",
    date: "2023-07-07T09:50:00",
    amount: 150.0,
    coin: "USDT",
    status: "success",
    method: "On-chain",
  },
  {
    id: "TX-2023-07-06-010",
    customer: "emily.thomas@example.com",
    date: "2023-07-06T14:25:00",
    amount: 75.0,
    coin: "BTC",
    status: "failed",
    method: "Lightning",
  },
];

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
    default:
      return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">{status}</Badge>;
  }
}
