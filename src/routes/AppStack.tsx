import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LibraryScreen } from '../screens/library';

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Library" component={LibraryScreen} />
    </Stack.Navigator>
  );
}
