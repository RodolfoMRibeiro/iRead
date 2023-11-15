import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Library } from '../screens/library';

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Library" component={Library} />
    </Stack.Navigator>
  );
}
