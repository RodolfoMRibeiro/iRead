import React from 'react';
import { AuthProvider } from './src/contexts/Auth';
import { Router } from './src/routes/Router';

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
