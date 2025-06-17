"use client";

import { Copy } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface Payment {
  id: string;
  customer: string;
  date: string;
  amount: number;
  coin: string;
  status: string;
  method: string;
}

interface PaymentDetailsProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
  selectedPayment: Payment | null;
  handleCopyTxId: (txId: string) => void;
  getStatusBadge: (status: string) => JSX.Element;
}

export function PaymentDetails({
  isDrawerOpen,
  setIsDrawerOpen,
  selectedPayment,
  handleCopyTxId,
  getStatusBadge,
}: PaymentDetailsProps) {
  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Payment Details</DrawerTitle>
          <DrawerDescription>Detailed information about the selected payment</DrawerDescription>
        </DrawerHeader>
        {selectedPayment && (
          <div className="px-4 py-2">
            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Transaction ID</h3>
                <p className="flex items-center text-base font-semibold">
                  {selectedPayment.id}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-2 h-6 w-6"
                    onClick={() => handleCopyTxId(selectedPayment.id)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                <p>{getStatusBadge(selectedPayment.status)}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Customer</h3>
                <p className="text-base font-semibold">{selectedPayment.customer}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Date & Time</h3>
                <p className="text-base font-semibold">
                  {format(new Date(selectedPayment.date), "PPpp")}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Amount</h3>
                <p className="text-base font-semibold">${selectedPayment.amount.toFixed(2)}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Coin</h3>
                <p className="text-base font-semibold">{selectedPayment.coin}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Payment Method</h3>
                <p className="text-base font-semibold">{selectedPayment.method}</p>
              </div>
            </div>

            <div className="mt-6 border-t pt-4">
              <h3 className="mb-2 text-sm font-medium text-gray-500">Payment Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-emerald-500"></div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Payment Initiated</p>
                    <p className="text-xs text-gray-500">
                      {format(new Date(selectedPayment.date), "PPp")}
                    </p>
                  </div>
                </div>
                {selectedPayment.status === "success" && (
                  <div className="flex items-start">
                    <div className="mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-emerald-500"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Payment Confirmed</p>
                      <p className="text-xs text-gray-500">
                        {format(
                          new Date(new Date(selectedPayment.date).getTime() + 10 * 60000),
                          "PPp",
                        )}
                      </p>
                    </div>
                  </div>
                )}
                {selectedPayment.status === "pending" && (
                  <div className="flex items-start">
                    <div className="mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-yellow-500"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Awaiting Confirmation</p>
                      <p className="text-xs text-gray-500">
                        {format(
                          new Date(new Date(selectedPayment.date).getTime() + 5 * 60000),
                          "PPp",
                        )}
                      </p>
                    </div>
                  </div>
                )}
                {selectedPayment.status === "failed" && (
                  <div className="flex items-start">
                    <div className="mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-red-500"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Payment Failed</p>
                      <p className="text-xs text-gray-500">
                        {format(
                          new Date(new Date(selectedPayment.date).getTime() + 5 * 60000),
                          "PPp",
                        )}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
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
