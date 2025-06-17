"use client";

import { Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PayoutInfoCardProps {
  minimumThreshold: number;
}

export function PayoutInfoCard({ minimumThreshold }: PayoutInfoCardProps) {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Payout Information</CardTitle>
        <CardDescription>Important details about payouts</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start">
          <div className="mr-3 rounded-full bg-blue-100 p-2 text-blue-600">
            <Info className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-medium">Processing Time</h3>
            <p className="text-xs text-gray-500">
              Payouts are typically processed within 1-2 business days.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mr-3 rounded-full bg-blue-100 p-2 text-blue-600">
            <Info className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-medium">Minimum Amount</h3>
            <p className="text-xs text-gray-500">
              The minimum payout amount is ${minimumThreshold}.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mr-3 rounded-full bg-blue-100 p-2 text-blue-600">
            <Info className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-medium">Destination Wallets</h3>
            <p className="text-xs text-gray-500">
              You can only withdraw to wallets that you have added to your account.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
