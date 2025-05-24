"use client";

import { PaymentsChart } from "./payments-chart";
import { SubscriptionGrowthChart } from "./subscription-growth-chart";
import { AvgTransactionChart } from "./avg-transaction-chart";
import { PaymentMethodsChart } from "./payment-methods-chart";

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
}

export function ChartsSection({
  paymentsByDayData,
  subscriptionGrowthData,
  avgTransactionValueData,
  paymentMethodsData,
  colors,
}: ChartsSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <PaymentsChart data={paymentsByDayData} />
      <SubscriptionGrowthChart data={subscriptionGrowthData} />
      <AvgTransactionChart data={avgTransactionValueData} />
      <PaymentMethodsChart data={paymentMethodsData} colors={colors} />
    </div>
  );
}
