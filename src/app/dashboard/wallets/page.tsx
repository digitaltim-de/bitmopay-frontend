"use client";

import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

import { WalletsHeader } from "@/components/dashboard/wallets/wallets-header";
import { WalletModeCard } from "@/components/dashboard/wallets/wallet-mode-card";
import { WalletsSummaryCards } from "@/components/dashboard/wallets/wallets-summary-cards";
import { WalletsTable } from "@/components/dashboard/wallets/wallets-table";
import { AddWalletDialog } from "@/components/dashboard/wallets/add-wallet-dialog";
import { wallets } from "@/components/dashboard/wallets/wallets-utils";

export default function WalletsPage() {
  const [walletMode, setWalletMode] = useState<"auto" | "manual">("auto");
  const [isAddWalletOpen, setIsAddWalletOpen] = useState(false);

  // Count wallets by type
  const autoWalletsCount = wallets.filter((wallet) => wallet.type === "auto").length;
  const selfWalletsCount = wallets.filter((wallet) => wallet.type === "self").length;

  // Handle wallet mode toggle
  const handleWalletModeChange = (checked: boolean) => {
    setWalletMode(checked ? "manual" : "auto");

    toast({
      title: `Wallet mode: ${checked ? "Manual" : "Auto"}`,
      description: checked
        ? "You'll need to add wallets manually"
        : "System will automatically assign wallets",
    });
  };

  // Handle add new wallet
  const handleAddWallet = (walletAddress: string, coin: string) => {
    // In a real app, you would make an API call here
    console.log(`Adding new ${coin} wallet: ${walletAddress}`);

    setIsAddWalletOpen(false);

    toast({
      title: "Wallet added",
      description: "Your new wallet has been added successfully",
    });
  };

  // Handle copy address
  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    toast({
      title: "Address copied",
      description: "Wallet address has been copied to clipboard",
    });
  };

  return (
    <div className="container mx-auto p-6">
      <section className="mb-6">
        {/* Wallets Header */}
        <WalletsHeader onAddWallet={() => setIsAddWalletOpen(true)} />

        {/* Wallet Mode Card */}
        <WalletModeCard walletMode={walletMode} onWalletModeChange={handleWalletModeChange} />

        {/* Wallets Summary Cards */}
        <WalletsSummaryCards
          totalWallets={wallets.length}
          autoWalletsCount={autoWalletsCount}
          selfWalletsCount={selfWalletsCount}
        />

        {/* Wallets Table */}
        <WalletsTable wallets={wallets} onCopyAddress={handleCopyAddress} />
      </section>

      {/* Add Wallet Dialog */}
      <AddWalletDialog
        isOpen={isAddWalletOpen}
        onOpenChange={setIsAddWalletOpen}
        onAddWallet={handleAddWallet}
      />
    </div>
  );
}
