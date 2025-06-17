"use client";

import { User, Shield, Bell, Key } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SettingsTabsNavigationProps {
  defaultValue?: string;
}

export function SettingsTabsNavigation({ defaultValue = "profile" }: SettingsTabsNavigationProps) {
  return (
    <TabsList className="grid grid-cols-2 gap-2 md:grid-cols-4">
      <TabsTrigger value="profile" className="flex items-center">
        <User className="mr-2 h-4 w-4" />
        Profile
      </TabsTrigger>
      <TabsTrigger value="security" className="flex items-center">
        <Shield className="mr-2 h-4 w-4" />
        Security
      </TabsTrigger>
      <TabsTrigger value="notifications" className="flex items-center">
        <Bell className="mr-2 h-4 w-4" />
        Notifications
      </TabsTrigger>
      <TabsTrigger value="api-keys" className="flex items-center">
        <Key className="mr-2 h-4 w-4" />
        API Keys
      </TabsTrigger>
    </TabsList>
  );
}
