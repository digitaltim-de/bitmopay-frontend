"use client";

import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock } from "lucide-react";

// Type definitions
export interface Wallet {
  id: string;
  address: string;
  type: string;
  coin: string;
  dateAdded: string;
  status: string;
}

export interface Payout {
  id: string;
  date: string;
  amount: number;
  status: string;
  wallet: {
    id: string;
    address: string;
    coin: string;
  };
}

// Sample data for wallets
export const wallets: Wallet[] = [
  {
    id: "wallet-001",
    address: "bc1q9h5ksxm3u2zk262qrm5tpszjlhgv6j5qjwere3",
    type: "auto",
    coin: "BTC",
    dateAdded: "2023-05-15T10:30:00",
    status: "active",
  },
  {
    id: "wallet-002",
    address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    type: "auto",
    coin: "ETH",
    dateAdded: "2023-05-20T14:45:00",
    status: "active",
  },
  {
    id: "wallet-004",
    address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    type: "self",
    coin: "BTC",
    dateAdded: "2023-04-12T16:20:00",
    status: "active",
  },
  {
    id: "wallet-005",
    address: "0x8Ba1f109551bD432803012645Ac136ddd64DBA72",
    type: "self",
    coin: "ETH",
    dateAdded: "2023-04-25T11:05:00",
    status: "active",
  },
];

// Sample data for payouts
export const payouts: Payout[] = [
  {
    id: "payout-001",
    date: "2023-07-15T10:30:00",
    amount: 250.0,
    status: "paid",
    wallet: {
      id: "wallet-001",
      address: "bc1q9h5ksxm3u2zk262qrm5tpszjlhgv6j5qjwere3",
      coin: "BTC",
    },
  },
  {
    id: "payout-002",
    date: "2023-07-01T14:45:00",
    amount: 175.5,
    status: "paid",
    wallet: {
      id: "wallet-002",
      address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      coin: "ETH",
    },
  },
  {
    id: "payout-003",
    date: "2023-06-15T09:15:00",
    amount: 120.0,
    status: "paid",
    wallet: {
      id: "wallet-001",
      address: "bc1q9h5ksxm3u2zk262qrm5tpszjlhgv6j5qjwere3",
      coin: "BTC",
    },
  },
  {
    id: "payout-004",
    date: "2023-06-01T16:20:00",
    amount: 300.0,
    status: "paid",
    wallet: {
      id: "wallet-004",
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      coin: "BTC",
    },
  },
  {
    id: "payout-005",
    date: "2023-07-20T11:05:00",
    amount: 150.0,
    status: "pending",
    wallet: {
      id: "wallet-005",
      address: "0x8Ba1f109551bD432803012645Ac136ddd64DBA72",
      coin: "ETH",
    },
  },
];

// Format wallet address for display (truncate middle)
export const formatAddress = (address: string) => {
  if (address.length <= 16) return address;
  return `${address.substring(0, 8)}...${address.substring(address.length - 8)}`;
};

// Get status badge
export const getStatusBadge = (status: string) => {
  switch (status) {
    case "paid":
      return (
        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
          <CheckCircle2 className="mr-1 h-3 w-3" />
          Paid
        </Badge>
      );
    case "pending":
      return (
        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
          <Clock className="mr-1 h-3 w-3" />
          Pending
        </Badge>
      );
    default:
      return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">{status}</Badge>;
  }
};

// Get coin icon
export const getCoinIcon = (coin: string) => {
  switch (coin) {
    case "BTC":
      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600">
          ₿
        </div>
      );
    case "ETH":
      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          Ξ
        </div>
      );
    case "USDT":
      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
          ₮
        </div>
      );
    default:
      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-600">
          $
        </div>
      );
  }
};
