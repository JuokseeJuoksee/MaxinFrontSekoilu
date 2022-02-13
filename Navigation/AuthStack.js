import React from 'react'
import {View, Text} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/Login';
import Home from '../views/Home';
const Stack = createNativeStackNavigator();


export default function AuthStack() {
    return(
        <Stack.Navigator>
        <Stack.Screen component={Login} name="Login" options={{headerShown:false}}/>
        <Stack.Screen component={Home} name="Home" options={{headerShown:false}}/>
      </Stack.Navigator>
    )

}
 