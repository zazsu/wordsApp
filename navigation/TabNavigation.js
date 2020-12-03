import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreen'
import EditScreen from '../screens/EditScreen'
import HomeScreen from '../screens/HomeScreen'

const Tabs = createBottomTabNavigator();

const TabNavigation = ({navigation}) => {

  return (
    <Tabs.Navigator 
     initialRouteName="Home"
     screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Edit') {
          iconName = 'settings';
        } else if (route.name === 'Profile') {
          iconName = 'settings';
        }
        return <Ionicons name={iconName} size={size} color={color}></Ionicons>;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'coral',
      inactiveTintColor: 'gray',
      showLabel: false
    }}>
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Edit" component={EditScreen} />
        <Tabs.Screen name="Profile" component={ProfileScreen}  />
    </Tabs.Navigator> )}

export default TabNavigation;