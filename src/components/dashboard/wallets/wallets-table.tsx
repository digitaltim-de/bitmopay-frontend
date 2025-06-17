"use client";

import { format } from "date-fns";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Repeat, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import { Wallet, formatAddress, getCoinIcon, getStatusBadge, getTypeBadge } from "./wallets-utils";

interface WalletsTableProps {
  wallets: Wallet[];
  onCopyAddress?: (address: string) => void;
}

export function WalletsTable({ wallets, onCopyAddress }: WalletsTableProps) {
  const [activeTab, setActiveTab] = useState<"all" | "auto" | "self">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter wallets based on active tab
  const filteredWallets = wallets.filter((wallet) => {
    if (activeTab === "all") return true;
    return wallet.type === activeTab;
  });

  // Paginate wallets
  const paginatedWallets = filteredWallets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const totalPages = Math.ceil(filteredWallets.length / itemsPerPage);

  // Handle copy wallet address
  const handleCopyAddress = (address: string) => {
    if (onCopyAddress) {
      onCopyAddress(address);
    } else {
      navigator.clipboard.writeText(address);
      toast({
        title: "Address copied",
        description: "Wallet address has been copied to clipboard",
      });
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Your Wallets</CardTitle>
        <CardDescription>View and manage all your cryptocurrency wallets</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="all"
          onValueChange={(value) => {
            setActiveTab(value as "all" | "auto" | "self");
            setCurrentPage(1); // Reset to first page when changing tab
          }}
        >
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
                      <TableCell className="flex items-center font-medium">
                        {getCoinIcon(wallet.coin)}
                        <span className="ml-2">{formatAddress(wallet.address)}</span>
                        {wallet.usedIn.length > 0 && (
                          <Badge variant="outline" className="ml-2">
                            <Repeat className="mr-1 h-3 w-3" />
                            In Use
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>{getTypeBadge(wallet.type)}</TableCell>
                      <TableCell>{wallet.coin}</TableCell>
                      <TableCell>{format(new Date(wallet.dateAdded), "MMM dd, yyyy")}</TableCell>
                      <TableCell>{getStatusBadge(wallet.status)}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center"
                          onClick={() => handleCopyAddress(wallet.address)}
                        >
                          <Copy className="mr-2 h-4 w-4" />
                          Copy
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center text-gray-500">
                      No wallets found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          {filteredWallets.length > 0 && (
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span>{" "}
                to{" "}
                <span className="font-medium">
                  {Math.min(currentPage * itemsPerPage, filteredWallets.length)}
                </span>{" "}
                of <span className="font-medium">{filteredWallets.length}</span> results
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
  );
}
