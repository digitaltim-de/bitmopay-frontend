"use client";

import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { SubscriptionsHeader } from "@/components/dashboard/subscriptions/subscriptions-header";
import { SubscriptionsCard } from "@/components/dashboard/subscriptions/subscriptions-card";
import { SubscriptionDetailsDialog } from "@/components/dashboard/subscriptions/subscription-details-dialog";
import { CancelSubscriptionDialog } from "@/components/dashboard/subscriptions/cancel-subscription-dialog";
import {
  Subscription,
  subscriptions,
} from "@/components/dashboard/subscriptions/subscriptions-utils";

export default function SubscriptionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSubscription, setSelectedSubscription] = useState<Subscription | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [cancelReason, setCancelReason] = useState("");

  const itemsPerPage = 10;

  // Filter subscriptions based on search query and status
  const filteredSubscriptions = subscriptions.filter((subscription) => {
    const matchesSearch = subscription.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || subscription.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Paginate subscriptions
  const paginatedSubscriptions = filteredSubscriptions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Handle subscription details view
  const handleViewDetails = (subscription: Subscription) => {
    setSelectedSubscription(subscription);
    setIsDialogOpen(true);
  };

  // Handle export to CSV
  const handleExportCSV = () => {
    // Implementation for exporting to CSV
    console.log("Exporting to CSV...");

    toast({
      title: "Export started",
      description: "Your data is being exported to CSV",
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
  };

  // Open cancel subscription dialog
  const handleCancelRequest = () => {
    setCancelDialogOpen(true);
  };

  // Handle cancel subscription
  const handleCancelSubscription = () => {
    // In a real app, you would make an API call here
    console.log(`Cancelling subscription ${selectedSubscription?.id} with reason: ${cancelReason}`);

    // Close dialogs
    setCancelDialogOpen(false);
    setIsDialogOpen(false);

    // Show success message
    toast({
      title: "Subscription cancelled",
      description: "The subscription has been cancelled successfully",
    });
  };

  return (
    <div className="container mx-auto p-6">
      <section className="mb-6">
        <SubscriptionsHeader onExportCSV={handleExportCSV} />

        <SubscriptionsCard
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          clearFilters={clearFilters}
          paginatedSubscriptions={paginatedSubscriptions}
          currentPage={currentPage}
          totalItems={filteredSubscriptions.length}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          onViewDetails={handleViewDetails}
        />
      </section>

      <SubscriptionDetailsDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        subscription={selectedSubscription}
        onCancelRequest={handleCancelRequest}
      />

      <CancelSubscriptionDialog
        isOpen={cancelDialogOpen}
        setIsOpen={setCancelDialogOpen}
        cancelReason={cancelReason}
        setCancelReason={setCancelReason}
        onConfirm={handleCancelSubscription}
      />
    </div>
  );
}
