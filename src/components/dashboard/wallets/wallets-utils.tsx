"use client";

import { Badge } from "@/components/ui/badge";

// Define Wallet type
export interface Wallet {
  id: string;
  address: string;
  type: string;
  coin: string;
  dateAdded: string;
  status: string;
  usedIn: string[];
}

// Mock data for wallets
export const wallets: Wallet[] = [
  {
    id: "wallet-001",
    address: "bc1q9h5ksxm3u2zk262qrm5tpszjlhgv6j5qjwere3",
    type: "auto",
    coin: "BTC",
    dateAdded: "2023-05-15T10:30:00",
    status: "active",
    usedIn: ["checkout-btc-001"],
  },
  {
    id: "wallet-002",
    address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    type: "auto",
    coin: "ETH",
    dateAdded: "2023-05-20T14:45:00",
    status: "active",
    usedIn: ["subscription-eth-001"],
  },
  {
    id: "wallet-003",
    address: "TJRyTwKAFVS6sYPbnfLDXnYLCUEJnD9Ckx",
    type: "auto",
    coin: "USDT",
    dateAdded: "2023-06-10T09:15:00",
    status: "active",
    usedIn: [],
  },
  {
    id: "wallet-004",
    address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    type: "self",
    coin: "BTC",
    dateAdded: "2023-04-12T16:20:00",
    status: "active",
    usedIn: ["checkout-btc-002", "subscription-btc-001"],
  },
  {
    id: "wallet-005",
    address: "0x8Ba1f109551bD432803012645Ac136ddd64DBA72",
    type: "self",
    coin: "ETH",
    dateAdded: "2023-04-25T11:05:00",
    status: "active",
    usedIn: [],
  },
  {
    id: "wallet-006",
    address: "TVuTV9bQZY2hSQ9DRxeHw6LiKG4mJj3Bfw",
    type: "self",
    coin: "USDT",
    dateAdded: "2023-05-05T13:40:00",
    status: "inactive",
    usedIn: [],
  },
  {
    id: "wallet-007",
    address: "bc1qm34lsc65zpw79lxes69zkqmk6ee3ewf0j77s3h",
    type: "auto",
    coin: "BTC",
    dateAdded: "2023-06-20T15:30:00",
    status: "active",
    usedIn: [],
  },
  {
    id: "wallet-008",
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    type: "self",
    coin: "ETH",
    dateAdded: "2023-03-18T10:15:00",
    status: "active",
    usedIn: ["checkout-eth-001"],
  },
];

// Get status badge
export const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Active</Badge>;
    case "inactive":
      return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Inactive</Badge>;
    default:
      return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">{status}</Badge>;
  }
};

// Get type badge
export const getTypeBadge = (type: string) => {
  switch (type) {
    case "auto":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Auto</Badge>;
    case "self":
      return (
        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Self-Hosted</Badge>
      );
    default:
      return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">{type}</Badge>;
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

// Format wallet address for display (truncate middle)
export const formatAddress = (address: string) => {
  if (address.length <= 16) return address;
  return `${address.substring(0, 8)}...${address.substring(address.length - 8)}`;
};
