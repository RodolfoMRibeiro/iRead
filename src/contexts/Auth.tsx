import React, { createContext, useContext, useEffect, useState } from 'react';
import * as asyncStorage from '../services/storage/User';
import * as authService from '../services/auth/authService';
import { Alert } from 'react-native';

export interface AuthData {
  token: string;
  email: string;
  name: string;
}

export interface AuthContextData {
  authData?: AuthData;
  signIn(email: string, password: string): Promise<void>;
  signOut(): Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [authData, setAuthData] = useState<AuthData | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    initializeAuthData();
  }, []);

  async function initializeAuthData() {
    setLoading(true);
    const storedAuthData = await fetchStoredAuthData();
    setAuthData(storedAuthData);
    setLoading(false);
  }

  async function fetchStoredAuthData(): Promise<AuthData | undefined> {
    try {
      return await asyncStorage.loadAuthDataFromStorage<AuthData>();
    } catch (error) {
      return undefined;
    }
  }

  async function signIn(email: string, password: string): Promise<void> {
    try {
      const authenticatedData = await authService.signIn(email, password);
      setAuthData(authenticatedData);
      await saveAuthDataToStorage(authenticatedData);
    } catch (error) {
      showSignInError();
    }
  }

  async function saveAuthDataToStorage(data: AuthData): Promise<void> {
    await asyncStorage.saveAuthDataToStorage<AuthData>(data);
  }

  function showSignInError(): void {
    Alert.alert('Tente Novamente');
  }

  async function signOut(): Promise<void> {
    clearAuthData();
    await asyncStorage.removeAuthDataFromStorage();
  }

  function clearAuthData(): void {
    setAuthData(undefined);
  }

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
