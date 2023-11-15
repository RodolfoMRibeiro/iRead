import React from 'react';
import { Container, SocialButtons, Text } from './styles';
import { LoginForm } from '../../components/LoginForm';
import { SocialLoginButton } from '../../components/SocialLoginButton';

const SocialLogin: React.FC = () => {
  return (
    <React.Fragment>
      <Text>Or log in with:</Text>
      <SocialButtons>
        <SocialLoginButton
          lable="Google"
          iconName="google"
          onPress={() => {
            console.log('hello');
          }}
        />
        <SocialLoginButton
          lable="Facebook"
          iconName="facebook"
          onPress={() => {
            console.log('hello');
          }}
        />
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
