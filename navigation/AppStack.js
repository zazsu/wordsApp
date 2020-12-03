import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from '../navigation/TabNavigation'

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Words App">  
      <Stack.Screen name="Words App" component={TabNavigation}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default AppStack;