"use client";

import { CircleDollarSign, AlertCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface BalanceCardProps {
  currentBalance: number;
  minimumThreshold: number;
  onRequestPayout: () => void;
}

export function BalanceCard({
  currentBalance,
  minimumThreshold,
  onRequestPayout,
}: BalanceCardProps) {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Current Balance</CardTitle>
        <CardDescription>Your available balance for withdrawal</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <div className="mr-4 rounded-full bg-emerald-100 p-4 text-emerald-600">
            <CircleDollarSign className="h-8 w-8" />
          </div>
          <div>
            <div className="text-3xl font-bold">${currentBalance.toFixed(2)}</div>
            <div className="text-sm text-gray-500">Available for payout</div>
          </div>
        </div>

        {currentBalance < minimumThreshold && (
          <Alert className="mt-4 border-amber-200 bg-amber-50 text-amber-800">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Minimum Threshold Not Met</AlertTitle>
            <AlertDescription>
              You need a minimum balance of ${minimumThreshold} to request a payout. Your current
              balance is ${currentBalance.toFixed(2)}.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={onRequestPayout}
          disabled={currentBalance < minimumThreshold}
          className="w-full sm:w-auto"
        >
          <ArrowUpRight className="mr-2 h-4 w-4" />
          Request Payout
        </Button>
      </CardFooter>
    </Card>
  );
}
