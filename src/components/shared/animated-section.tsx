"use client";

import { ReactNode, useRef } from "react";
import { useSubtleAnimation } from "@/hooks/use-subtle-animation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
  stagger?: number;
  containerClass?: string;
  itemClass?: string;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  distance = 10,
  duration = 0.4,
  stagger = 0.05,
  containerClass = "animation-container",
  itemClass = "animate-fade-in",
}: AnimatedSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Apply animation to children
  useSubtleAnimation({
    fadeInElements: `.${itemClass}`,
    fadeInDistance: distance,
    fadeInDuration: duration,
    fadeInStagger: stagger,
    fadeInTrigger: `.${containerClass}`,
    fadeInDelay: delay,
  });

  return (
    <div ref={containerRef} className={`${containerClass} ${className}`}>
      {children}
    </div>
  );
}

export function AnimatedItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`animate-fade-in ${className}`}>{children}</div>;
}
