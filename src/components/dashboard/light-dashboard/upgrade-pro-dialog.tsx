"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface UpgradeProDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UpgradeProDialog({ isOpen, onOpenChange }: UpgradeProDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {" "}
      <DialogContent className="p-0 sm:max-h-[98vh] sm:max-w-md">
        <div className="relative px-6 py-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-center text-2xl font-bold">
              Upgrade to Pro Plan
            </DialogTitle>
            <DialogDescription className="mt-2 px-6 text-center">
              Unlock premium features and enhance your crypto payment experience
            </DialogDescription>
          </DialogHeader>

          <div className="px-2 py-6">
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-medium text-emerald-800 dark:text-emerald-300">
                Pro Plan Benefits
              </h3>
              <ul className="space-y-4">
                {[
                  "Lower transaction fees (0.5% vs 1% standard)",
                  "Priority customer support",
                  "Advanced analytics and reporting",
                  "Custom payment page branding",
                  "Unlimited API access",
                ].map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center text-base text-gray-700 dark:text-gray-300"
                  >
                    <Check className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8 text-center">
              <p className="mb-1 text-3xl font-bold">
                $29
                <span className="text-lg font-normal text-gray-500 dark:text-gray-400">/month</span>
              </p>
              <p className="text-gray-500 dark:text-gray-400">Cancel anytime. No contracts.</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 px-6 sm:flex-row sm:gap-4">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="h-12 w-full rounded-md text-base font-medium"
            >
              Maybe Later
            </Button>
            <Button
              className="h-12 w-full rounded-md bg-lime-500 text-base font-medium text-white hover:bg-lime-600"
              onClick={() => {
                // Handle upgrade logic here
                onOpenChange(false);
              }}
            >
              Upgrade Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
