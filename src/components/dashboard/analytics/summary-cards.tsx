"use client";

import { CreditCard, Repeat, TrendingUp } from "lucide-react";
import { SummaryCard } from "./summary-card";

interface SummaryCardsProps {
  totalPaymentVolume: number;
  totalSubscribers: number;
  newSubscribers: number;
  avgTransactionValue: number;
  paymentVolumeChange: number;
  subscribersChange: number;
  avgTransactionChange: number;
}

export function SummaryCards({
  totalPaymentVolume,
  totalSubscribers,
  newSubscribers,
  avgTransactionValue,
  paymentVolumeChange,
  subscribersChange,
  avgTransactionChange,
}: SummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <SummaryCard
        title="Payment Volume"
        value={`$${totalPaymentVolume.toLocaleString()}`}
        changePercentage={paymentVolumeChange}
        icon={CreditCard}
      />

      <SummaryCard
        title="Total Subscribers"
        value={totalSubscribers.toLocaleString()}
        changePercentage={subscribersChange}
        icon={Repeat}
      />

      <SummaryCard
        title="New Subscribers"
        value={newSubscribers}
        icon={Repeat}
        subtitle="In the selected period"
      />

      <SummaryCard
        title="Avg. Transaction Value"
        value={`$${avgTransactionValue.toFixed(2)}`}
        changePercentage={avgTransactionChange}
        icon={TrendingUp}
      />
    </div>
  );
}
