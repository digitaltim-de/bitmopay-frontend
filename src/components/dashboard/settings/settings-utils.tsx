"use client";

// Type definitions
export interface ProfileForm {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
}

export interface NotificationSettings {
  payoutSuccess: boolean;
  newSubscriber: boolean;
  failedPayment: boolean;
  weeklyReport: boolean;
  marketingUpdates: boolean;
}

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdAt: string;
  lastUsed: string;
}

// Mock API keys data
export const apiKeys: ApiKey[] = [
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

// Format date helper function
export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
