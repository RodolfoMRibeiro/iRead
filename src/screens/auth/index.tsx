import React from 'react';
import { Container, SocialButton, SocialButtons, Text } from './styles';
import { LoginForm } from '../../components/LoginForm';

const SocialLogin: React.FC = () => {
  return (
    <React.Fragment>
      <Text>Or log in with:</Text>
      <SocialButtons>
        <SocialButton title="Facebook" />
        <SocialButton title="Twitter" />
      </SocialButtons>
    </React.Fragment>
  );
};

export const LoginScreen: React.FC = () => {
  return (
    <Container>
      <LoginForm />
      <SocialLogin />
      <Text>
        Don't have an account? <Text style={{ color: '#0096FF' }}>Sign Up</Text>
      </Text>
    </Container>
  );
};
