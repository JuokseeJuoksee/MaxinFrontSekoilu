import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Competition() {
  return (
    <View style={styles.container}>
      <Text>Competition screen</Text>
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