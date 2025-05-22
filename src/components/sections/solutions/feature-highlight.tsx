"use client";

import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Code, Lock, Webhook } from "lucide-react";

export function FeatureHighlight() {
  return (
    <Section className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          All Solutions are Based on our REST API & Webhook Technology
        </h2>

        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          Our robust API enables seamless integration into any platform with reliable webhooks for real-time notifications.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400">
              <Code size={28} />
            </div>
            <h3 className="mb-2 text-xl font-semibold">REST API</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Easy-to-implement API with comprehensive documentation and example code.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400">
              <Lock size={28} />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Security</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Highest security standards with encrypted communication and secure authentication.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400">
              <Webhook size={28} />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Webhooks</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Real-time notifications about payment events for automated processes.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            View API Documentation
          </Button>
        </div>
      </div>
    </Section>
  );
}
