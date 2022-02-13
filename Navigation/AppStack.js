import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../views/Home';
import ProfileScreen from '../views/ProfileScreen';
import Competition from '../views/Competition';
import SettingsScreen from '../views/SettingsScreen';
import CustomDrawer from '../components/CustomDrawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();


export default function AppStack() {
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} 
        screenOptions={{headerShown:false,
        drawerActiveBackgroundColor: '#FF5733',
        drawerActiveTintColor:'#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {marginLeft: -25, fontSize:15}}
        }>
        <Drawer.Screen component={TabNavigator} name="Home" options={{drawerIcon: ({color}) => (
          <MaterialIcons name="home" size={22} color={color} />
        )}}/>
        <Drawer.Screen component={ProfileScreen} name="Profile" options={{drawerIcon: ({color}) => (
          <MaterialIcons name="person" size={22} color={color} />
        )}}/>
        <Drawer.Screen component={Competition} name="Competitions" options={{drawerIcon: ({color}) => (
          <MaterialIcons name="sports-kabaddi" size={22} color={color} />
        )}}/>
        <Drawer.Screen component={SettingsScreen} name="Settings"options={{drawerIcon: ({color}) => (
          <MaterialIcons name="settings" size={22} color={color} />
        )}}/>
      </Drawer.Navigator>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});