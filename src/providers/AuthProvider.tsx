
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";
import { ethers } from "ethers";

// Define types for our context
type User = {
  name: string | null;
  email: string | null;
  profileImage: string | null;
  walletAddress: string | null;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  web3auth: Web3Auth | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  web3auth: null,
  login: async () => {},
  logout: async () => {},
});

// Client ID for Web3Auth (in a real app, this should be from environment variables)
const clientId = "BEglQSgt4cUWcj6SKRdu5QkOXTsePmMcusG5EAoyjyOYKlVRjIF1iCNnMOTfpzCiunHRrMui8TIwQPXdkQ8Yxuk"; // Demo client ID - replace with your own

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x1",
            rpcTarget: "https://rpc.ankr.com/eth"
          },
          web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
        });

        await web3auth.initModal();
        setWeb3auth(web3auth);
        
        if (web3auth.connected) {
          const userData = await web3auth.getUserInfo();
          const provider = await web3auth.connect();
          
          // Convert Web3Auth provider to ethers provider and get the address
          let address = null;
          if (provider) {
            const ethersProvider = new ethers.providers.Web3Provider(provider);
            const signer = ethersProvider.getSigner();
            address = await signer.getAddress();
          }
          
          setUser({
            name: userData.name,
            email: userData.email,
            profileImage: userData.profileImage,
            walletAddress: address,
          });
        }
      } catch (error) {
        console.error("Error initializing Web3Auth:", error);
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, []);

  const login = async () => {
    if (!web3auth) {
      console.error("Web3Auth not initialized");
      return;
    }
    
    try {
      setIsLoading(true);
      const provider = await web3auth.connect();
      const userData = await web3auth.getUserInfo();
      
      // Convert Web3Auth provider to ethers provider and get the address
      let address = null;
      if (provider) {
        const ethersProvider = new ethers.providers.Web3Provider(provider);
        const signer = ethersProvider.getSigner();
        address = await signer.getAddress();
      }
      
      setUser({
        name: userData.name,
        email: userData.email,
        profileImage: userData.profileImage,
        walletAddress: address,
      });
    } catch (error) {
      console.error("Error logging in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    if (!web3auth) {
      console.error("Web3Auth not initialized");
      return;
    }
    
    try {
      setIsLoading(true);
      await web3auth.logout();
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
        web3auth,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
