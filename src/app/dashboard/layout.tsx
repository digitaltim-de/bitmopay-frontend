"use client";

import { LightDashboard } from "@/components/dashboard/light-dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LightDashboard>{children}</LightDashboard>;
}