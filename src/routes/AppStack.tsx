import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { LibraryScreen } from '../screens/library';
import { BottomNavigationBar } from '../components/BottomNavigationBar';

const Tab = createBottomTabNavigator();

export function AppStack() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigationBar {...props} />}>
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
}
