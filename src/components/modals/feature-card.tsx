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
            This feature provides enhanced protection and security for your cryptocurrency transactions, ensuring a safe and reliable payment experience for both merchants and customers.
          </p>
        </div>
        <div className="flex justify-end">
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