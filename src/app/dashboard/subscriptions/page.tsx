"use client";

import { useState } from "react";
import {
  Download,
  Search,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Repeat,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { format } from "date-fns";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Mock data for subscriptions
const subscriptions = [
  {
    id: "SUB-001",
    email: "john.doe@example.com",
    plan: "Premium Monthly",
    startDate: "2023-06-15T10:30:00",
    nextBilling: "2023-07-15T10:30:00",
    coin: "BTC",
    status: "active",
    amount: 49.99,
    paymentMethod: "Lightning",
    transactions: [
      {
        id: "TX-001",
        date: "2023-06-15T10:30:00",
        amount: 49.99,
        status: "success",
      },
    ],
  },
  {
    id: "SUB-002",
    email: "alice.smith@example.com",
    plan: "Basic Annual",
    startDate: "2023-05-20T14:45:00",
    nextBilling: "2024-05-20T14:45:00",
    coin: "ETH",
    status: "active",
    amount: 199.99,
    paymentMethod: "On-chain",
    transactions: [
      {
        id: "TX-002",
        date: "2023-05-20T14:45:00",
        amount: 199.99,
        status: "success",
      },
    ],
  },
  {
    id: "SUB-003",
    email: "bob.johnson@example.com",
    plan: "Premium Monthly",
    startDate: "2023-07-01T09:15:00",
    nextBilling: "2023-08-01T09:15:00",
    coin: "USDT",
    status: "trial",
    amount: 0,
    paymentMethod: "On-chain",
    transactions: [],
  },
  {
    id: "SUB-004",
    email: "emma.wilson@example.com",
    plan: "Enterprise Monthly",
    startDate: "2023-04-12T16:20:00",
    nextBilling: "2023-07-12T16:20:00",
    coin: "BTC",
    status: "active",
    amount: 99.99,
    paymentMethod: "Lightning",
    transactions: [
      {
        id: "TX-004-1",
        date: "2023-04-12T16:20:00",
        amount: 99.99,
        status: "success",
      },
      {
        id: "TX-004-2",
        date: "2023-05-12T16:20:00",
        amount: 99.99,
        status: "success",
      },
      {
        id: "TX-004-3",
        date: "2023-06-12T16:20:00",
        amount: 99.99,
        status: "success",
      },
    ],
  },
  {
    id: "SUB-005",
    email: "michael.brown@example.com",
    plan: "Basic Monthly",
    startDate: "2023-06-11T11:05:00",
    nextBilling: "2023-07-11T11:05:00",
    coin: "ETH",
    status: "cancelled",
    amount: 19.99,
    paymentMethod: "On-chain",
    transactions: [
      {
        id: "TX-005",
        date: "2023-06-11T11:05:00",
        amount: 19.99,
        status: "success",
      },
    ],
    cancelledDate: "2023-06-25T15:30:00",
    cancellationReason: "Found a better alternative",
  },
  {
    id: "SUB-006",
    email: "sophia.garcia@example.com",
    plan: "Premium Annual",
    startDate: "2023-01-10T13:40:00",
    nextBilling: "2024-01-10T13:40:00",
    coin: "USDT",
    status: "active",
    amount: 499.99,
    paymentMethod: "On-chain",
    transactions: [
      {
        id: "TX-006",
        date: "2023-01-10T13:40:00",
        amount: 499.99,
        status: "success",
      },
    ],
  },
  {
    id: "SUB-007",
    email: "david.martinez@example.com",
    plan: "Basic Monthly",
    startDate: "2023-07-05T15:30:00",
    nextBilling: "2023-08-05T15:30:00",
    coin: "BTC",
    status: "trial",
    amount: 0,
    paymentMethod: "Lightning",
    transactions: [],
  },
  {
    id: "SUB-008",
    email: "olivia.taylor@example.com",
    plan: "Enterprise Annual",
    startDate: "2022-12-08T10:15:00",
    nextBilling: "2023-12-08T10:15:00",
    coin: "ETH",
    status: "active",
    amount: 999.99,
    paymentMethod: "On-chain",
    transactions: [
      {
        id: "TX-008",
        date: "2022-12-08T10:15:00",
        amount: 999.99,
        status: "success",
      },
    ],
  },
  {
    id: "SUB-009",
    email: "james.anderson@example.com",
    plan: "Premium Monthly",
    startDate: "2023-05-07T09:50:00",
    nextBilling: "2023-07-07T09:50:00",
    coin: "USDT",
    status: "active",
    amount: 49.99,
    paymentMethod: "On-chain",
    transactions: [
      {
        id: "TX-009-1",
        date: "2023-05-07T09:50:00",
        amount: 49.99,
        status: "success",
      },
      {
        id: "TX-009-2",
        date: "2023-06-07T09:50:00",
        amount: 49.99,
        status: "success",
      },
    ],
  },
  {
    id: "SUB-010",
    email: "emily.thomas@example.com",
    plan: "Basic Monthly",
    startDate: "2023-06-06T14:25:00",
    nextBilling: "2023-07-06T14:25:00",
    coin: "BTC",
    status: "cancelled",
    amount: 19.99,
    paymentMethod: "Lightning",
    transactions: [
      {
        id: "TX-010",
        date: "2023-06-06T14:25:00",
        amount: 19.99,
        status: "success",
      },
    ],
    cancelledDate: "2023-06-20T11:45:00",
    cancellationReason: "Too expensive",
  },
];

export default function SubscriptionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSubscription, setSelectedSubscription] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [cancelReason, setCancelReason] = useState("");

  const itemsPerPage = 10;

  // Filter subscriptions based on search query and status
  const filteredSubscriptions = subscriptions.filter((subscription) => {
    const matchesSearch = subscription.email
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    
    const matchesStatus =
      statusFilter === "all" || subscription.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Paginate subscriptions
  const paginatedSubscriptions = filteredSubscriptions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredSubscriptions.length / itemsPerPage);

  // Handle subscription details view
  const handleViewDetails = (subscription: any) => {
    setSelectedSubscription(subscription);
    setIsDialogOpen(true);
  };

  // Handle export to CSV
  const handleExportCSV = () => {
    // Implementation for exporting to CSV
    console.log("Exporting to CSV...");
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
  };

  // Handle cancel subscription
  const handleCancelSubscription = () => {
    // In a real app, you would make an API call here
    console.log(`Cancelling subscription ${selectedSubscription?.id} with reason: ${cancelReason}`);
    setCancelDialogOpen(false);
    
    // For demo purposes, we'll just close the dialog
    // In a real app, you would update the subscription status after successful API call
  };

  // Get status badge color
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
            Active
          </Badge>
        );
      case "trial":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
            Trial
          </Badge>
        );
      case "cancelled":
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
            Cancelled
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

  // Get initials for avatar
  const getInitials = (email: string) => {
    const parts = email.split('@')[0].split('.');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return email.substring(0, 2).toUpperCase();
  };

  return (
    <div className="container mx-auto p-6">
      <section className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Subscriptions
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Manage your recurring subscribers and subscription plans
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button
              onClick={handleExportCSV}
              variant="outline"
              className="flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Export to CSV
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Subscription Management</CardTitle>
            <CardDescription>
              View and manage all your recurring subscribers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by email"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Select
                  value={statusFilter}
                  onValueChange={setStatusFilter}
                >
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="trial">Trial</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>

                {(searchQuery || statusFilter !== "all") && (
                  <Button
                    variant="ghost"
                    onClick={clearFilters}
                    className="flex items-center"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Clear
                  </Button>
                )}
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Next Billing</TableHead>
                    <TableHead>Coin</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedSubscriptions.length > 0 ? (
                    paginatedSubscriptions.map((subscription) => (
                      <TableRow key={subscription.id}>
                        <TableCell className="font-medium">
                          {subscription.email}
                        </TableCell>
                        <TableCell>{subscription.plan}</TableCell>
                        <TableCell>
                          {format(new Date(subscription.startDate), "MMM dd, yyyy")}
                        </TableCell>
                        <TableCell>
                          {subscription.status !== "cancelled" 
                            ? format(new Date(subscription.nextBilling), "MMM dd, yyyy")
                            : "—"}
                        </TableCell>
                        <TableCell>{subscription.coin}</TableCell>
                        <TableCell>{getStatusBadge(subscription.status)}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center"
                            onClick={() => handleViewDetails(subscription)}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={7}
                        className="h-24 text-center text-gray-500"
                      >
                        No subscriptions found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            {filteredSubscriptions.length > 0 && (
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
                      filteredSubscriptions.length
                    )}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium">{filteredSubscriptions.length}</span>{" "}
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

      {/* Subscription Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Subscription Details</DialogTitle>
            <DialogDescription>
              Detailed information about the selected subscription
            </DialogDescription>
          </DialogHeader>
          
          {selectedSubscription && (
            <div className="mt-4">
              <div className="flex items-center mb-6">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarFallback className="bg-emerald-100 text-emerald-700">
                    {getInitials(selectedSubscription.email)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{selectedSubscription.email}</h3>
                  <p className="text-sm text-gray-500">
                    Subscribed since {format(new Date(selectedSubscription.startDate), "MMMM dd, yyyy")}
                  </p>
                </div>
                <div className="ml-auto">
                  {selectedSubscription.status === "active" && (
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => setCancelDialogOpen(true)}
                    >
                      <XCircle className="mr-2 h-4 w-4" />
                      Cancel Subscription
                    </Button>
                  )}
                </div>
              </div>

              <Tabs defaultValue="details">
                <TabsList className="mb-4">
                  <TabsTrigger value="details">Subscription Details</TabsTrigger>
                  <TabsTrigger value="transactions">Transaction History</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-500">Subscription ID</p>
                      <p className="font-medium">{selectedSubscription.id}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-500">Status</p>
                      <p>{getStatusBadge(selectedSubscription.status)}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-500">Plan</p>
                      <p className="font-medium">{selectedSubscription.plan}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-500">Amount</p>
                      <p className="font-medium">${selectedSubscription.amount.toFixed(2)}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-500">Payment Method</p>
                      <p className="font-medium">{selectedSubscription.paymentMethod}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-500">Coin</p>
                      <p className="font-medium">{selectedSubscription.coin}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-500">Start Date</p>
                      <p className="font-medium">
                        {format(new Date(selectedSubscription.startDate), "MMMM dd, yyyy")}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-500">Next Billing Date</p>
                      <p className="font-medium">
                        {selectedSubscription.status !== "cancelled" 
                          ? format(new Date(selectedSubscription.nextBilling), "MMMM dd, yyyy")
                          : "—"}
                      </p>
                    </div>
                    
                    {selectedSubscription.status === "cancelled" && (
                      <>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-gray-500">Cancelled Date</p>
                          <p className="font-medium">
                            {format(new Date(selectedSubscription.cancelledDate), "MMMM dd, yyyy")}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-gray-500">Cancellation Reason</p>
                          <p className="font-medium">{selectedSubscription.cancellationReason}</p>
                        </div>
                      </>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="transactions">
                  {selectedSubscription.transactions.length > 0 ? (
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Transaction ID</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {selectedSubscription.transactions.map((transaction: any) => (
                            <TableRow key={transaction.id}>
                              <TableCell className="font-medium">{transaction.id}</TableCell>
                              <TableCell>
                                {format(new Date(transaction.date), "MMM dd, yyyy HH:mm")}
                              </TableCell>
                              <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                              <TableCell>
                                <Badge className="bg-emerald-100 text-emerald-800">
                                  {transaction.status}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Repeat className="mx-auto h-12 w-12 text-gray-300 mb-3" />
                      <p>No transactions found for this subscription</p>
                      {selectedSubscription.status === "trial" && (
                        <p className="mt-1 text-sm">This subscription is currently in trial period</p>
                      )}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Cancel Subscription Dialog */}
      <Dialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel Subscription</DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel this subscription? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reason for cancellation
            </label>
            <Input
              placeholder="Please provide a reason"
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
            />
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setCancelDialogOpen(false)}>
              Keep Subscription
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleCancelSubscription}
              disabled={!cancelReason.trim()}
            >
              Cancel Subscription
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}