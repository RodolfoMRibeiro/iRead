import React, { useState } from 'react';
import { Form, Input, Button } from './styles';
import { useAuth } from '../../contexts/Auth';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useAuth();

  async function handleLogin(): Promise<void> {
    await signIn(email, password);
  }

  return (
    <Form>
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Log In" onPress={handleLogin} />
    </Form>
  );
};
