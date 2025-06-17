"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WalletsHeaderProps {
  onAddWallet: () => void;
}

export function WalletsHeader({ onAddWallet }: WalletsHeaderProps) {
  return (
    <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Wallets</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your cryptocurrency wallets for receiving payments
        </p>
      </div>
      <div className="mt-4 md:mt-0">
        <Button onClick={onAddWallet} className="flex items-center">
          <Plus className="mr-2 h-4 w-4" />
          Add New Wallet
        </Button>
      </div>
    </div>
  );
}
