"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { LoginModal } from "@/components/modals/login-modal";
import { RegisterModal } from "@/components/modals/register-modal";

interface UserData {
  name?: string;
  email: string;
  id?: string;
}

interface AuthContextType {
  openLoginModal: () => void;
  openRegisterModal: () => void;
  closeModal: () => void;
  isAuthenticated: boolean;
  logout: () => void;
  user: UserData | null;
  login: (userData: UserData) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  // Check for existing auth session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("bitmopay_user");
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to parse saved user data", error);
        localStorage.removeItem("bitmopay_user");
      }
    }
  }, []);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeModal = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("bitmopay_user");
    // Add any additional logout logic here
  };

  // User login handler
  const login = (userData: UserData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem("bitmopay_user", JSON.stringify(userData));
    closeModal();
  };

  return (
    <AuthContext.Provider
      value={{
        openLoginModal,
        openRegisterModal,
        closeModal,
        isAuthenticated,
        logout,
        user,
        login,
      }}
    >
      {children}

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeModal}
        onOpenRegister={openRegisterModal}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeModal}
        onOpenLogin={openLoginModal}
      />
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
