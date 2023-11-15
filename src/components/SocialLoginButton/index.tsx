import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Text } from './styles';

interface SocialButtonProps {
  lable: string;
  iconName: string;
  onPress: () => void;
}

export const SocialLoginButton: React.FC<SocialButtonProps> = ({
  lable,
  iconName,
  onPress,
}) => {
  return (
    <Button onPress={onPress}>
      <Icon name={iconName} size={20} color="#ffffff" />
      <Text>{lable}</Text>
    </Button>
  );
};
