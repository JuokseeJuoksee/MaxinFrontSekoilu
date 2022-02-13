import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NewCompetition() {
  return (
    <View style={styles.container}>
      <Text>New competition</Text>
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