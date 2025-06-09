"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PaymentsHeader } from "@/components/dashboard/payments/payments-header";
import { PaymentFilter } from "@/components/dashboard/payments/payment-filter";
import { PaymentsTable } from "@/components/dashboard/payments/payments-table";
import { Pagination } from "@/components/dashboard/payments/pagination";
import { PaymentDetails } from "@/components/dashboard/payments/payment-details";
import { Payment, payments, getStatusBadge } from "@/components/dashboard/payments/payment-utils";

export default function PaymentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [coinFilter, setCoinFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
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

  // Filter payments based on search query, status, coin, and date
  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.customer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || payment.status === statusFilter;

    const matchesCoin = coinFilter === "all" || payment.coin === coinFilter;

    const matchesDateRange =
      !dateRange.from ||
      !dateRange.to ||
      (new Date(payment.date) >= dateRange.from && new Date(payment.date) <= dateRange.to);

    return matchesSearch && matchesStatus && matchesCoin && matchesDateRange;
  });

  // Paginate payments
  const paginatedPayments = filteredPayments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Handle payment details view
  const handleViewDetails = (payment: Payment) => {
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

  return (
    <div className="p-4 lg:p-6">
      <section className="mb-6">
        <PaymentsHeader handleExportCSV={handleExportCSV} />

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Payment Transactions</CardTitle>
            <CardDescription>View all processed payments with detailed information</CardDescription>
          </CardHeader>
          <CardContent>
            <PaymentFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              coinFilter={coinFilter}
              setCoinFilter={setCoinFilter}
              dateRange={dateRange}
              isCalendarOpen={isCalendarOpen}
              setIsCalendarOpen={setIsCalendarOpen}
              handleDateRangeSelect={handleDateRangeSelect}
              clearFilters={clearFilters}
            />

            <PaymentsTable
              paginatedPayments={paginatedPayments}
              handleViewDetails={handleViewDetails}
              handleCopyTxId={handleCopyTxId}
              getStatusBadge={getStatusBadge}
            />

            {/* Pagination */}
            {filteredPayments.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalItems={filteredPayments.length}
                itemsPerPage={itemsPerPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </CardContent>
        </Card>
      </section>

      <PaymentDetails
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        selectedPayment={selectedPayment}
        handleCopyTxId={handleCopyTxId}
        getStatusBadge={getStatusBadge}
      />
    </div>
  );
}
