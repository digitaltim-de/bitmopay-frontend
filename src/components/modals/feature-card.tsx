import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import React from "react";

// Custom DialogContent with centered animation
function CenteredDialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogContent
      className={cn(
        `!data-[state=open]:animate-scale-in !data-[state=closed]:animate-scale-out transition-all
        duration-200 sm:max-h-[98vh] sm:max-w-md`,
        className,
      )}
      {...props}
    >
      {children}
    </DialogContent>
  );
}

interface FeatureCardModalProps {
  title: string;
  description: string;
  children: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
}

export function FeatureCardModal({
  title,
  description,
  children,
  ctaText = "Learn More",
  ctaLink = "#",
}: FeatureCardModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <CenteredDialogContent className="p-6">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-lg">{description}</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {title.includes("Chargeback Protection")
              ? "This feature provides enhanced protection and security for your cryptocurrency transactions, ensuring a safe and reliable payment experience for both merchants and customers."
              : title.includes("Global Payment")
                ? "Access international markets with optimized payment systems that support multiple currencies and local payment methods, helping you expand your business globally."
                : "Automate your revenue streams with smart subscription management and recurring billing solutions that maximize your cash flow and reduce payment failures."}
          </p>{" "}
        </div>
        <div className="mt-6 flex justify-end">
          <Button asChild size="lg">
            <a href={ctaLink} className="flex items-center">
              <span className="flex items-center">
                {ctaText}
                <ChevronRight className="ml-2 h-4 w-4" />
              </span>
            </a>
          </Button>
        </div>
      </CenteredDialogContent>
    </Dialog>
  );
}
