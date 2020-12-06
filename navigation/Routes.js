/* Author: Eeva Mattila 
Student number: 1903054 */

import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {Context} from './ContextProvider';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import SplashScreen from '../screens/SplashScreen'

const Routes = () => {
  const {user, setUser} = useContext(Context);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return <SplashScreen></SplashScreen>;

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;