"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface CancelSubscriptionDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  cancelReason: string;
  setCancelReason: (reason: string) => void;
  onConfirm: () => void;
}

export function CancelSubscriptionDialog({
  isOpen,
  setIsOpen,
  cancelReason,
  setCancelReason,
  onConfirm,
}: CancelSubscriptionDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cancel Subscription</DialogTitle>
          <DialogDescription>
            Are you sure you want to cancel this subscription? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Reason for cancellation
          </label>
          <Input
            placeholder="Please provide a reason"
            value={cancelReason}
            onChange={(e) => setCancelReason(e.target.value)}
          />
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Keep Subscription
          </Button>
          <Button variant="destructive" onClick={onConfirm} disabled={!cancelReason.trim()}>
            Cancel Subscription
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
