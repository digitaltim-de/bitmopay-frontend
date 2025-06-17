"use client";

import { format } from "date-fns";
import { CreditCard, Globe, Repeat } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Customer {
  id: string;
  email: string;
  firstSeen: string;
  lastPayment: string;
  totalVolume: number;
  coin: string;
  country: string;
  transactions: any[];
  subscriptions: any[];
}

interface CustomerDetailsProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
  selectedCustomer: Customer | null;
  getInitials: (email: string) => string;
  getStatusBadge: (status: string) => JSX.Element;
}

export function CustomerDetails({
  isDrawerOpen,
  setIsDrawerOpen,
  selectedCustomer,
  getInitials,
  getStatusBadge,
}: CustomerDetailsProps) {
  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Customer Details</DrawerTitle>
          <DrawerDescription>Detailed information about the selected customer</DrawerDescription>
        </DrawerHeader>

        {selectedCustomer && (
          <div className="px-4 py-2">
            <div className="mb-6 flex items-center">
              <Avatar className="mr-4 h-12 w-12">
                <AvatarFallback className="bg-emerald-100 text-emerald-700">
                  {getInitials(selectedCustomer.email)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">{selectedCustomer.email}</h3>
                <p className="text-sm text-gray-500">
                  Customer since {format(new Date(selectedCustomer.firstSeen), "MMMM dd, yyyy")}
                </p>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                <div className="text-sm text-gray-500 dark:text-gray-400">Customer ID</div>
                <div className="text-lg font-semibold">{selectedCustomer.id}</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                <div className="text-sm text-gray-500 dark:text-gray-400">Total Volume</div>
                <div className="text-lg font-semibold">
                  ${selectedCustomer.totalVolume.toFixed(2)}
                </div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                <div className="text-sm text-gray-500 dark:text-gray-400">Country</div>
                <div className="flex items-center text-lg font-semibold">
                  <Globe className="mr-2 h-4 w-4 text-gray-400" />
                  {selectedCustomer.country}
                </div>
              </div>
            </div>

            <Tabs defaultValue="transactions">
              <TabsList className="mb-4">
                <TabsTrigger value="transactions" className="flex items-center">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Transactions
                </TabsTrigger>
                <TabsTrigger value="subscriptions" className="flex items-center">
                  <Repeat className="mr-2 h-4 w-4" />
                  Subscriptions
                </TabsTrigger>
              </TabsList>

              <TabsContent value="transactions">
                {selectedCustomer.transactions.length > 0 ? (
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Transaction ID</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Coin</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {selectedCustomer.transactions.map((transaction: any) => (
                          <TableRow key={transaction.id}>
                            <TableCell className="font-medium">{transaction.id}</TableCell>
                            <TableCell>
                              {format(new Date(transaction.date), "MMM dd, yyyy HH:mm")}
                            </TableCell>
                            <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                            <TableCell>{transaction.coin}</TableCell>
                            <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="py-8 text-center text-gray-500">
                    <CreditCard className="mx-auto mb-3 h-12 w-12 text-gray-300" />
                    <p>No transactions found for this customer</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="subscriptions">
                {selectedCustomer.subscriptions.length > 0 ? (
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Subscription ID</TableHead>
                          <TableHead>Plan</TableHead>
                          <TableHead>Start Date</TableHead>
                          <TableHead>Next Billing</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {selectedCustomer.subscriptions.map((subscription: any) => (
                          <TableRow key={subscription.id}>
                            <TableCell className="font-medium">{subscription.id}</TableCell>
                            <TableCell>{subscription.plan}</TableCell>
                            <TableCell>
                              {format(new Date(subscription.startDate), "MMM dd, yyyy")}
                            </TableCell>
                            <TableCell>
                              {format(new Date(subscription.nextBilling), "MMM dd, yyyy")}
                            </TableCell>
                            <TableCell>${subscription.amount.toFixed(2)}</TableCell>
                            <TableCell>{getStatusBadge(subscription.status)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="py-8 text-center text-gray-500">
                    <Repeat className="mx-auto mb-3 h-12 w-12 text-gray-300" />
                    <p>No active subscriptions found for this customer</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        )}

        <DrawerFooter>
          <Button variant="outline" onClick={() => setIsDrawerOpen(false)}>
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
