import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { Context } from '../navigation/ContextProvider';

const ProfileScreen = () => {
  const {user, logout} = useContext(Context);
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logged in as</Text>
      <Text style={styles.text}>{user.email}</Text>
      <View style={styles.logoutButton}><Button  title='Logout' color='coral' buttonTitle='Logout' onPress={() => logout()} /></View>
      
    </View>
  );
}

export default ProfileScreen;

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