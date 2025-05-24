"use client";

import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Wallet, getCoinIcon, formatAddress } from "./payout-utils";

interface RequestPayoutDialogProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  currentBalance: number;
  minimumThreshold: number;
  wallets: Wallet[];
  payoutAmount: string;
  setPayoutAmount: (value: string) => void;
  selectedWalletId: string;
  setSelectedWalletId: (value: string) => void;
  onRequestPayout: () => void;
}

export function RequestPayoutDialog({
  isOpen,
  setIsOpen,
  currentBalance,
  minimumThreshold,
  wallets,
  payoutAmount,
  setPayoutAmount,
  selectedWalletId,
  setSelectedWalletId,
  onRequestPayout,
}: RequestPayoutDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request Payout</DialogTitle>
          <DialogDescription>Request a withdrawal of your earned funds</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="amount">Payout Amount (USD)</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                className="pl-8"
                value={payoutAmount}
                onChange={(e) => setPayoutAmount(e.target.value)}
                min={minimumThreshold}
                max={currentBalance}
                step="0.01"
              />
            </div>
            <p className="text-xs text-gray-500">Available balance: ${currentBalance.toFixed(2)}</p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="wallet">Destination Wallet</Label>
            <Select value={selectedWalletId} onValueChange={setSelectedWalletId}>
              <SelectTrigger>
                <SelectValue placeholder="Select a wallet" />
              </SelectTrigger>
              <SelectContent>
                {wallets.map((wallet) => (
                  <SelectItem key={wallet.id} value={wallet.id}>
                    <div className="flex items-center">
                      {getCoinIcon(wallet.coin)}
                      <span className="ml-2">{formatAddress(wallet.address)}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Alert className="mt-2 border-blue-200 bg-blue-50 text-blue-800">
            <Info className="h-4 w-4" />
            <AlertTitle>Processing Time</AlertTitle>
            <AlertDescription>
              Payouts are typically processed within 1-2 business days.
            </AlertDescription>
          </Alert>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={onRequestPayout} disabled={!payoutAmount || !selectedWalletId}>
            Request Payout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
