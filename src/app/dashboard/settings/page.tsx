"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import { SettingsHeader } from "@/components/dashboard/settings/settings-header";
import { SettingsTabsNavigation } from "@/components/dashboard/settings/settings-tabs-navigation";
import { ProfileTab } from "@/components/dashboard/settings/profile-tab";
import { SecurityTab } from "@/components/dashboard/settings/security-tab";
import { NotificationsTab } from "@/components/dashboard/settings/notifications-tab";
import { ApiKeysTab } from "@/components/dashboard/settings/api-keys-tab";

export default function SettingsPage() {
  // Initial profile form data
  const initialProfileData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    companyName: "Acme Inc.",
  };

  // Initial notification settings
  const initialNotificationSettings = {
    payoutSuccess: true,
    newSubscriber: true,
    failedPayment: true,
    weeklyReport: false,
    marketingUpdates: false,
  };

  return (
    <div className="container mx-auto p-6">
      <section className="mb-6">
        <SettingsHeader />

        <Tabs defaultValue="profile" className="space-y-4">
          <SettingsTabsNavigation />

          {/* Profile Tab */}
          <TabsContent value="profile">
            <ProfileTab initialProfileData={initialProfileData} />
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <SecurityTab />
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <NotificationsTab initialNotificationSettings={initialNotificationSettings} />
          </TabsContent>

          {/* API Keys Tab */}
          <TabsContent value="api-keys">
            <ApiKeysTab />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
