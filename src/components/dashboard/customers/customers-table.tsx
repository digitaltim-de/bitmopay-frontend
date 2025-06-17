"use client";

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
import { format } from "date-fns";

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

interface CustomersTableProps {
  paginatedCustomers: Customer[];
  handleViewDetails: (customer: Customer) => void;
}

export function CustomersTable({ paginatedCustomers, handleViewDetails }: CustomersTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer ID</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>First Seen</TableHead>
            <TableHead>Last Payment</TableHead>
            <TableHead>Total Volume</TableHead>
            <TableHead>Coin</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedCustomers.length > 0 ? (
            paginatedCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">{customer.id}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{format(new Date(customer.firstSeen), "MMM dd, yyyy")}</TableCell>
                <TableCell>{format(new Date(customer.lastPayment), "MMM dd, yyyy")}</TableCell>
                <TableCell>${customer.totalVolume.toFixed(2)}</TableCell>
                <TableCell>{customer.coin}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center"
                    onClick={() => handleViewDetails(customer)}
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
                No customers found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
