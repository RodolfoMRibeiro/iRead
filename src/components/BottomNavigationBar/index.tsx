import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Icon, Label, NavigationContainer, NavigationItem } from './styles';

export const BottomNavigationBar: React.FC<BottomTabBarProps> = ({
  navigation,
}) => {
  return (
    <NavigationContainer>
      <NavigationItem
        onPress={() => {
          navigation.navigate('Library');
        }}
      >
        <Icon>🏠</Icon>
        <Label>Home</Label>
      </NavigationItem>
    </NavigationContainer>
  );
};
