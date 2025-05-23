"use client";

import { useState } from "react";
import {
  Download,
  Search,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Users,
  Calendar,
  Globe,
  Filter,
  CreditCard,
  Repeat,
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
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Mock data for customers
const customers = [
  {
    id: "CUST-001",
    email: "john.doe@example.com",
    firstSeen: "2023-01-15T10:30:00",
    lastPayment: "2023-07-15T10:30:00",
    totalVolume: 750.00,
    coin: "BTC",
    country: "United States",
    transactions: [
      {
        id: "TX-001",
        date: "2023-07-15T10:30:00",
        amount: 250.00,
        coin: "BTC",
        status: "success",
      },
      {
        id: "TX-002",
        date: "2023-06-15T10:30:00",
        amount: 250.00,
        coin: "BTC",
        status: "success",
      },
      {
        id: "TX-003",
        date: "2023-05-15T10:30:00",
        amount: 250.00,
        coin: "BTC",
        status: "success",
      },
    ],
    subscriptions: [
      {
        id: "SUB-001",
        plan: "Premium Monthly",
        startDate: "2023-05-15T10:30:00",
        nextBilling: "2023-08-15T10:30:00",
        status: "active",
        amount: 250.00,
        coin: "BTC",
      }
    ]
  },
  {
    id: "CUST-002",
    email: "alice.smith@example.com",
    firstSeen: "2023-02-20T14:45:00",
    lastPayment: "2023-07-14T14:45:00",
    totalVolume: 275.50,
    coin: "ETH",
    country: "Canada",
    transactions: [
      {
        id: "TX-004",
        date: "2023-07-14T14:45:00",
        amount: 75.50,
        coin: "ETH",
        status: "success",
      },
      {
        id: "TX-005",
        date: "2023-06-14T14:45:00",
        amount: 100.00,
        coin: "ETH",
        status: "success",
      },
      {
        id: "TX-006",
        date: "2023-05-14T14:45:00",
        amount: 100.00,
        coin: "ETH",
        status: "success",
      },
    ],
    subscriptions: [
      {
        id: "SUB-002",
        plan: "Basic Annual",
        startDate: "2023-05-14T14:45:00",
        nextBilling: "2024-05-14T14:45:00",
        status: "active",
        amount: 199.99,
        coin: "ETH",
      }
    ]
  },
  {
    id: "CUST-003",
    email: "bob.johnson@example.com",
    firstSeen: "2023-03-13T09:15:00",
    lastPayment: "2023-07-13T09:15:00",
    totalVolume: 120.00,
    coin: "USDT",
    country: "United Kingdom",
    transactions: [
      {
        id: "TX-007",
        date: "2023-07-13T09:15:00",
        amount: 120.00,
        coin: "USDT",
        status: "pending",
      }
    ],
    subscriptions: []
  },
  {
    id: "CUST-004",
    email: "emma.wilson@example.com",
    firstSeen: "2023-01-12T16:20:00",
    lastPayment: "2023-07-12T16:20:00",
    totalVolume: 900.00,
    coin: "BTC",
    country: "Australia",
    transactions: [
      {
        id: "TX-008",
        date: "2023-07-12T16:20:00",
        amount: 300.00,
        coin: "BTC",
        status: "success",
      },
      {
        id: "TX-009",
        date: "2023-06-12T16:20:00",
        amount: 300.00,
        coin: "BTC",
        status: "success",
      },
      {
        id: "TX-010",
        date: "2023-05-12T16:20:00",
        amount: 300.00,
        coin: "BTC",
        status: "success",
      },
    ],
    subscriptions: [
      {
        id: "SUB-003",
        plan: "Enterprise Monthly",
        startDate: "2023-04-12T16:20:00",
        nextBilling: "2023-08-12T16:20:00",
        status: "active",
        amount: 300.00,
        coin: "BTC",
      }
    ]
  },
  {
    id: "CUST-005",
    email: "michael.brown@example.com",
    firstSeen: "2023-04-11T11:05:00",
    lastPayment: "2023-07-11T11:05:00",
    totalVolume: 50.00,
    coin: "ETH",
    country: "Germany",
    transactions: [
      {
        id: "TX-011",
        date: "2023-07-11T11:05:00",
        amount: 50.00,
        coin: "ETH",
        status: "failed",
      }
    ],
    subscriptions: []
  },
  {
    id: "CUST-006",
    email: "sophia.garcia@example.com",
    firstSeen: "2023-02-10T13:40:00",
    lastPayment: "2023-07-10T13:40:00",
    totalVolume: 540.00,
    coin: "USDT",
    country: "Spain",
    transactions: [
      {
        id: "TX-012",
        date: "2023-07-10T13:40:00",
        amount: 180.00,
        coin: "USDT",
        status: "success",
      },
      {
        id: "TX-013",
        date: "2023-06-10T13:40:00",
        amount: 180.00,
        coin: "USDT",
        status: "success",
      },
      {
        id: "TX-014",
        date: "2023-05-10T13:40:00",
        amount: 180.00,
        coin: "USDT",
        status: "success",
      },
    ],
    subscriptions: [
      {
        id: "SUB-004",
        plan: "Premium Annual",
        startDate: "2023-01-10T13:40:00",
        nextBilling: "2024-01-10T13:40:00",
        status: "active",
        amount: 499.99,
        coin: "USDT",
      }
    ]
  },
  {
    id: "CUST-007",
    email: "david.martinez@example.com",
    firstSeen: "2023-05-09T15:30:00",
    lastPayment: "2023-07-09T15:30:00",
    totalVolume: 285.00,
    coin: "BTC",
    country: "Mexico",
    transactions: [
      {
        id: "TX-015",
        date: "2023-07-09T15:30:00",
        amount: 95.00,
        coin: "BTC",
        status: "success",
      },
      {
        id: "TX-016",
        date: "2023-06-09T15:30:00",
        amount: 95.00,
        coin: "BTC",
        status: "success",
      },
      {
        id: "TX-017",
        date: "2023-05-09T15:30:00",
        amount: 95.00,
        coin: "BTC",
        status: "success",
      },
    ],
    subscriptions: [
      {
        id: "SUB-005",
        plan: "Basic Monthly",
        startDate: "2023-05-09T15:30:00",
        nextBilling: "2023-08-09T15:30:00",
        status: "active",
        amount: 95.00,
        coin: "BTC",
      }
    ]
  },
  {
    id: "CUST-008",
    email: "olivia.taylor@example.com",
    firstSeen: "2022-12-08T10:15:00",
    lastPayment: "2023-07-08T10:15:00",
    totalVolume: 1400.00,
    coin: "ETH",
    country: "France",
    transactions: [
      {
        id: "TX-018",
        date: "2023-07-08T10:15:00",
        amount: 200.00,
        coin: "ETH",
        status: "pending",
      },
      {
        id: "TX-019",
        date: "2023-06-08T10:15:00",
        amount: 200.00,
        coin: "ETH",
        status: "success",
      },
      {
        id: "TX-020",
        date: "2023-05-08T10:15:00",
        amount: 200.00,
        coin: "ETH",
        status: "success",
      },
      {
        id: "TX-021",
        date: "2023-04-08T10:15:00",
        amount: 200.00,
        coin: "ETH",
        status: "success",
      },
      {
        id: "TX-022",
        date: "2023-03-08T10:15:00",
        amount: 200.00,
        coin: "ETH",
        status: "success",
      },
      {
        id: "TX-023",
        date: "2023-02-08T10:15:00",
        amount: 200.00,
        coin: "ETH",
        status: "success",
      },
      {
        id: "TX-024",
        date: "2023-01-08T10:15:00",
        amount: 200.00,
        coin: "ETH",
        status: "success",
      },
    ],
    subscriptions: [
      {
        id: "SUB-006",
        plan: "Enterprise Annual",
        startDate: "2022-12-08T10:15:00",
        nextBilling: "2023-12-08T10:15:00",
        status: "active",
        amount: 999.99,
        coin: "ETH",
      }
    ]
  },
  {
    id: "CUST-009",
    email: "james.anderson@example.com",
    firstSeen: "2023-03-07T09:50:00",
    lastPayment: "2023-07-07T09:50:00",
    totalVolume: 450.00,
    coin: "USDT",
    country: "Italy",
    transactions: [
      {
        id: "TX-025",
        date: "2023-07-07T09:50:00",
        amount: 150.00,
        coin: "USDT",
        status: "success",
      },
      {
        id: "TX-026",
        date: "2023-06-07T09:50:00",
        amount: 150.00,
        coin: "USDT",
        status: "success",
      },
      {
        id: "TX-027",
        date: "2023-05-07T09:50:00",
        amount: 150.00,
        coin: "USDT",
        status: "success",
      },
    ],
    subscriptions: [
      {
        id: "SUB-007",
        plan: "Premium Monthly",
        startDate: "2023-05-07T09:50:00",
        nextBilling: "2023-08-07T09:50:00",
        status: "active",
        amount: 150.00,
        coin: "USDT",
      }
    ]
  },
  {
    id: "CUST-010",
    email: "emily.thomas@example.com",
    firstSeen: "2023-04-06T14:25:00",
    lastPayment: "2023-07-06T14:25:00",
    totalVolume: 75.00,
    coin: "BTC",
    country: "Japan",
    transactions: [
      {
        id: "TX-028",
        date: "2023-07-06T14:25:00",
        amount: 75.00,
        coin: "BTC",
        status: "failed",
      }
    ],
    subscriptions: []
  },
];

// List of countries for filter
const countries = [
  "All Countries",
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "Spain",
  "Mexico",
  "France",
  "Italy",
  "Japan",
];

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [coinFilter, setCoinFilter] = useState("all");
  const [countryFilter, setCountryFilter] = useState("All Countries");
  const [dateFilter, setDateFilter] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const itemsPerPage = 10;

  // Filter customers based on search query, coin, country, and date
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCoin =
      coinFilter === "all" || customer.coin === coinFilter;
    
    const matchesCountry =
      countryFilter === "All Countries" || customer.country === countryFilter;
    
    const matchesDate =
      !dateFilter.from ||
      !dateFilter.to ||
      (new Date(customer.firstSeen) >= dateFilter.from &&
        new Date(customer.firstSeen) <= dateFilter.to);

    return matchesSearch && matchesCoin && matchesCountry && matchesDate;
  });

  // Paginate customers
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

  // Handle customer details view
  const handleViewDetails = (customer: any) => {
    setSelectedCustomer(customer);
    setIsDrawerOpen(true);
  };

  // Handle export to CSV
  const handleExportCSV = () => {
    // Implementation for exporting to CSV
    console.log("Exporting to CSV...");
  };

  // Handle date range selection
  const handleDateRangeSelect = (range: any) => {
    setDateFilter(range);
    if (range.to) {
      setIsCalendarOpen(false);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setCoinFilter("all");
    setCountryFilter("All Countries");
    setDateFilter({ from: undefined, to: undefined });
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
      case "active":
        return (
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
            Active
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
              Customers
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Manage and track all your customer relationships
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
            <CardTitle>Customer Relationship Management</CardTitle>
            <CardDescription>
              View and manage all your customers and their transactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by email or customer ID"
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
                      {dateFilter.from ? (
                        dateFilter.to ? (
                          <>
                            {format(dateFilter.from, "LLL dd, y")} -{" "}
                            {format(dateFilter.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(dateFilter.from, "LLL dd, y")
                        )
                      ) : (
                        "Date Joined"
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      initialFocus
                      mode="range"
                      defaultMonth={dateFilter.from}
                      selected={dateFilter}
                      onSelect={handleDateRangeSelect}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>

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

                <Select
                  value={countryFilter}
                  onValueChange={setCountryFilter}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {(searchQuery || coinFilter !== "all" || countryFilter !== "All Countries" || dateFilter.from) && (
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
                    <TableHead>Customer ID</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>First Seen</TableHead>
                    <TableHead>Last Payment</TableHead>
                    <TableHead>Total Volume</TableHead>
                    <TableHead>Coin</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedCustomers.length > 0 ? (
                    paginatedCustomers.map((customer) => (
                      <TableRow key={customer.id}>
                        <TableCell className="font-medium">
                          {customer.id}
                        </TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>
                          {format(new Date(customer.firstSeen), "MMM dd, yyyy")}
                        </TableCell>
                        <TableCell>
                          {format(new Date(customer.lastPayment), "MMM dd, yyyy")}
                        </TableCell>
                        <TableCell>${customer.totalVolume.toFixed(2)}</TableCell>
                        <TableCell>{customer.coin}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center"
                            onClick={() => handleViewDetails(customer)}
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
                        No customers found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            {filteredCustomers.length > 0 && (
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
                      filteredCustomers.length
                    )}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium">{filteredCustomers.length}</span>{" "}
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

      {/* Customer Details Drawer */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Customer Details</DrawerTitle>
            <DrawerDescription>
              Detailed information about the selected customer
            </DrawerDescription>
          </DrawerHeader>
          
          {selectedCustomer && (
            <div className="px-4 py-2">
              <div className="flex items-center mb-6">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarFallback className="bg-emerald-100 text-emerald-700">
                    {getInitials(selectedCustomer.email)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{selectedCustomer.email}</h3>
                  <p className="text-sm text-gray-500">
                    Customer since {format(new Date(selectedCustomer.firstSeen), "MMMM dd, yyyy")}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Customer ID</div>
                  <div className="text-lg font-semibold">{selectedCustomer.id}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Total Volume</div>
                  <div className="text-lg font-semibold">${selectedCustomer.totalVolume.toFixed(2)}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Country</div>
                  <div className="text-lg font-semibold flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-gray-400" />
                    {selectedCustomer.country}
                  </div>
                </div>
              </div>

              <Tabs defaultValue="transactions">
                <TabsList className="mb-4">
                  <TabsTrigger value="transactions" className="flex items-center">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Transactions
                  </TabsTrigger>
                  <TabsTrigger value="subscriptions" className="flex items-center">
                    <Repeat className="h-4 w-4 mr-2" />
                    Subscriptions
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="transactions">
                  {selectedCustomer.transactions.length > 0 ? (
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Transaction ID</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Coin</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {selectedCustomer.transactions.map((transaction: any) => (
                            <TableRow key={transaction.id}>
                              <TableCell className="font-medium">{transaction.id}</TableCell>
                              <TableCell>
                                {format(new Date(transaction.date), "MMM dd, yyyy HH:mm")}
                              </TableCell>
                              <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                              <TableCell>{transaction.coin}</TableCell>
                              <TableCell>
                                {getStatusBadge(transaction.status)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <CreditCard className="mx-auto h-12 w-12 text-gray-300 mb-3" />
                      <p>No transactions found for this customer</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="subscriptions">
                  {selectedCustomer.subscriptions.length > 0 ? (
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Subscription ID</TableHead>
                            <TableHead>Plan</TableHead>
                            <TableHead>Start Date</TableHead>
                            <TableHead>Next Billing</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {selectedCustomer.subscriptions.map((subscription: any) => (
                            <TableRow key={subscription.id}>
                              <TableCell className="font-medium">{subscription.id}</TableCell>
                              <TableCell>{subscription.plan}</TableCell>
                              <TableCell>
                                {format(new Date(subscription.startDate), "MMM dd, yyyy")}
                              </TableCell>
                              <TableCell>
                                {format(new Date(subscription.nextBilling), "MMM dd, yyyy")}
                              </TableCell>
                              <TableCell>${subscription.amount.toFixed(2)}</TableCell>
                              <TableCell>
                                {getStatusBadge(subscription.status)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Repeat className="mx-auto h-12 w-12 text-gray-300 mb-3" />
                      <p>No active subscriptions found for this customer</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
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