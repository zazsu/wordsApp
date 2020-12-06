/* Author: Eeva Mattila 
Student number: 1903054 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreen'
import EditScreen from '../screens/EditScreen'
import HomeScreen from '../screens/HomeScreen'

const Tabs = createBottomTabNavigator();

//tab navigator for authenticated users
//nested inside stack navigation
const TabNavigation = () => {
  return (
    <Tabs.Navigator 
     initialRouteName="Home"
     screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        //tab icon switches based on route
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home-sharp';
        } else if (route.name === 'Edit') {
          iconName = 'create-sharp';
        } else if (route.name === 'Profile') {
          iconName = 'person-sharp';
        }
        return <Ionicons name={iconName} size={size} color={color}></Ionicons>;
      },
      cardStyle: { backgroundColor: '#fff' }
    })}
    tabBarOptions={{
      activeTintColor: '#FB8B24',
      inactiveTintColor: '#47305F',
      showLabel: false
    }}>
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Edit" component={EditScreen} />
        <Tabs.Screen name="Profile" component={ProfileScreen}  />
    </Tabs.Navigator> )}

export default TabNavigation;