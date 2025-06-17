"use client";

import { Wallet, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WalletsSummaryCardsProps {
  totalWallets: number;
  autoWalletsCount: number;
  selfWalletsCount: number;
}

export function WalletsSummaryCards({
  totalWallets,
  autoWalletsCount,
  selfWalletsCount,
}: WalletsSummaryCardsProps) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Total Wallets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <div className="mr-4 rounded-full bg-emerald-100 p-3 text-emerald-600">
              <Wallet className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">{totalWallets}</div>
              <div className="text-sm text-gray-500">Active wallets</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Auto Wallets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <div className="mr-4 rounded-full bg-blue-100 p-3 text-blue-600">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">{autoWalletsCount}</div>
              <div className="text-sm text-gray-500">System-assigned wallets</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Self-Hosted Wallets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <div className="mr-4 rounded-full bg-purple-100 p-3 text-purple-600">
              <Wallet className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">{selfWalletsCount}</div>
              <div className="text-sm text-gray-500">User-added wallets</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
