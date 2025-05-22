"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    `inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium
   ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2
   focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-outline`,
    {
        variants: {
            variant: {
                default: `justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-8 h-11 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-600 hover:to-emerald-500 px-8 py-6 text-base font-outfit font-semibold tracking-wide text-gray-950 hover:text-emerald-950`,
                secondary: `bg-emerald-950 !text-white justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-8 h-11 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 px-8 py-6 text-base font-outfit font-semibold tracking-wide text-gray-950 hover:text-emerald-950`,
                light: `bg-emerald-200 !text-gray-950 justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-8 h-11 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 px-8 py-6 text-base font-outfit font-semibold tracking-wide text-gray-950 hover:text-emerald-950`,
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-white hover:bg-white hover:text-gray-950 group inline-flex items-center border-emerald-200 transition-all hover:border-emerald-300 dark:border-emerald-800 dark:hover:border-emerald-700 font-outfit font-semibold tracking-wide text-gray-950 hover:text-emerald-950 justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-8 h-11 inline-flex items-center gap-2 rounded-xl px-8 py-6 text-base",
                ghost: `justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-8 h-11 inline-flex items-center gap-2 rounded-xl px-8 py-6 text-base font-outfit font-semibold tracking-wide`,
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-8",
                sm: "h-10 px-3",
                lg: "h-12 px-8",
                xl: "h-14 px-10",
                icon: "h-11 w-11",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        const baseClasses = buttonVariants({ variant, size });
        return (
            <Comp
                className={cn(baseClasses, className)} // ⬅️ Jetzt wird `className` zuletzt angewendet
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };
