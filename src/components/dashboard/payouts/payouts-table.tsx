"use client";

import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Payout, formatAddress, getCoinIcon, getStatusBadge } from "./payout-utils";

interface PayoutsTableProps {
  paginatedPayouts: Payout[];
}

export function PayoutsTable({ paginatedPayouts }: PayoutsTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Payout ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Wallet</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedPayouts.length > 0 ? (
            paginatedPayouts.map((payout) => (
              <TableRow key={payout.id}>
                <TableCell className="font-medium">{payout.id}</TableCell>
                <TableCell>{format(new Date(payout.date), "MMM dd, yyyy")}</TableCell>
                <TableCell>${payout.amount.toFixed(2)}</TableCell>
                <TableCell>{getStatusBadge(payout.status)}</TableCell>
                <TableCell className="flex items-center">
                  {getCoinIcon(payout.wallet.coin)}
                  <span className="ml-2">{formatAddress(payout.wallet.address)}</span>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center text-gray-500">
                No payout history found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
