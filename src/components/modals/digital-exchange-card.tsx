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

interface DigitalExchangeCardModalProps {
  title: string;
  description: string;
  children: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
}

export function DigitalExchangeCardModal({
  title,
  description,
  children,
  ctaText = "Learn More",
  ctaLink = "#",
}: DigitalExchangeCardModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This feature helps you optimize your cryptocurrency payment experience and improve your business operations.
          </p>
        </div>
        <div className="flex justify-between">
          <Button variant="outline" asChild>
            <a href="/dashboard" className="flex items-center">
              View Dashboard
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild>
            <a href={ctaLink} className="flex items-center">
              {ctaText}
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
