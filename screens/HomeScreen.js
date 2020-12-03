import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { Context } from '../navigation/ContextProvider';

const HomeScreen = () => {
  const {user, logout} = useContext(Context);
  
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  text: {

  },
  logoutButton: {

  }
});