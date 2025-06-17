"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SubscriptionsFilter } from "./subscriptions-filter";
import { SubscriptionsTable } from "./subscriptions-table";
import { SubscriptionsPagination } from "./subscriptions-pagination";
import { Subscription } from "./subscriptions-utils";

interface SubscriptionsCardProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  clearFilters: () => void;
  paginatedSubscriptions: Subscription[];
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
  onViewDetails: (subscription: Subscription) => void;
}

export function SubscriptionsCard({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  clearFilters,
  paginatedSubscriptions,
  currentPage,
  totalItems,
  itemsPerPage,
  setCurrentPage,
  onViewDetails,
}: SubscriptionsCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Subscription Management</CardTitle>
        <CardDescription>View and manage all your recurring subscribers</CardDescription>
      </CardHeader>
      <CardContent>
        <SubscriptionsFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          clearFilters={clearFilters}
        />

        <SubscriptionsTable subscriptions={paginatedSubscriptions} onViewDetails={onViewDetails} />

        {/* Pagination */}
        {totalItems > 0 && (
          <SubscriptionsPagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </CardContent>
    </Card>
  );
}
