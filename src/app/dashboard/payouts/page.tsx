"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { PayoutsHeader } from "@/components/dashboard/payouts/payouts-header";
import { BalanceCard } from "@/components/dashboard/payouts/balance-card";
import { PayoutInfoCard } from "@/components/dashboard/payouts/payout-info-card";
import { PayoutsTable } from "@/components/dashboard/payouts/payouts-table";
import { Pagination } from "@/components/dashboard/payouts/pagination";
import { RequestPayoutDialog } from "@/components/dashboard/payouts/request-payout-dialog";
import { payouts, wallets } from "@/components/dashboard/payouts/payout-utils";

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
    currentPage * itemsPerPage,
  );

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

  // Open payout request dialog
  const openPayoutRequest = () => {
    setIsRequestPayoutOpen(true);
  };

  return (
    <div className="p-4 lg:p-6">
      <section className="mb-6">
        <PayoutsHeader />

        {/* Balance and Information Cards */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <BalanceCard
            currentBalance={currentBalance}
            minimumThreshold={minimumThreshold}
            onRequestPayout={openPayoutRequest}
          />

          <PayoutInfoCard minimumThreshold={minimumThreshold} />
        </div>

        {/* Payout History */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Payout History</CardTitle>
            <CardDescription>View all your past and pending payouts</CardDescription>
          </CardHeader>
          <CardContent>
            <PayoutsTable paginatedPayouts={paginatedPayouts} />

            {/* Pagination */}
            {payouts.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalItems={payouts.length}
                itemsPerPage={itemsPerPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </CardContent>
        </Card>
      </section>

      {/* Request Payout Dialog */}
      <RequestPayoutDialog
        isOpen={isRequestPayoutOpen}
        setIsOpen={setIsRequestPayoutOpen}
        currentBalance={currentBalance}
        minimumThreshold={minimumThreshold}
        wallets={wallets}
        payoutAmount={payoutAmount}
        setPayoutAmount={setPayoutAmount}
        selectedWalletId={selectedWalletId}
        setSelectedWalletId={setSelectedWalletId}
        onRequestPayout={handleRequestPayout}
      />
    </div>
  );
}
