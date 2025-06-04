"use client";

import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuth } from "@/components/auth-provider";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

export function RegisterModal({ isOpen, onClose, onOpenLogin }: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      // Show error message for password mismatch
      alert("Passwords don't match. Please try again.");
      return;
    }

    if (!termsAccepted) {
      alert("Please accept the Terms of Service and Privacy Policy");
      return;
    }

    setIsLoading(true);

    try {
      // Here you would make a real API call to register the user
      // For now we're just simulating a successful registration
      setTimeout(() => {
        // Create user data
        const userData = {
          name,
          email,
          id: "user-" + Math.random().toString(36).substring(2, 9),
        };

        // Log the user in automatically after registration
        login(userData);

        setIsLoading(false);
        console.log("Registration successful:", { name, email });

        // Reset form fields
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setTermsAccepted(false);
        onClose();
      }, 1500);
    } catch (error) {
      console.error("Registration failed:", error);
      setIsLoading(false);
    }
  };

  const switchToLogin = () => {
    onClose();
    onOpenLogin();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-hidden overflow-y-auto rounded-2xl border-0 p-0 shadow-lg sm:max-w-[460px]">
        <div className="relative p-8">
          {/* Header */}
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold tracking-tight">Create Account</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Sign up for a Bitmopay account to start accepting crypto payments
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12 rounded-lg border-0 bg-blue-50 px-4 dark:bg-gray-800"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="register-email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="register-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 rounded-lg border-0 bg-blue-50 px-4 dark:bg-gray-800"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <Label htmlFor="register-password" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 rounded-lg border-0 bg-blue-50 px-4 pr-10 dark:bg-gray-800"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <Label htmlFor="confirm-password" className="text-sm font-medium">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="h-12 rounded-lg border-0 bg-blue-50 px-4 pr-10 dark:bg-gray-800"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="mt-4 flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={termsAccepted}
                onCheckedChange={(checked) => setTermsAccepted(checked === true)}
                required
                className="mt-1 border-gray-300 data-[state=checked]:border-green-500 data-[state=checked]:bg-green-500"
              />
              <label
                htmlFor="terms"
                className="text-sm leading-tight text-gray-600 dark:text-gray-300"
              >
                I agree to the{" "}
                <a
                  href="/legal/terms"
                  className="font-medium text-green-500 hover:text-green-600"
                  onClick={(e) => e.stopPropagation()}
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/legal/privacy"
                  className="font-medium text-green-500 hover:text-green-600"
                  onClick={(e) => e.stopPropagation()}
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              className="mt-6 h-12 w-full rounded-lg bg-[#d0fa4c] text-base font-medium text-black hover:bg-[#c8f033]"
              disabled={isLoading || !termsAccepted}
            >
              {isLoading ? "Creating account..." : "Create account"}
            </Button>
          </form>

          {/* Switch to login */}
          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <button
              onClick={switchToLogin}
              className="font-medium text-green-500 hover:text-green-600"
            >
              Sign in
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
