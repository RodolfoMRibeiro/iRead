import React from 'react';
import { Container, Title } from './styles';

interface TitleComponentProps {
  title: string;
}

export const NavigationTitle: React.FC<TitleComponentProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};
