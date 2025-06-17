"use client";

import { Shield, Wallet } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface WalletModeCardProps {
  walletMode: "auto" | "manual";
  onWalletModeChange: (checked: boolean) => void;
}

export function WalletModeCard({ walletMode, onWalletModeChange }: WalletModeCardProps) {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle>Wallet Management Mode</CardTitle>
        <CardDescription>Choose how you want to manage your cryptocurrency wallets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <div className="mb-4 flex items-center space-x-4 md:mb-0">
            <div
              className={`rounded-full p-3
                ${walletMode === "auto" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"}`}
            >
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h3
                className={`font-medium ${walletMode === "auto" ? "text-blue-600" : "text-gray-700"}`}
              >
                Auto Mode
              </h3>
              <p className="text-sm text-gray-500">
                System automatically assigns wallets for each coin
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span
              className={`text-sm font-medium ${walletMode === "auto" ? "text-blue-600" : "text-gray-500"}`}
            >
              Auto
            </span>
            <Switch checked={walletMode === "manual"} onCheckedChange={onWalletModeChange} />
            <span
              className={`text-sm font-medium ${walletMode === "manual" ? "text-purple-600" : "text-gray-500"}`}
            >
              Manual
            </span>
          </div>

          <div className="mt-4 flex items-center space-x-4 md:mt-0">
            <div
              className={`rounded-full p-3
                ${walletMode === "manual" ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-500"}`}
            >
              <Wallet className="h-6 w-6" />
            </div>
            <div>
              <h3
                className={`font-medium ${walletMode === "manual" ? "text-purple-600" : "text-gray-700"}`}
              >
                Manual Mode
              </h3>
              <p className="text-sm text-gray-500">You add and manage your own wallets</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
