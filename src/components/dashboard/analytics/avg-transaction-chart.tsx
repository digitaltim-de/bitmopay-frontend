"use client";

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomTooltip } from "./custom-tooltip";

interface AvgTransactionChartProps {
  data: Array<{
    date: string;
    value: number;
  }>;
}

export function AvgTransactionChart({ data }: AvgTransactionChartProps) {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Average Transaction Value</CardTitle>
        <CardDescription>Average value per transaction over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
              <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} name="Avg Value" />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
