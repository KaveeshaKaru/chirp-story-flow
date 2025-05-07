
import React, { createContext, useContext, useState, useEffect } from "react";

interface Admin {
  id: string;
  name: string;
  email: string;
  role: "admin" | "owner";
}

interface AdminAuthContextType {
  admin: Admin | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

// Mock admin users (will be replaced with Supabase)
const MOCK_ADMINS = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@tara.com",
    password: "admin123",
    role: "admin" as const,
  },
  {
    id: "2",
    name: "Owner User",
    email: "owner@tara.com",
    password: "owner123",
    role: "owner" as const,
  },
];

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for stored admin on initial load
  useEffect(() => {
    const storedAdmin = localStorage.getItem("taraAdmin");
    if (storedAdmin) {
      try {
        const parsedAdmin = JSON.parse(storedAdmin);
        setAdmin(parsedAdmin);
      } catch (error) {
        console.error("Failed to parse stored admin:", error);
        localStorage.removeItem("taraAdmin");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const foundAdmin = MOCK_ADMINS.find(a => a.email === email && a.password === password);
    
    if (!foundAdmin) {
      throw new Error("Invalid credentials");
    }
    
    // Create the admin object without the password
    const adminData: Admin = {
      id: foundAdmin.id,
      name: foundAdmin.name,
      email: foundAdmin.email,
      role: foundAdmin.role,
    };
    
    // Store in local storage
    localStorage.setItem("taraAdmin", JSON.stringify(adminData));
    setAdmin(adminData);
  };

  const logout = () => {
    localStorage.removeItem("taraAdmin");
    setAdmin(null);
  };

  return (
    <AdminAuthContext.Provider value={{ admin, isLoading, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = (): AdminAuthContextType => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
};
