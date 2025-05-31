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

interface PaymentsChartProps {
  data: Array<{
    date: string;
    amount: number;
  }>;
  trend?: TrendDirection;
}

export function PaymentsChart({ data, trend = "up" }: PaymentsChartProps) {
  const colors = getTrendColors(trend);

  return (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Payments by Day</CardTitle>
        <CardDescription>Daily payment volume over the selected period</CardDescription>
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
                tickFormatter={(value) => `$${value}`}
              />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <RechartsTooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="amount"
                stroke={colors.stroke}
                strokeWidth={2}
                fillOpacity={1}
                fill={colors.fill}
                name="Amount"
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
