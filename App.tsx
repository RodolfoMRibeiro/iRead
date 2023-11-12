import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { X } from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>looser</Text>
      <StatusBar style="auto" />
      <X />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
