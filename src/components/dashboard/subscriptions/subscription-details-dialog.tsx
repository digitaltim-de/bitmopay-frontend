"use client";

import { format } from "date-fns";
import { XCircle, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Subscription, getInitials, getStatusBadge } from "./subscriptions-utils";

interface SubscriptionDetailsDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  subscription: Subscription | null;
  onCancelRequest: () => void;
}

export function SubscriptionDetailsDialog({
  isOpen,
  setIsOpen,
  subscription,
  onCancelRequest,
}: SubscriptionDetailsDialogProps) {
  if (!subscription) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Subscription Details</DialogTitle>
          <DialogDescription>
            Detailed information about the selected subscription
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <div className="mb-6 flex items-center">
            <Avatar className="mr-4 h-12 w-12">
              <AvatarFallback className="bg-emerald-100 text-emerald-700">
                {getInitials(subscription.email)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{subscription.email}</h3>
              <p className="text-sm text-gray-500">
                Subscribed since {format(new Date(subscription.startDate), "MMMM dd, yyyy")}
              </p>
            </div>
            <div className="ml-auto">
              {subscription.status === "active" && (
                <Button variant="destructive" size="sm" onClick={onCancelRequest}>
                  <XCircle className="mr-2 h-4 w-4" />
                  Cancel Subscription
                </Button>
              )}
            </div>
          </div>

          <Tabs defaultValue="details">
            <TabsList className="mb-4">
              <TabsTrigger value="details">Subscription Details</TabsTrigger>
              <TabsTrigger value="transactions">Transaction History</TabsTrigger>
            </TabsList>

            <TabsContent value="details">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Subscription ID</p>
                  <p className="font-medium">{subscription.id}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <p>{getStatusBadge(subscription.status)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Plan</p>
                  <p className="font-medium">{subscription.plan}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Amount</p>
                  <p className="font-medium">${subscription.amount.toFixed(2)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Payment Method</p>
                  <p className="font-medium">{subscription.paymentMethod}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Coin</p>
                  <p className="font-medium">{subscription.coin}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Start Date</p>
                  <p className="font-medium">
                    {format(new Date(subscription.startDate), "MMMM dd, yyyy")}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Next Billing Date</p>
                  <p className="font-medium">
                    {subscription.status !== "cancelled"
                      ? format(new Date(subscription.nextBilling), "MMMM dd, yyyy")
                      : "—"}
                  </p>
                </div>

                {subscription.status === "cancelled" && (
                  <>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-500">Cancelled Date</p>
                      <p className="font-medium">
                        {subscription.cancelledDate
                          ? format(new Date(subscription.cancelledDate), "MMMM dd, yyyy")
                          : "—"}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-500">Cancellation Reason</p>
                      <p className="font-medium">{subscription.cancellationReason || "—"}</p>
                    </div>
                  </>
                )}
              </div>
            </TabsContent>

            <TabsContent value="transactions">
              {subscription.transactions.length > 0 ? (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Transaction ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {subscription.transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-medium">{transaction.id}</TableCell>
                          <TableCell>
                            {format(new Date(transaction.date), "MMM dd, yyyy HH:mm")}
                          </TableCell>
                          <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                          <TableCell>
                            <Badge className="bg-emerald-100 text-emerald-800">
                              {transaction.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="py-8 text-center text-gray-500">
                  <Repeat className="mx-auto mb-3 h-12 w-12 text-gray-300" />
                  <p>No transactions found for this subscription</p>
                  {subscription.status === "trial" && (
                    <p className="mt-1 text-sm">This subscription is currently in trial period</p>
                  )}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
