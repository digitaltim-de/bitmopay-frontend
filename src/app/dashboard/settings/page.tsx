"use client";

import { useState } from "react";
import {
  User,
  Shield,
  Bell,
  Key,
  Save,
  Copy,
  Trash2,
  Plus,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { format } from "date-fns";

// Mock API keys data
const apiKeys = [
  {
    id: "key-001",
    name: "Production API Key",
    key: "pk_live_51NxYz2CJsn******************************",
    createdAt: "2023-06-15T10:30:00",
    lastUsed: "2023-07-20T14:45:00",
  },
  {
    id: "key-002",
    name: "Test API Key",
    key: "pk_test_51NxYz2CJsn******************************",
    createdAt: "2023-06-15T10:35:00",
    lastUsed: "2023-07-19T09:15:00",
  },
];

export default function SettingsPage() {
  // State for profile form
  const [profileForm, setProfileForm] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    companyName: "Acme Inc.",
  });
  
  // State for security settings
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [isResetPasswordDialogOpen, setIsResetPasswordDialogOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  
  // State for notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    payoutSuccess: true,
    newSubscriber: true,
    failedPayment: true,
    weeklyReport: false,
    marketingUpdates: false,
  });
  
  // State for API keys
  const [isNewKeyDialogOpen, setIsNewKeyDialogOpen] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [isConfirmDeleteDialogOpen, setIsConfirmDeleteDialogOpen] = useState(false);
  const [keyToDelete, setKeyToDelete] = useState<string | null>(null);
  const [newlyCreatedKey, setNewlyCreatedKey] = useState<string | null>(null);
  
  // Handle profile form changes
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileForm((prev) => ({ ...prev, [name]: value }));
  };
  
  // Handle profile form submit
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would make an API call here
    console.log("Saving profile:", profileForm);
    
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully",
    });
  };
  
  // Handle password reset
  const handlePasswordReset = () => {
    // Validate passwords
    if (!currentPassword) {
      toast({
        title: "Current password required",
        description: "Please enter your current password",
        variant: "destructive",
      });
      return;
    }
    
    if (!newPassword) {
      toast({
        title: "New password required",
        description: "Please enter a new password",
        variant: "destructive",
      });
      return;
    }
    
    if (newPassword !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "New password and confirmation must match",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would make an API call here
    console.log("Resetting password");
    
    // Reset form and close dialog
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setIsResetPasswordDialogOpen(false);
    
    toast({
      title: "Password updated",
      description: "Your password has been updated successfully",
    });
  };
  
  // Handle notification toggle
  const handleNotificationToggle = (setting: string) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof prev],
    }));
    
    toast({
      title: "Notification settings updated",
      description: `${setting} notifications ${notificationSettings[setting as keyof typeof notificationSettings] ? 'disabled' : 'enabled'}`,
    });
  };
  
  // Handle create new API key
  const handleCreateApiKey = () => {
    if (!newKeyName.trim()) {
      toast({
        title: "Key name required",
        description: "Please enter a name for your API key",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would make an API call here
    console.log("Creating new API key:", newKeyName);
    
    // Generate a mock API key
    const mockKey = `pk_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
    setNewlyCreatedKey(mockKey);
    
    // Reset form
    setNewKeyName("");
  };
  
  // Handle copy API key
  const handleCopyApiKey = (key: string) => {
    navigator.clipboard.writeText(key);
    
    toast({
      title: "API key copied",
      description: "The API key has been copied to your clipboard",
    });
  };
  
  // Handle delete API key
  const handleDeleteApiKey = () => {
    if (!keyToDelete) return;
    
    // In a real app, you would make an API call here
    console.log("Deleting API key:", keyToDelete);
    
    // Reset state and close dialog
    setKeyToDelete(null);
    setIsConfirmDeleteDialogOpen(false);
    
    toast({
      title: "API key revoked",
      description: "The API key has been revoked successfully",
    });
  };
  
  // Format date
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMM dd, yyyy HH:mm");
  };

  return (
    <div className="container mx-auto p-6">
      <section className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Settings
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Manage your account settings and preferences
            </p>
          </div>
        </div>

        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <TabsTrigger value="profile" className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="api-keys" className="flex items-center">
              <Key className="h-4 w-4 mr-2" />
              API Keys
            </TabsTrigger>
          </TabsList>
          
          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Update your account profile information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileSubmit}>
                  <div className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={profileForm.firstName}
                          onChange={handleProfileChange}
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={profileForm.lastName}
                          onChange={handleProfileChange}
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profileForm.email}
                        onChange={handleProfileChange}
                        placeholder="Enter your email address"
                      />
                      <p className="text-sm text-gray-500">
                        This email will be used for account notifications
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={profileForm.companyName}
                        onChange={handleProfileChange}
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button type="submit" className="flex items-center">
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Security Tab */}
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your account security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Password</h3>
                  <p className="text-sm text-gray-500">
                    Change your account password
                  </p>
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
                    <Switch
                      checked={twoFactorEnabled}
                      onCheckedChange={setTwoFactorEnabled}
                    />
                  </div>
                  
                  {twoFactorEnabled ? (
                    <Alert className="bg-emerald-50 border-emerald-200 text-emerald-800">
                      <CheckCircle2 className="h-4 w-4" />
                      <AlertTitle>Two-Factor Authentication is enabled</AlertTitle>
                      <AlertDescription>
                        Your account is protected with an additional layer of security.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <Alert className="bg-amber-50 border-amber-200 text-amber-800">
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
                  <p className="text-sm text-gray-500">
                    Manage your active sessions
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
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
            </Card>
          </TabsContent>
          
          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Manage how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Transaction Notifications</h3>
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
                    <h3 className="text-lg font-medium mb-4">System Notifications</h3>
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
          </TabsContent>
          
          {/* API Keys Tab */}
          <TabsContent value="api-keys">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle>API Keys</CardTitle>
                    <CardDescription>
                      Manage your API keys for integration
                    </CardDescription>
                  </div>
                  <Button 
                    onClick={() => setIsNewKeyDialogOpen(true)}
                    className="mt-4 md:mt-0 flex items-center"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Generate New Key
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Alert className="bg-blue-50 border-blue-200 text-blue-800">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>API Key Security</AlertTitle>
                    <AlertDescription>
                      Keep your API keys secure. Do not share them in public repositories or client-side code.
                    </AlertDescription>
                  </Alert>
                  
                  {apiKeys.length > 0 ? (
                    <div className="space-y-4">
                      {apiKeys.map((apiKey) => (
                        <div 
                          key={apiKey.id} 
                          className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <div>
                              <p className="font-medium">{apiKey.name}</p>
                              <p className="text-sm text-gray-500 font-mono">
                                {apiKey.key}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2 mt-2 md:mt-0">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleCopyApiKey(apiKey.key)}
                                className="flex items-center"
                              >
                                <Copy className="mr-2 h-3 w-3" />
                                Copy
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => {
                                  setKeyToDelete(apiKey.id);
                                  setIsConfirmDeleteDialogOpen(true);
                                }}
                                className="flex items-center text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                              >
                                <Trash2 className="mr-2 h-3 w-3" />
                                Revoke
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row md:items-center text-xs text-gray-500 space-y-1 md:space-y-0 md:space-x-4">
                            <p>Created: {formatDate(apiKey.createdAt)}</p>
                            <p>Last used: {formatDate(apiKey.lastUsed)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Key className="mx-auto h-12 w-12 text-gray-300 mb-3" />
                      <p>No API keys found</p>
                      <p className="text-sm mt-1">Generate a new API key to get started</p>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">
                  Need help with API integration? Check our <a href="#" className="text-blue-600 hover:underline">API documentation</a>.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Reset Password Dialog */}
      <Dialog open={isResetPasswordDialogOpen} onOpenChange={setIsResetPasswordDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reset Password</DialogTitle>
            <DialogDescription>
              Enter your current password and a new password
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="current-password">Current Password</Label>
              <div className="relative">
                <Input
                  id="current-password"
                  type={showCurrentPassword ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showCurrentPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="new-password">New Password</Label>
              <div className="relative">
                <Input
                  id="new-password"
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showNewPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Password must be at least 8 characters long
              </p>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsResetPasswordDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handlePasswordReset}
              disabled={!currentPassword || !newPassword || !confirmPassword}
            >
              Reset Password
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* New API Key Dialog */}
      <Dialog open={isNewKeyDialogOpen} onOpenChange={setIsNewKeyDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Generate New API Key</DialogTitle>
            <DialogDescription>
              Create a new API key for integration
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            {newlyCreatedKey ? (
              <div className="space-y-4">
                <Alert className="bg-emerald-50 border-emerald-200 text-emerald-800">
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertTitle>API Key Generated</AlertTitle>
                  <AlertDescription>
                    Your new API key has been generated. Make sure to copy it now as you won't be able to see it again.
                  </AlertDescription>
                </Alert>
                
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-xs text-gray-500 mb-1">Your API Key:</p>
                  <div className="flex items-center">
                    <code className="font-mono text-sm bg-white p-2 rounded border flex-1 overflow-x-auto">
                      {newlyCreatedKey}
                    </code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="ml-2"
                      onClick={() => handleCopyApiKey(newlyCreatedKey)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid gap-2">
                <Label htmlFor="key-name">API Key Name</Label>
                <Input
                  id="key-name"
                  placeholder="e.g., Production API Key"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                />
                <p className="text-xs text-gray-500">
                  Give your API key a descriptive name to identify its purpose
                </p>
              </div>
            )}
          </div>
          
          <DialogFooter>
            {newlyCreatedKey ? (
              <Button onClick={() => {
                setNewlyCreatedKey(null);
                setIsNewKeyDialogOpen(false);
              }}>
                Done
              </Button>
            ) : (
              <>
                <Button variant="outline" onClick={() => setIsNewKeyDialogOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  onClick={handleCreateApiKey}
                  disabled={!newKeyName.trim()}
                >
                  Generate Key
                </Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirm Delete API Key Dialog */}
      <Dialog open={isConfirmDeleteDialogOpen} onOpenChange={setIsConfirmDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Revoke API Key</DialogTitle>
            <DialogDescription>
              Are you sure you want to revoke this API key? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <Alert className="bg-red-50 border-red-200 text-red-800">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Revoking this API key will immediately invalidate it and any applications using it will stop working.
              </AlertDescription>
            </Alert>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsConfirmDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDeleteApiKey}
            >
              Revoke Key
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}