import 'react-native-gesture-handler';
import React, {useState} from 'react';
import Icon from 'react-native-ionicons';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './Navigation/AuthStack'
import AppStack from './Navigation/AppStack';



export default function App() {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    justifyContent:'center',
    alignItems:'center',
    width: 400,
    paddingBottom:60,
    height: 70,
    resizeMode: 'contain' }
});
