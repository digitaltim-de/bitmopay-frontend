"use client";

import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddWalletDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAddWallet: (walletAddress: string, coin: string) => void;
}

export function AddWalletDialog({ isOpen, onOpenChange, onAddWallet }: AddWalletDialogProps) {
  const [walletAddress, setWalletAddress] = useState("");
  const [coin, setCoin] = useState("BTC");

  const handleAddWallet = () => {
    onAddWallet(walletAddress, coin);
    setWalletAddress("");
    setCoin("BTC");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Wallet</DialogTitle>
          <DialogDescription>Add a new wallet address to receive payments</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="coin">Cryptocurrency</Label>
            <Select value={coin} onValueChange={setCoin}>
              <SelectTrigger>
                <SelectValue placeholder="Select coin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                <SelectItem value="USDT">Tether (USDT)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="address">Wallet Address</Label>
            <Input
              id="address"
              placeholder={`Enter your ${coin} wallet address`}
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
          </div>

          <div className="mt-2 flex items-start rounded-md border border-amber-200 bg-amber-50 p-4">
            <AlertCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
            <div>
              <h4 className="text-sm font-medium text-amber-800">Important</h4>
              <p className="mt-1 text-xs text-amber-700">
                Make sure you enter the correct wallet address. Transactions sent to incorrect
                addresses cannot be recovered.
              </p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleAddWallet} disabled={!walletAddress.trim()}>
            Add Wallet
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
