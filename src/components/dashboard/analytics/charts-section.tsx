"use client";

import { PaymentsChart } from "./payments-chart";
import { SubscriptionGrowthChart } from "./subscription-growth-chart";
import { AvgTransactionChart } from "./avg-transaction-chart";
import { PaymentMethodsChart } from "./payment-methods-chart";
import { TrendDirection } from "./chart-utils.tsx";

interface ChartsSectionProps {
  paymentsByDayData: Array<{
    date: string;
    amount: number;
  }>;
  subscriptionGrowthData: Array<{
    date: string;
    total: number;
    new: number;
  }>;
  avgTransactionValueData: Array<{
    date: string;
    value: number;
  }>;
  paymentMethodsData: Array<{
    name: string;
    value: number;
  }>;
  colors: string[];
  paymentVolumeChange?: number;
  subscribersChange?: number;
  avgTransactionChange?: number;
}

export function ChartsSection({
  paymentsByDayData,
  subscriptionGrowthData,
  avgTransactionValueData,
  paymentMethodsData,
  colors,
  paymentVolumeChange = 0,
  subscribersChange = 0,
  avgTransactionChange = 0,
}: ChartsSectionProps) {
  // Determine trend directions based on percentage changes
  const paymentTrend: TrendDirection =
    paymentVolumeChange > 0 ? "up" : paymentVolumeChange < 0 ? "down" : "neutral";
  const subscribersTrend: TrendDirection =
    subscribersChange > 0 ? "up" : subscribersChange < 0 ? "down" : "neutral";
  const avgTransactionTrend: TrendDirection =
    avgTransactionChange > 0 ? "up" : avgTransactionChange < 0 ? "down" : "neutral";

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
      <PaymentsChart data={paymentsByDayData} trend={paymentTrend} />
      <SubscriptionGrowthChart data={subscriptionGrowthData} trend={subscribersTrend} />
      <AvgTransactionChart data={avgTransactionValueData} trend={avgTransactionTrend} />
      <PaymentMethodsChart data={paymentMethodsData} colors={colors} />
    </div>
  );
}
