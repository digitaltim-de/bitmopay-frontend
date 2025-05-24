"use client";

import { useState } from "react";
import { AnalyticsHeader } from "@/components/dashboard/analytics/analytics-header";
import { SummaryCards } from "@/components/dashboard/analytics/summary-cards";
import { ChartsSection } from "@/components/dashboard/analytics/charts-section";
import {
  getDaysFromTimeRange,
  generatePaymentsByDay,
  generateSubscriptionGrowth,
  generateAvgTransactionValue,
  paymentMethodsData,
  COLORS,
} from "@/components/dashboard/analytics/data-utils";

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30D");
  const [selectedCoin, setSelectedCoin] = useState("all");

  const days = getDaysFromTimeRange(timeRange);
  const paymentsByDayData = generatePaymentsByDay(days);
  const subscriptionGrowthData = generateSubscriptionGrowth(days);
  const avgTransactionValueData = generateAvgTransactionValue(days);

  // Calculate summary metrics
  const totalPaymentVolume = paymentsByDayData.reduce((sum, item) => sum + item.amount, 0);
  const totalSubscribers = subscriptionGrowthData[subscriptionGrowthData.length - 1].total;
  const newSubscribers = subscriptionGrowthData.reduce((sum, item) => sum + item.new, 0);
  const avgTransactionValue =
    avgTransactionValueData.reduce((sum, item) => sum + item.value, 0) /
    avgTransactionValueData.length;

  // Calculate percentage changes (mock data)
  const paymentVolumeChange = 12.5;
  const subscribersChange = 8.3;
  const avgTransactionChange = -3.2;

  // Handle export analytics data
  const handleExportData = () => {
    console.log("Exporting analytics data...");
  };
  return (
    <div className="p-4 lg:p-">
      <section className="space-y-8">
        <AnalyticsHeader
          timeRange={timeRange}
          setTimeRange={setTimeRange}
          selectedCoin={selectedCoin}
          setSelectedCoin={setSelectedCoin}
          handleExportData={handleExportData}
        />

        <SummaryCards
          totalPaymentVolume={totalPaymentVolume}
          totalSubscribers={totalSubscribers}
          newSubscribers={newSubscribers}
          avgTransactionValue={avgTransactionValue}
          paymentVolumeChange={paymentVolumeChange}
          subscribersChange={subscribersChange}
          avgTransactionChange={avgTransactionChange}
        />

        <ChartsSection
          paymentsByDayData={paymentsByDayData}
          subscriptionGrowthData={subscriptionGrowthData}
          avgTransactionValueData={avgTransactionValueData}
          paymentMethodsData={paymentMethodsData}
          colors={COLORS}
        />
      </section>
    </div>
  );
}
