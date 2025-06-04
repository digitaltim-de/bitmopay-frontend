"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SubtleAnimationOptions {
  fadeInElements?: string;
  fadeInDistance?: number;
  fadeInDuration?: number;
  fadeInStagger?: number;
  fadeInTrigger?: string;
  fadeInStart?: string;
  fadeInDelay?: number;
}

/**
 * Hook to apply subtle, consistent animations across the resources pages
 */
export function useSubtleAnimation({
  fadeInElements = ".animate-fade-in",
  fadeInDistance = 10,
  fadeInDuration = 0.4,
  fadeInStagger = 0.05,
  fadeInTrigger = ".animation-container",
  fadeInStart = "top bottom-=50px",
  fadeInDelay = 0,
}: SubtleAnimationOptions = {}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Simple fade-in animation with reduced values for subtle effect
    gsap.fromTo(
      fadeInElements,
      { 
        opacity: 0, 
        y: fadeInDistance 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: fadeInDuration, 
        stagger: fadeInStagger,
        delay: fadeInDelay,
        scrollTrigger: {
          trigger: fadeInTrigger,
          start: fadeInStart,
        }
      }
    );

    return () => {
      // Cleanup scroll triggers when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [fadeInElements, fadeInDistance, fadeInDuration, fadeInStagger, fadeInTrigger, fadeInStart, fadeInDelay]);
}
