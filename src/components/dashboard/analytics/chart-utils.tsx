"use client";
import React from "react";

export type TrendDirection = "up" | "down" | "neutral";

export interface TrendData {
  value: number;
  trend?: TrendDirection;
}

/**
 * Determines the color to use for a chart based on trend direction
 * @param trend The trend direction ("up", "down", or "neutral")
 * @param defaultColor An optional default color to use if no trend is provided
 * @returns Object containing color values for the chart
 */
export const getTrendColors = (trend: TrendDirection | undefined, defaultColor?: string) => {
  // Return defaults if no trend is provided
  if (!trend && defaultColor) {
    return {
      stroke: defaultColor,
      fill: defaultColor,
      stopColor: defaultColor,
    };
  }

  // Colors based on trend direction
  switch (trend) {
    case "up":
      return {
        stroke: "#10b981", // emerald-600
        fill: "url(#colorPositive)",
        stopColor: "#10b981",
      };
    case "down":
      return {
        stroke: "#ef4444", // red-500
        fill: "url(#colorNegative)",
        stopColor: "#ef4444",
      };
    case "neutral":
    default:
      return {
        stroke: "#6b7280", // gray-500
        fill: "url(#colorNeutral)",
        stopColor: "#6b7280",
      };
  }
};

/**
 * Creates gradient definitions for chart components
 * @returns JSX for gradient definitions
 */
export const ChartGradients: React.FC = () => {
  return (
    <defs>
      <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="colorNeutral" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#6b7280" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#6b7280" stopOpacity={0} />
      </linearGradient>
    </defs>
  );
};
