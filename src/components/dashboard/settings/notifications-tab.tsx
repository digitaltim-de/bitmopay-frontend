"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { NotificationSettings } from "./settings-utils";

interface NotificationsTabProps {
  initialNotificationSettings: NotificationSettings;
}

export function NotificationsTab({ initialNotificationSettings }: NotificationsTabProps) {
  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>(
    initialNotificationSettings,
  );

  // Handle notification toggle
  const handleNotificationToggle = (setting: keyof NotificationSettings) => {
    setNotificationSettings((prev) => {
      const newSettings = {
        ...prev,
        [setting]: !prev[setting],
      };

      toast({
        title: "Notification settings updated",
        description: `${setting} notifications ${prev[setting] ? "disabled" : "enabled"}`,
      });

      return newSettings;
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Manage how you receive notifications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 text-lg font-medium">Transaction Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Payout Success</p>
                  <p className="text-sm text-gray-500">
                    Receive notifications when your payouts are processed
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.payoutSuccess}
                  onCheckedChange={() => handleNotificationToggle("payoutSuccess")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New Subscriber</p>
                  <p className="text-sm text-gray-500">
                    Receive notifications when you get a new subscriber
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.newSubscriber}
                  onCheckedChange={() => handleNotificationToggle("newSubscriber")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Failed Payment</p>
                  <p className="text-sm text-gray-500">
                    Receive notifications when a payment fails
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.failedPayment}
                  onCheckedChange={() => handleNotificationToggle("failedPayment")}
                />
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="mb-4 text-lg font-medium">System Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Weekly Report</p>
                  <p className="text-sm text-gray-500">
                    Receive a weekly summary of your account activity
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.weeklyReport}
                  onCheckedChange={() => handleNotificationToggle("weeklyReport")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing Updates</p>
                  <p className="text-sm text-gray-500">
                    Receive updates about new features and promotions
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.marketingUpdates}
                  onCheckedChange={() => handleNotificationToggle("marketingUpdates")}
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-gray-500">
          You can change your notification preferences at any time.
        </p>
      </CardFooter>
    </Card>
  );
}
