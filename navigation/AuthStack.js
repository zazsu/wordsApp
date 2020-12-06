/* Author: Eeva Mattila 
Student number: 1903054 */

import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

//if no user has yet authenticated they will be directed to the login screen
const AuthStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        cardStyle: { backgroundColor: '#fff' }
    }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;