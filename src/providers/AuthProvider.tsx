
import React, { createContext, useContext, useState } from 'react';

// Define types for our context
type User = {
  name: string;
  email: string;
  profileImage: string | null;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    try {
      setIsLoading(true);
      // Simulate login with a demo user
      // Using a reliable placeholder or default avatar
      setUser({
        name: "Demo User",
        email: "user@example.com",
        profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80" 
        // Fallback to a reliable image - change to "/images/avatar.jpg" if using local files
      });
    } catch (error) {
      console.error("Error logging in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider 
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
