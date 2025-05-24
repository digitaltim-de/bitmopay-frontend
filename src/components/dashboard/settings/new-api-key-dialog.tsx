"use client";

import { useState } from "react";
import { Copy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "@/components/ui/use-toast";

interface NewApiKeyDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  addNewApiKey: (keyName: string, keyValue: string) => void;
}

export function NewApiKeyDialog({ isOpen, setIsOpen, addNewApiKey }: NewApiKeyDialogProps) {
  const [newKeyName, setNewKeyName] = useState("");
  const [newlyCreatedKey, setNewlyCreatedKey] = useState<string | null>(null);

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
  };

  const handleCopyApiKey = (key: string) => {
    navigator.clipboard.writeText(key);

    toast({
      title: "API key copied",
      description: "The API key has been copied to your clipboard",
    });
  };

  const handleDone = () => {
    if (newlyCreatedKey) {
      // Add the new key to the parent component's state
      addNewApiKey(newKeyName, newlyCreatedKey);
    }

    // Reset form and close dialog
    setNewKeyName("");
    setNewlyCreatedKey(null);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate New API Key</DialogTitle>
          <DialogDescription>Create a new API key for integration</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {newlyCreatedKey ? (
            <div className="space-y-4">
              <Alert className="border-emerald-200 bg-emerald-50 text-emerald-800">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>API Key Generated</AlertTitle>
                <AlertDescription>
                  Your new API key has been generated. Make sure to copy it now as you won't be able
                  to see it again.
                </AlertDescription>
              </Alert>

              <div className="rounded-md bg-gray-50 p-3">
                <p className="mb-1 text-xs text-gray-500">Your API Key:</p>
                <div className="flex items-center">
                  <code className="flex-1 overflow-x-auto rounded border bg-white p-2 font-mono text-sm">
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
            <Button onClick={handleDone}>Done</Button>
          ) : (
            <>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateApiKey} disabled={!newKeyName.trim()}>
                Generate Key
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
