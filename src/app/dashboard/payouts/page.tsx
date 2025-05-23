"use client";

import { useState } from "react";
import {
  CircleDollarSign,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Wallet,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { format } from "date-fns";
import { toast } from "@/components/ui/use-toast";

// Mock data for wallets
const wallets = [
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

// Mock data for payouts
const payouts = [
  {
    id: "payout-001",
    date: "2023-07-15T10:30:00",
    amount: 250.00,
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
    amount: 175.50,
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
    amount: 120.00,
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
    amount: 300.00,
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
    amount: 150.00,
    status: "pending",
    wallet: {
      id: "wallet-005",
      address: "0x8Ba1f109551bD432803012645Ac136ddd64DBA72",
      coin: "ETH",
    },
  },
];

export default function PayoutsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isRequestPayoutOpen, setIsRequestPayoutOpen] = useState(false);
  const [payoutAmount, setPayoutAmount] = useState("");
  const [selectedWalletId, setSelectedWalletId] = useState("");
  
  // Mock current balance
  const currentBalance = 235.75;
  const minimumThreshold = 50;
  
  const itemsPerPage = 10;
  
  // Paginate payouts
  const paginatedPayouts = payouts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const totalPages = Math.ceil(payouts.length / itemsPerPage);
  
  // Handle request payout
  const handleRequestPayout = () => {
    // Validate payout amount
    const amount = parseFloat(payoutAmount);
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid payout amount",
        variant: "destructive",
      });
      return;
    }
    
    if (amount > currentBalance) {
      toast({
        title: "Insufficient balance",
        description: "Payout amount exceeds your current balance",
        variant: "destructive",
      });
      return;
    }
    
    if (amount < minimumThreshold) {
      toast({
        title: "Below minimum threshold",
        description: `Payout amount must be at least $${minimumThreshold}`,
        variant: "destructive",
      });
      return;
    }
    
    if (!selectedWalletId) {
      toast({
        title: "No wallet selected",
        description: "Please select a destination wallet",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would make an API call here
    console.log(`Requesting payout of $${amount} to wallet ${selectedWalletId}`);
    
    // Reset form and close dialog
    setPayoutAmount("");
    setSelectedWalletId("");
    setIsRequestPayoutOpen(false);
    
    toast({
      title: "Payout requested",
      description: "Your payout request has been submitted successfully",
    });
  };
  
  // Format wallet address for display (truncate middle)
  const formatAddress = (address: string) => {
    if (address.length <= 16) return address;
    return `${address.substring(0, 8)}...${address.substring(address.length - 8)}`;
  };
  
  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return (
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Paid
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        );
      default:
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
            {status}
          </Badge>
        );
    }
  };
  
  // Get coin icon
  const getCoinIcon = (coin: string) => {
    switch (coin) {
      case "BTC":
        return (
          <div className="h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
            ₿
          </div>
        );
      case "ETH":
        return (
          <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
            Ξ
          </div>
        );
      case "USDT":
        return (
          <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
            ₮
          </div>
        );
      default:
        return (
          <div className="h-6 w-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center">
            $
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto p-6">
      <section className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Payouts
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Request withdrawals of your earned funds
            </p>
          </div>
        </div>

        {/* Balance and Request Payout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Current Balance</CardTitle>
              <CardDescription>
                Your available balance for withdrawal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="mr-4 p-4 rounded-full bg-emerald-100 text-emerald-600">
                  <CircleDollarSign className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-3xl font-bold">${currentBalance.toFixed(2)}</div>
                  <div className="text-sm text-gray-500">Available for payout</div>
                </div>
              </div>
              
              {currentBalance < minimumThreshold && (
                <Alert className="mt-4 bg-amber-50 border-amber-200 text-amber-800">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Minimum Threshold Not Met</AlertTitle>
                  <AlertDescription>
                    You need a minimum balance of ${minimumThreshold} to request a payout. 
                    Your current balance is ${currentBalance.toFixed(2)}.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => setIsRequestPayoutOpen(true)}
                disabled={currentBalance < minimumThreshold}
                className="w-full sm:w-auto"
              >
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Request Payout
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Payout Information</CardTitle>
              <CardDescription>
                Important details about payouts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <div className="mr-3 p-2 rounded-full bg-blue-100 text-blue-600">
                  <Info className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Processing Time</h3>
                  <p className="text-xs text-gray-500">Payouts are typically processed within 1-2 business days.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 p-2 rounded-full bg-blue-100 text-blue-600">
                  <Info className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Minimum Amount</h3>
                  <p className="text-xs text-gray-500">The minimum payout amount is ${minimumThreshold}.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 p-2 rounded-full bg-blue-100 text-blue-600">
                  <Info className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Destination Wallets</h3>
                  <p className="text-xs text-gray-500">You can only withdraw to wallets that you have added to your account.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payout History */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Payout History</CardTitle>
            <CardDescription>
              View all your past and pending payouts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payout ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Wallet</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedPayouts.length > 0 ? (
                    paginatedPayouts.map((payout) => (
                      <TableRow key={payout.id}>
                        <TableCell className="font-medium">
                          {payout.id}
                        </TableCell>
                        <TableCell>
                          {format(new Date(payout.date), "MMM dd, yyyy")}
                        </TableCell>
                        <TableCell>${payout.amount.toFixed(2)}</TableCell>
                        <TableCell>{getStatusBadge(payout.status)}</TableCell>
                        <TableCell className="flex items-center">
                          {getCoinIcon(payout.wallet.coin)}
                          <span className="ml-2">{formatAddress(payout.wallet.address)}</span>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="h-24 text-center text-gray-500"
                      >
                        No payout history found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            
            {/* Pagination */}
            {payouts.length > 0 && (
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Showing{" "}
                  <span className="font-medium">
                    {(currentPage - 1) * itemsPerPage + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {Math.min(
                      currentPage * itemsPerPage,
                      payouts.length
                    )}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium">{payouts.length}</span>{" "}
                  results
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Request Payout Dialog */}
      <Dialog open={isRequestPayoutOpen} onOpenChange={setIsRequestPayoutOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Payout</DialogTitle>
            <DialogDescription>
              Request a withdrawal of your earned funds
            </DialogDescription>
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
              <p className="text-xs text-gray-500">
                Available balance: ${currentBalance.toFixed(2)}
              </p>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="wallet">Destination Wallet</Label>
              <Select
                value={selectedWalletId}
                onValueChange={setSelectedWalletId}
              >
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
            
            <Alert className="mt-2 bg-blue-50 border-blue-200 text-blue-800">
              <Info className="h-4 w-4" />
              <AlertTitle>Processing Time</AlertTitle>
              <AlertDescription>
                Payouts are typically processed within 1-2 business days.
              </AlertDescription>
            </Alert>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsRequestPayoutOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleRequestPayout}
              disabled={!payoutAmount || !selectedWalletId}
            >
              Request Payout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}