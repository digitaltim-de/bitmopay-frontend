"use client";

import { format } from "date-fns";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Subscription, getStatusBadge } from "./subscriptions-utils";

interface SubscriptionsTableProps {
  subscriptions: Subscription[];
  onViewDetails: (subscription: Subscription) => void;
}

export function SubscriptionsTable({ subscriptions, onViewDetails }: SubscriptionsTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>Next Billing</TableHead>
            <TableHead>Coin</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subscriptions.length > 0 ? (
            subscriptions.map((subscription) => (
              <TableRow key={subscription.id}>
                <TableCell className="font-medium">{subscription.email}</TableCell>
                <TableCell>{subscription.plan}</TableCell>
                <TableCell>{format(new Date(subscription.startDate), "MMM dd, yyyy")}</TableCell>
                <TableCell>
                  {subscription.status !== "cancelled"
                    ? format(new Date(subscription.nextBilling), "MMM dd, yyyy")
                    : "—"}
                </TableCell>
                <TableCell>{subscription.coin}</TableCell>
                <TableCell>{getStatusBadge(subscription.status)}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center"
                    onClick={() => onViewDetails(subscription)}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center text-gray-500">
                No subscriptions found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
