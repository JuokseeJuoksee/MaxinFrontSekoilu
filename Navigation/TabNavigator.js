import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../views/Home';
import NewCompetition from '../views/NewCompetition';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return(
        <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarStyle: {backgroundColor: '#FF5733'},
            tabBarInactiveTintColor: '#fff',
            tabBarActiveTintColor: 'yellow'
        
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="home" color={color} size={size} />
                )
            }}/>
            <Tab.Screen name="New competition" component={NewCompetition}options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="leaderboard" color={color} size={size} />
                )
            }}/>
        </Tab.Navigator>
    )
}