"use client";

import { useState } from "react";
import { Key, Copy, Trash2, Plus, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "@/components/ui/use-toast";
import { ApiKey, apiKeys as initialApiKeys, formatDate } from "./settings-utils";
import { NewApiKeyDialog } from "./new-api-key-dialog";
import { ConfirmDeleteKeyDialog } from "./confirm-delete-key-dialog";

export function ApiKeysTab() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>(initialApiKeys);
  const [isNewKeyDialogOpen, setIsNewKeyDialogOpen] = useState(false);
  const [isConfirmDeleteDialogOpen, setIsConfirmDeleteDialogOpen] = useState(false);
  const [keyToDelete, setKeyToDelete] = useState<string | null>(null);

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

    // Remove the key from the UI state
    setApiKeys(apiKeys.filter((key) => key.id !== keyToDelete));

    // Reset state and close dialog
    setKeyToDelete(null);
    setIsConfirmDeleteDialogOpen(false);

    toast({
      title: "API key revoked",
      description: "The API key has been revoked successfully",
    });
  };

  // Add a new API key to the list
  const addNewApiKey = (keyName: string, keyValue: string) => {
    const newKey = {
      id: `key-${Date.now()}`,
      name: keyName,
      key: keyValue,
      createdAt: new Date().toISOString(),
      lastUsed: new Date().toISOString(),
    };

    setApiKeys([newKey, ...apiKeys]);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>Manage your API keys for integration</CardDescription>
            </div>
            <Button
              onClick={() => setIsNewKeyDialogOpen(true)}
              className="mt-4 flex items-center md:mt-0"
            >
              <Plus className="mr-2 h-4 w-4" />
              Generate New Key
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <Alert className="border-blue-200 bg-blue-50 text-blue-800">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>API Key Security</AlertTitle>
              <AlertDescription>
                Keep your API keys secure. Do not share them in public repositories or client-side
                code.
              </AlertDescription>
            </Alert>

            {apiKeys.length > 0 ? (
              <div className="space-y-4">
                {apiKeys.map((apiKey) => (
                  <div key={apiKey.id} className="rounded-md bg-gray-50 p-4 dark:bg-gray-800">
                    <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="font-medium">{apiKey.name}</p>
                        <p className="font-mono text-sm text-gray-500">{apiKey.key}</p>
                      </div>
                      <div className="mt-2 flex items-center space-x-2 md:mt-0">
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
                          className="flex items-center border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                        >
                          <Trash2 className="mr-2 h-3 w-3" />
                          Revoke
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1 text-xs text-gray-500 md:flex-row md:items-center md:space-x-4 md:space-y-0">
                      <p>Created: {formatDate(apiKey.createdAt)}</p>
                      <p>Last used: {formatDate(apiKey.lastUsed)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-gray-500">
                <Key className="mx-auto mb-3 h-12 w-12 text-gray-300" />
                <p>No API keys found</p>
                <p className="mt-1 text-sm">Generate a new API key to get started</p>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500">
            Need help with API integration? Check our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              API documentation
            </a>
            .
          </p>
        </CardFooter>
      </Card>

      <NewApiKeyDialog
        isOpen={isNewKeyDialogOpen}
        setIsOpen={setIsNewKeyDialogOpen}
        addNewApiKey={addNewApiKey}
      />

      <ConfirmDeleteKeyDialog
        isOpen={isConfirmDeleteDialogOpen}
        setIsOpen={setIsConfirmDeleteDialogOpen}
        onConfirm={handleDeleteApiKey}
      />
    </>
  );
}
