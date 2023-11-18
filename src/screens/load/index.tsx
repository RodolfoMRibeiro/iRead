import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, LoadingText } from './styles';

export const LoadingScreen: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#4CAF50" />
      <LoadingText>Loading...</LoadingText>
    </Container>
  );
};
