"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomersHeader } from "@/components/dashboard/customers/customers-header";
import { FilterSection } from "@/components/dashboard/customers/filter-section";
import { CustomersTable } from "@/components/dashboard/customers/customers-table";
import { Pagination } from "@/components/dashboard/customers/pagination";
import { CustomerDetails } from "@/components/dashboard/customers/customer-details";
import {
  Customer,
  getStatusBadge,
  getInitials,
} from "@/components/dashboard/customers/customer-utils";

// Mock data for customers
const customers: Customer[] = [
  {
    id: "CUST-001",
    email: "john.doe@example.com",
    firstSeen: "2023-01-15T10:30:00",
    lastPayment: "2023-07-15T10:30:00",
    totalVolume: 750.0,
    coin: "BTC",
    country: "United States",
    transactions: [
      {
        id: "TX-001",
        date: "2023-07-15T10:30:00",
        amount: 250.0,
        coin: "BTC",
        status: "success",
      },
      {
        id: "TX-002",
        date: "2023-06-15T10:30:00",
        amount: 250.0,
        coin: "BTC",
        status: "success",
      },
      {
        id: "TX-003",
        date: "2023-05-15T10:30:00",
        amount: 250.0,
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
        amount: 250.0,
        coin: "BTC",
      },
    ],
  },
  {
    id: "CUST-002",
    email: "alice.smith@example.com",
    firstSeen: "2023-02-20T14:45:00",
    lastPayment: "2023-07-14T14:45:00",
    totalVolume: 275.5,
    coin: "ETH",
    country: "Canada",
    transactions: [
      {
        id: "TX-004",
        date: "2023-07-14T14:45:00",
        amount: 75.5,
        coin: "ETH",
        status: "success",
      },
      {
        id: "TX-005",
        date: "2023-06-14T14:45:00",
        amount: 100.0,
        coin: "ETH",
        status: "success",
      },
      {
        id: "TX-006",
        date: "2023-05-14T14:45:00",
        amount: 100.0,
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
      },
    ],
  },
  {
    id: "CUST-003",
    email: "bob.johnson@example.com",
    firstSeen: "2023-03-13T09:15:00",
    lastPayment: "2023-07-13T09:15:00",
    totalVolume: 120.0,
    coin: "USDT",
    country: "United Kingdom",
    transactions: [
      {
        id: "TX-007",
        date: "2023-07-13T09:15:00",
        amount: 120.0,
        coin: "USDT",
        status: "pending",
      },
    ],
    subscriptions: [],
  },
  {
    id: "CUST-004",
    email: "emma.wilson@example.com",
    firstSeen: "2023-01-12T16:20:00",
    lastPayment: "2023-07-12T16:20:00",
    totalVolume: 900.0,
    coin: "BTC",
    country: "Australia",
    transactions: [
      {
        id: "TX-008",
        date: "2023-07-12T16:20:00",
        amount: 300.0,
        coin: "BTC",
        status: "success",
      },
      {
        id: "TX-009",
        date: "2023-06-12T16:20:00",
        amount: 300.0,
        coin: "BTC",
        status: "success",
      },
      {
        id: "TX-010",
        date: "2023-05-12T16:20:00",
        amount: 300.0,
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
        amount: 300.0,
        coin: "BTC",
      },
    ],
  },
  {
    id: "CUST-005",
    email: "michael.brown@example.com",
    firstSeen: "2023-04-11T11:05:00",
    lastPayment: "2023-07-11T11:05:00",
    totalVolume: 50.0,
    coin: "ETH",
    country: "Germany",
    transactions: [
      {
        id: "TX-011",
        date: "2023-07-11T11:05:00",
        amount: 50.0,
        coin: "ETH",
        status: "failed",
      },
    ],
    subscriptions: [],
  },
  {
    id: "CUST-006",
    email: "sophia.garcia@example.com",
    firstSeen: "2023-02-10T13:40:00",
    lastPayment: "2023-07-10T13:40:00",
    totalVolume: 540.0,
    coin: "USDT",
    country: "Spain",
    transactions: [
      {
        id: "TX-012",
        date: "2023-07-10T13:40:00",
        amount: 180.0,
        coin: "USDT",
        status: "success",
      },
      {
        id: "TX-013",
        date: "2023-06-10T13:40:00",
        amount: 180.0,
        coin: "USDT",
        status: "success",
      },
      {
        id: "TX-014",
        date: "2023-05-10T13:40:00",
        amount: 180.0,
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
      },
    ],
  },
  {
    id: "CUST-007",
    email: "david.martinez@example.com",
    firstSeen: "2023-05-09T15:30:00",
    lastPayment: "2023-07-09T15:30:00",
    totalVolume: 285.0,
    coin: "BTC",
    country: "Mexico",
    transactions: [
      {
        id: "TX-015",
        date: "2023-07-09T15:30:00",
        amount: 95.0,
        coin: "BTC",
        status: "success",
      },
      {
        id: "TX-016",
        date: "2023-06-09T15:30:00",
        amount: 95.0,
        coin: "BTC",
        status: "success",
      },
      {
        id: "TX-017",
        date: "2023-05-09T15:30:00",
        amount: 95.0,
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
        amount: 95.0,
        coin: "BTC",
      },
    ],
  },
  {
    id: "CUST-008",
    email: "olivia.taylor@example.com",
    firstSeen: "2022-12-08T10:15:00",
    lastPayment: "2023-07-08T10:15:00",
    totalVolume: 1400.0,
    coin: "ETH",
    country: "France",
    transactions: [
      {
        id: "TX-018",
        date: "2023-07-08T10:15:00",
        amount: 200.0,
        coin: "ETH",
        status: "pending",
      },
      {
        id: "TX-019",
        date: "2023-06-08T10:15:00",
        amount: 200.0,
        coin: "ETH",
        status: "success",
      },
      {
        id: "TX-020",
        date: "2023-05-08T10:15:00",
        amount: 200.0,
        coin: "ETH",
        status: "success",
      },
      {
        id: "TX-021",
        date: "2023-04-08T10:15:00",
        amount: 200.0,
        coin: "ETH",
        status: "success",
      },
      {
        id: "TX-022",
        date: "2023-03-08T10:15:00",
        amount: 200.0,
        coin: "ETH",
        status: "success",
      },
      {
        id: "TX-023",
        date: "2023-02-08T10:15:00",
        amount: 200.0,
        coin: "ETH",
        status: "success",
      },
      {
        id: "TX-024",
        date: "2023-01-08T10:15:00",
        amount: 200.0,
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
      },
    ],
  },
  {
    id: "CUST-009",
    email: "james.anderson@example.com",
    firstSeen: "2023-03-07T09:50:00",
    lastPayment: "2023-07-07T09:50:00",
    totalVolume: 450.0,
    coin: "USDT",
    country: "Italy",
    transactions: [
      {
        id: "TX-025",
        date: "2023-07-07T09:50:00",
        amount: 150.0,
        coin: "USDT",
        status: "success",
      },
      {
        id: "TX-026",
        date: "2023-06-07T09:50:00",
        amount: 150.0,
        coin: "USDT",
        status: "success",
      },
      {
        id: "TX-027",
        date: "2023-05-07T09:50:00",
        amount: 150.0,
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
        amount: 150.0,
        coin: "USDT",
      },
    ],
  },
  {
    id: "CUST-010",
    email: "emily.thomas@example.com",
    firstSeen: "2023-04-06T14:25:00",
    lastPayment: "2023-07-06T14:25:00",
    totalVolume: 75.0,
    coin: "BTC",
    country: "Japan",
    transactions: [
      {
        id: "TX-028",
        date: "2023-07-06T14:25:00",
        amount: 75.0,
        coin: "BTC",
        status: "failed",
      },
    ],
    subscriptions: [],
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
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const itemsPerPage = 10;

  // Filter customers based on search query, coin, country, and date
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCoin = coinFilter === "all" || customer.coin === coinFilter;

    const matchesCountry = countryFilter === "All Countries" || customer.country === countryFilter;

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
    currentPage * itemsPerPage,
  );

  // Handle customer details view
  const handleViewDetails = (customer: Customer) => {
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

  return (
    <div className="p-4 lg:p-6">
      <section className="mb-6">
        <CustomersHeader handleExportCSV={handleExportCSV} />

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Customer Relationship Management</CardTitle>
            <CardDescription>
              View and manage all your customers and their transactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FilterSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              coinFilter={coinFilter}
              setCoinFilter={setCoinFilter}
              countryFilter={countryFilter}
              setCountryFilter={setCountryFilter}
              dateFilter={dateFilter}
              setDateFilter={setDateFilter}
              isCalendarOpen={isCalendarOpen}
              setIsCalendarOpen={setIsCalendarOpen}
              handleDateRangeSelect={handleDateRangeSelect}
              clearFilters={clearFilters}
              countries={countries}
            />

            <CustomersTable
              paginatedCustomers={paginatedCustomers}
              handleViewDetails={handleViewDetails}
            />

            {/* Pagination */}
            {filteredCustomers.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalItems={filteredCustomers.length}
                itemsPerPage={itemsPerPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </CardContent>
        </Card>
      </section>

      <CustomerDetails
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        selectedCustomer={selectedCustomer}
        getInitials={getInitials}
        getStatusBadge={getStatusBadge}
      />
    </div>
  );
}
