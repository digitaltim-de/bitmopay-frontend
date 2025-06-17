"use client";

import { useState } from "react";
import { Lock, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { format } from "date-fns";
import { ResetPasswordDialog } from "./reset-password-dialog";

export function SecurityTab() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [isResetPasswordDialogOpen, setIsResetPasswordDialogOpen] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
        <CardDescription>Manage your account security settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Password</h3>
          <p className="text-sm text-gray-500">Change your account password</p>
          <Button
            variant="outline"
            onClick={() => setIsResetPasswordDialogOpen(true)}
            className="flex items-center"
          >
            <Lock className="mr-2 h-4 w-4" />
            Reset Password
          </Button>
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-500">
                Add an extra layer of security to your account
              </p>
            </div>
            <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
          </div>

          {twoFactorEnabled ? (
            <Alert className="border-emerald-200 bg-emerald-50 text-emerald-800">
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Two-Factor Authentication is enabled</AlertTitle>
              <AlertDescription>
                Your account is protected with an additional layer of security.
              </AlertDescription>
            </Alert>
          ) : (
            <Alert className="border-amber-200 bg-amber-50 text-amber-800">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Two-Factor Authentication is disabled</AlertTitle>
              <AlertDescription>
                Enable two-factor authentication for enhanced account security.
              </AlertDescription>
            </Alert>
          )}
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Session Management</h3>
          <p className="text-sm text-gray-500">Manage your active sessions</p>
          <div className="rounded-md bg-gray-50 p-4 dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Current Session</p>
                <p className="text-sm text-gray-500">
                  Last active: {format(new Date(), "MMM dd, yyyy HH:mm")}
                </p>
              </div>
              <Badge className="bg-emerald-100 text-emerald-800">Active</Badge>
            </div>
          </div>
          <Button variant="outline" className="flex items-center">
            <RefreshCw className="mr-2 h-4 w-4" />
            Sign Out All Other Sessions
          </Button>
        </div>
      </CardContent>

      <ResetPasswordDialog
        isOpen={isResetPasswordDialogOpen}
        setIsOpen={setIsResetPasswordDialogOpen}
      />
    </Card>
  );
}
