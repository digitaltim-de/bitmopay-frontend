import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const Section = forwardRef<HTMLElement, Props>(
  ({ children, className, containerClassName, ...props }, ref) => {
    return (
      <section ref={ref} className={cn("py-20", className)} {...props}>
        <div className={cn("container", containerClassName)}>{children}</div>
      </section>
    );
  },
);

Section.displayName = "Section";
