/* Author: Eeva Mattila 
Student number: 1903054 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from '../navigation/TabNavigation'

const Stack = createStackNavigator();

//if there is an authenticated user, they will directed to the app 
const AppStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Words App"
      screenOptions={{
        cardStyle: { backgroundColor: '#fff' },
        headerShown: false
    }}> 
      <Stack.Screen name="Words App" component={TabNavigation}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default AppStack;