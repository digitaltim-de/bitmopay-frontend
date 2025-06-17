"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomTooltip } from "./custom-tooltip";
import { ChartGradients, getTrendColors, TrendDirection } from "./chart-utils.tsx";

interface SubscriptionGrowthChartProps {
  data: Array<{
    date: string;
    total: number;
    new: number;
  }>;
  trend?: TrendDirection;
}

export function SubscriptionGrowthChart({ data, trend = "up" }: SubscriptionGrowthChartProps) {
  const colors = getTrendColors(trend);

  return (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Subscription Growth</CardTitle>
        <CardDescription>Total subscribers over the selected period</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <ChartGradients />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
                tickMargin={10}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickMargin={10}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={false}
              />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <RechartsTooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="total"
                stroke={colors.stroke}
                strokeWidth={2}
                fillOpacity={1}
                fill={colors.fill}
                name="Total Subscribers"
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
