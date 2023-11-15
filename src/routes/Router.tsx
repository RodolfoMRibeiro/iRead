import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { useAuth } from '../contexts/Auth';

export function Router() {
  const { auth } = useAuth();

  return (
    <NavigationContainer>
      {auth ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
