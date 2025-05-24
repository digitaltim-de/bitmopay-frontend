"use client";

import { format, subDays, startOfYear } from "date-fns";

// Mock data for payments by day
export const generatePaymentsByDay = (days: number) => {
  const data = [];
  const today = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = subDays(today, i);
    data.push({
      date: format(date, "MMM dd"),
      amount: Math.floor(Math.random() * 1000) + 500,
    });
  }

  return data;
};

// Mock data for subscription growth
export const generateSubscriptionGrowth = (days: number) => {
  const data = [];
  const today = new Date();
  let total = 120; // Starting value

  for (let i = days - 1; i >= 0; i--) {
    const date = subDays(today, i);
    const newSubs = Math.floor(Math.random() * 10) + 1;
    total += newSubs;

    data.push({
      date: format(date, "MMM dd"),
      total: total,
      new: newSubs,
    });
  }

  return data;
};

// Mock data for average transaction value
export const generateAvgTransactionValue = (days: number) => {
  const data = [];
  const today = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = subDays(today, i);
    data.push({
      date: format(date, "MMM dd"),
      value: Math.floor(Math.random() * 100) + 50,
    });
  }

  return data;
};

// Get number of days based on selected time range
export const getDaysFromTimeRange = (timeRange: string) => {
  switch (timeRange) {
    case "7D":
      return 7;
    case "30D":
      return 30;
    case "90D":
      return 90;
    case "YTD":
      return Math.floor(
        (new Date().getTime() - startOfYear(new Date()).getTime()) / (1000 * 60 * 60 * 24),
      );
    case "ALL":
      return 365; // Just use a year for "All time" in this mock
    default:
      return 30;
  }
};
