"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 4500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full !bg-white shadow-md transition-all hover:scale-110 hover:shadow-lg dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="z-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        </Button>
      )}
    </>
  );
}
