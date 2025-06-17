import React from "react";
import type { JSX } from "react";
import { cn } from "@/lib/utils";

interface HeadTitleProps {
  title: string;
  subtitle?: string | null;
  htype?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

const HeadTitle = ({ title, subtitle = null, htype = "h2", className = "" }: HeadTitleProps) => {
  const Tag = htype as keyof JSX.IntrinsicElements;

  return (
    <div
      className={cn(
        "mb-12 flex w-full flex-col items-center justify-center text-center",
        className,
      )}
    >
      <Tag className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        {title}
      </Tag>

      {subtitle && (
        <p className="mt-3 max-w-lg text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
      )}
    </div>
  );
};

export default HeadTitle;
