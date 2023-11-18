import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LibraryScreen } from '../screens/library';
import { BottomNavigationBar } from '../components/BottomNavigationBar';
// import { PdfReadingScreen } from '../screens/pdf';

const Tab = createBottomTabNavigator();

export function AppStack() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigationBar {...props} />}>
      <Tab.Screen name="Library" component={LibraryScreen} />
      {/* <Tab.Screen name="Pdf" component={PdfReadingScreen} /> */}
    </Tab.Navigator>
  );
}
