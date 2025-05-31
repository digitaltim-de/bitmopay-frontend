"use client";

/**
 * Utility function to get appropriate colors based on trend direction
 * @param isPositive Whether the trend is positive or not
 * @param gradientId ID for the gradient to use in charts
 * @returns Object with color values for styling components
 */
export function getTrendStylesForDashboard(isPositive: boolean, gradientId: string) {
  return {
    iconBg: isPositive ? "bg-emerald-100 dark:bg-emerald-900/50" : "bg-red-100 dark:bg-red-900/50",
    iconText: isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400",
    changeText: isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400",
    strokeColor: isPositive ? "#10b981" : "#ef4444", // emerald-500 : red-500
    fillGradient: `url(#${gradientId})`,
    stopColor: isPositive ? "#10b981" : "#ef4444", // emerald-500 : red-500
    stopOpacity: 0.3,
  };
}
