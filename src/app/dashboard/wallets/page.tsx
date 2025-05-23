"use client";

import { useState } from "react";
import {
  Wallet,
  Plus,
  Copy,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  AlertCircle,
  Shield,
  Repeat,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

export default function WalletsPage() {
  const [walletMode, setWalletMode] = useState<"auto" | "manual">("auto");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddWalletOpen, setIsAddWalletOpen] = useState(false);
  const [newWalletAddress, setNewWalletAddress] = useState("");
  const [newWalletCoin, setNewWalletCoin] = useState("BTC");
  const [activeTab, setActiveTab] = useState<"all" | "auto" | "self">("all");
  
  const itemsPerPage = 10;
  
  // Filter wallets based on active tab and wallet mode
  const filteredWallets = wallets.filter((wallet) => {
    if (activeTab === "all") return true;
    return wallet.type === activeTab;
  });
  
  // Paginate wallets
  const paginatedWallets = filteredWallets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const totalPages = Math.ceil(filteredWallets.length / itemsPerPage);
  
  // Count wallets by type
  const autoWalletsCount = wallets.filter(wallet => wallet.type === "auto").length;
  const selfWalletsCount = wallets.filter(wallet => wallet.type === "self").length;
  
  // Handle copy address
  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    toast({
      title: "Address copied",
      description: "Wallet address has been copied to clipboard",
    });
  };
  
  // Handle add new wallet
  const handleAddWallet = () => {
    // In a real app, you would make an API call here
    console.log(`Adding new ${newWalletCoin} wallet: ${newWalletAddress}`);
    
    // Reset form and close dialog
    setNewWalletAddress("");
    setNewWalletCoin("BTC");
    setIsAddWalletOpen(false);
    
    toast({
      title: "Wallet added",
      description: "Your new wallet has been added successfully",
    });
  };
  
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
  
  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
            Active
          </Badge>
        );
      case "inactive":
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
            Inactive
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
  
  // Get type badge
  const getTypeBadge = (type: string) => {
    switch (type) {
      case "auto":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
            Auto
          </Badge>
        );
      case "self":
        return (
          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
            Self-Hosted
          </Badge>
        );
      default:
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
            {type}
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
  
  // Format wallet address for display (truncate middle)
  const formatAddress = (address: string) => {
    if (address.length <= 16) return address;
    return `${address.substring(0, 8)}...${address.substring(address.length - 8)}`;
  };

  return (
    <div className="container mx-auto p-6">
      <section className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Wallets
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Manage your cryptocurrency wallets for receiving payments
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button
              onClick={() => setIsAddWalletOpen(true)}
              className="flex items-center"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add New Wallet
            </Button>
          </div>
        </div>

        {/* Wallet Mode Toggle */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle>Wallet Management Mode</CardTitle>
            <CardDescription>
              Choose how you want to manage your cryptocurrency wallets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className={`p-3 rounded-full ${walletMode === "auto" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"}`}>
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className={`font-medium ${walletMode === "auto" ? "text-blue-600" : "text-gray-700"}`}>Auto Mode</h3>
                  <p className="text-sm text-gray-500">System automatically assigns wallets for each coin</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${walletMode === "auto" ? "text-blue-600" : "text-gray-500"}`}>Auto</span>
                <Switch 
                  checked={walletMode === "manual"}
                  onCheckedChange={handleWalletModeChange}
                />
                <span className={`text-sm font-medium ${walletMode === "manual" ? "text-purple-600" : "text-gray-500"}`}>Manual</span>
              </div>
              
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className={`p-3 rounded-full ${walletMode === "manual" ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-500"}`}>
                  <Wallet className="h-6 w-6" />
                </div>
                <div>
                  <h3 className={`font-medium ${walletMode === "manual" ? "text-purple-600" : "text-gray-700"}`}>Manual Mode</h3>
                  <p className="text-sm text-gray-500">You add and manage your own wallets</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wallet Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Wallets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="mr-4 p-3 rounded-full bg-emerald-100 text-emerald-600">
                  <Wallet className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{wallets.length}</div>
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
                <div className="mr-4 p-3 rounded-full bg-blue-100 text-blue-600">
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
                <div className="mr-4 p-3 rounded-full bg-purple-100 text-purple-600">
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

        {/* Wallets Table */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Your Wallets</CardTitle>
            <CardDescription>
              View and manage all your cryptocurrency wallets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value as "all" | "auto" | "self")}>
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Wallets</TabsTrigger>
                <TabsTrigger value="auto">Auto Wallets</TabsTrigger>
                <TabsTrigger value="self">Self-Hosted</TabsTrigger>
              </TabsList>
              
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Address</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Coin</TableHead>
                      <TableHead>Date Added</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedWallets.length > 0 ? (
                      paginatedWallets.map((wallet) => (
                        <TableRow key={wallet.id}>
                          <TableCell className="font-medium flex items-center">
                            {getCoinIcon(wallet.coin)}
                            <span className="ml-2">{formatAddress(wallet.address)}</span>
                            {wallet.usedIn.length > 0 && (
                              <Badge variant="outline" className="ml-2">
                                <Repeat className="h-3 w-3 mr-1" />
                                In Use
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>{getTypeBadge(wallet.type)}</TableCell>
                          <TableCell>{wallet.coin}</TableCell>
                          <TableCell>
                            {format(new Date(wallet.dateAdded), "MMM dd, yyyy")}
                          </TableCell>
                          <TableCell>{getStatusBadge(wallet.status)}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleCopyAddress(wallet.address)}
                                title="Copy Address"
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => window.open(`https://blockchain.com/explorer/addresses/${wallet.coin.toLowerCase()}/${wallet.address}`, '_blank')}
                                title="View on Blockchain"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          className="h-24 text-center text-gray-500"
                        >
                          No wallets found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
              
              {/* Pagination */}
              {filteredWallets.length > 0 && (
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
                        filteredWallets.length
                      )}
                    </span>{" "}
                    of{" "}
                    <span className="font-medium">{filteredWallets.length}</span>{" "}
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
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Add Wallet Dialog */}
      <Dialog open={isAddWalletOpen} onOpenChange={setIsAddWalletOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Wallet</DialogTitle>
            <DialogDescription>
              Add a new wallet address to receive payments
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="coin">Cryptocurrency</Label>
              <Select
                value={newWalletCoin}
                onValueChange={setNewWalletCoin}
              >
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
                placeholder={`Enter your ${newWalletCoin} wallet address`}
                value={newWalletAddress}
                onChange={(e) => setNewWalletAddress(e.target.value)}
              />
            </div>
            
            <div className="bg-amber-50 p-4 rounded-md border border-amber-200 flex items-start mt-2">
              <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-amber-800">Important</h4>
                <p className="text-xs text-amber-700 mt-1">
                  Make sure you enter the correct wallet address. Transactions sent to incorrect addresses cannot be recovered.
                </p>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddWalletOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleAddWallet}
              disabled={!newWalletAddress.trim()}
            >
              Add Wallet
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}