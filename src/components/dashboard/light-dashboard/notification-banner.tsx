"use client";

import { useState } from "react";
import { Zap, X } from "lucide-react";

interface NotificationBannerProps {
  defaultShow?: boolean;
  title: string;
  description: string;
  message?: string;
  learnMoreLink?: string;
  onDismiss?: () => void;
}

export function NotificationBanner({
  defaultShow = true,
  title,
  description,
  message,
  learnMoreLink,
  onDismiss,
}: NotificationBannerProps) {
  const [showNotification, setShowNotification] = useState(defaultShow);

  if (!showNotification) return null;

  const handleDismiss = () => {
    setShowNotification(false);
    if (onDismiss) onDismiss();
  };

  return (
    <div
      className="mb-6 overflow-hidden rounded-lg border border-emerald-200 bg-gradient-to-r from-emerald-50
        to-emerald-100 shadow-sm dark:border-emerald-800 dark:from-emerald-900/30 dark:to-emerald-800/30"
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 shadow-inner
              dark:bg-emerald-800"
          >
            <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />
          </div>
          <div>
            <h3 className="font-medium text-emerald-800 dark:text-emerald-300">{title}</h3>
            <p className="text-sm text-emerald-700 dark:text-emerald-400">{description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          {learnMoreLink && (
            <a
              href={learnMoreLink}
              className="hidden text-sm font-medium text-emerald-700 transition-colors duration-200 hover:text-emerald-800
                dark:text-emerald-400 dark:hover:text-emerald-300 sm:inline-block"
            >
              Learn more
            </a>
          )}{" "}
          <button
            onClick={handleDismiss}
            className="rounded-full p-1.5 text-emerald-600 transition-colors duration-200 hover:bg-emerald-200
              hover:text-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-800 dark:hover:text-emerald-300"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
    </div>
  );
}
