"use client";

import { useState } from "react";
import {
  CreditCard,
  Download,
  Search,
  Filter,
  Copy,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Calendar,
  X,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";

// Mock data for payments
const payments = [
  {
    id: "TX-2023-07-15-001",
    customer: "john.doe@example.com",
    date: "2023-07-15T10:30:00",
    amount: 250.00,
    coin: "BTC",
    status: "success",
    method: "Lightning",
  },
  {
    id: "TX-2023-07-14-002",
    customer: "alice.smith@example.com",
    date: "2023-07-14T14:45:00",
    amount: 75.50,
    coin: "ETH",
    status: "success",
    method: "On-chain",
  },
  {
    id: "TX-2023-07-13-003",
    customer: "bob.johnson@example.com",
    date: "2023-07-13T09:15:00",
    amount: 120.00,
    coin: "USDT",
    status: "pending",
    method: "On-chain",
  },
  {
    id: "TX-2023-07-12-004",
    customer: "emma.wilson@example.com",
    date: "2023-07-12T16:20:00",
    amount: 300.00,
    coin: "BTC",
    status: "success",
    method: "Lightning",
  },
  {
    id: "TX-2023-07-11-005",
    customer: "michael.brown@example.com",
    date: "2023-07-11T11:05:00",
    amount: 50.00,
    coin: "ETH",
    status: "failed",
    method: "On-chain",
  },
  {
    id: "TX-2023-07-10-006",
    customer: "sophia.garcia@example.com",
    date: "2023-07-10T13:40:00",
    amount: 180.00,
    coin: "USDT",
    status: "success",
    method: "On-chain",
  },
  {
    id: "TX-2023-07-09-007",
    customer: "david.martinez@example.com",
    date: "2023-07-09T15:30:00",
    amount: 95.00,
    coin: "BTC",
    status: "success",
    method: "Lightning",
  },
  {
    id: "TX-2023-07-08-008",
    customer: "olivia.taylor@example.com",
    date: "2023-07-08T10:15:00",
    amount: 200.00,
    coin: "ETH",
    status: "pending",
    method: "On-chain",
  },
  {
    id: "TX-2023-07-07-009",
    customer: "james.anderson@example.com",
    date: "2023-07-07T09:50:00",
    amount: 150.00,
    coin: "USDT",
    status: "success",
    method: "On-chain",
  },
  {
    id: "TX-2023-07-06-010",
    customer: "emily.thomas@example.com",
    date: "2023-07-06T14:25:00",
    amount: 75.00,
    coin: "BTC",
    status: "failed",
    method: "Lightning",
  },
];

export default function PaymentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [coinFilter, setCoinFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const itemsPerPage = 10;

  // Filter payments based on search query, status, and coin
  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.customer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus =
      statusFilter === "all" || payment.status === statusFilter;
    
    const matchesCoin =
      coinFilter === "all" || payment.coin === coinFilter;
    
    const matchesDateRange =
      !dateRange.from ||
      !dateRange.to ||
      (new Date(payment.date) >= dateRange.from &&
        new Date(payment.date) <= dateRange.to);

    return matchesSearch && matchesStatus && matchesCoin && matchesDateRange;
  });

  // Paginate payments
  const paginatedPayments = filteredPayments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);

  // Handle payment details view
  const handleViewDetails = (payment: any) => {
    setSelectedPayment(payment);
    setIsDrawerOpen(true);
  };

  // Handle copy transaction ID
  const handleCopyTxId = (txId: string) => {
    navigator.clipboard.writeText(txId);
    // You could add a toast notification here
  };

  // Handle export to CSV
  const handleExportCSV = () => {
    // Implementation for exporting to CSV
    console.log("Exporting to CSV...");
  };

  // Handle date range selection
  const handleDateRangeSelect = (range: any) => {
    setDateRange(range);
    if (range.to) {
      setIsCalendarOpen(false);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setCoinFilter("all");
    setDateRange({ from: undefined, to: undefined });
  };

  // Get status badge color
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return (
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
            Success
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
            Pending
          </Badge>
        );
      case "failed":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
            Failed
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

  return (
    <div className="container mx-auto p-6">
      <section className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Payments
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Manage and track all your payment transactions
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
            <CardTitle>Payment Transactions</CardTitle>
            <CardDescription>
              View all processed payments with detailed information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by email or transaction ID"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center justify-between w-full sm:w-auto"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {dateRange.from ? (
                        dateRange.to ? (
                          <>
                            {format(dateRange.from, "LLL dd, y")} -{" "}
                            {format(dateRange.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(dateRange.from, "LLL dd, y")
                        )
                      ) : (
                        "Date Range"
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      initialFocus
                      mode="range"
                      defaultMonth={dateRange.from}
                      selected={dateRange}
                      onSelect={handleDateRangeSelect}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>

                <Select
                  value={statusFilter}
                  onValueChange={setStatusFilter}
                >
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="success">Success</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={coinFilter}
                  onValueChange={setCoinFilter}
                >
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <SelectValue placeholder="Coin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Coins</SelectItem>
                    <SelectItem value="BTC">Bitcoin</SelectItem>
                    <SelectItem value="ETH">Ethereum</SelectItem>
                    <SelectItem value="USDT">USDT</SelectItem>
                  </SelectContent>
                </Select>

                {(searchQuery || statusFilter !== "all" || coinFilter !== "all" || dateRange.from) && (
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
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Coin</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedPayments.length > 0 ? (
                    paginatedPayments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">
                          {payment.id}
                        </TableCell>
                        <TableCell>{payment.customer}</TableCell>
                        <TableCell>
                          {format(new Date(payment.date), "MMM dd, yyyy HH:mm")}
                        </TableCell>
                        <TableCell>${payment.amount.toFixed(2)}</TableCell>
                        <TableCell>{payment.coin}</TableCell>
                        <TableCell>{getStatusBadge(payment.status)}</TableCell>
                        <TableCell>{payment.method}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleCopyTxId(payment.id)}
                              title="Copy Transaction ID"
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleViewDetails(payment)}
                              title="View Details"
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
                        colSpan={8}
                        className="h-24 text-center text-gray-500"
                      >
                        No payments found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            {filteredPayments.length > 0 && (
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
                      filteredPayments.length
                    )}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium">{filteredPayments.length}</span>{" "}
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

      {/* Payment Details Drawer */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Payment Details</DrawerTitle>
            <DrawerDescription>
              Detailed information about the selected payment
            </DrawerDescription>
          </DrawerHeader>
          {selectedPayment && (
            <div className="px-4 py-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Transaction ID</h3>
                  <p className="text-base font-semibold flex items-center">
                    {selectedPayment.id}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 ml-2"
                      onClick={() => handleCopyTxId(selectedPayment.id)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Status</h3>
                  <p>{getStatusBadge(selectedPayment.status)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Customer</h3>
                  <p className="text-base font-semibold">{selectedPayment.customer}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Date & Time</h3>
                  <p className="text-base font-semibold">
                    {format(new Date(selectedPayment.date), "PPpp")}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Amount</h3>
                  <p className="text-base font-semibold">${selectedPayment.amount.toFixed(2)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Coin</h3>
                  <p className="text-base font-semibold">{selectedPayment.coin}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Payment Method</h3>
                  <p className="text-base font-semibold">{selectedPayment.method}</p>
                </div>
              </div>

              <div className="mt-6 border-t pt-4">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Payment Timeline</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-4 w-4 rounded-full bg-emerald-500 mt-1"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Payment Initiated</p>
                      <p className="text-xs text-gray-500">
                        {format(new Date(selectedPayment.date), "PPp")}
                      </p>
                    </div>
                  </div>
                  {selectedPayment.status === "success" && (
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-4 w-4 rounded-full bg-emerald-500 mt-1"></div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Payment Confirmed</p>
                        <p className="text-xs text-gray-500">
                          {format(
                            new Date(
                              new Date(selectedPayment.date).getTime() + 10 * 60000
                            ),
                            "PPp"
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedPayment.status === "pending" && (
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-4 w-4 rounded-full bg-yellow-500 mt-1"></div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Awaiting Confirmation</p>
                        <p className="text-xs text-gray-500">
                          {format(
                            new Date(
                              new Date(selectedPayment.date).getTime() + 5 * 60000
                            ),
                            "PPp"
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedPayment.status === "failed" && (
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-4 w-4 rounded-full bg-red-500 mt-1"></div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Payment Failed</p>
                        <p className="text-xs text-gray-500">
                          {format(
                            new Date(
                              new Date(selectedPayment.date).getTime() + 5 * 60000
                            ),
                            "PPp"
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <DrawerFooter>
            <Button variant="outline" onClick={() => setIsDrawerOpen(false)}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}