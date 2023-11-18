import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import {
  NavigationContainer,
  NavigationItem,
  NavigationItemLabel,
} from './styles';

interface BottomNavigationData {
  icon: string;
  lable: string;
  pageRoute: string;
}

const tabBarItems: Array<BottomNavigationData> = [
  {
    icon: 'ios-home',
    lable: 'Home',
    pageRoute: 'Library',
  },
];

export const BottomNavigationBar: React.FC<BottomTabBarProps> = ({
  navigation,
}) => {
  return (
    <NavigationContainer>
      {tabBarItems.map((item, index) => (
        <NavigationItem
          key={index}
          onPress={() => navigation.navigate(item.pageRoute)}
        >
          <Icon name={item.icon} size={24} color="#000" />
          <NavigationItemLabel>{item.lable}</NavigationItemLabel>
        </NavigationItem>
      ))}
    </NavigationContainer>
  );
};
