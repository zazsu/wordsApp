import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

import { Context } from '../navigation/ContextProvider';
import GlobalStyles from '../css/styles'

const ProfileScreen = () => {
  const {user, logout} = useContext(Context);
  
  return (
    <View style={GlobalStyles.container}>
      <Text>Logged in as</Text>
      <Text>{user.email}</Text>
      <TouchableOpacity style={GlobalStyles.buttonPrimary} onPress={() => logout()} ><Text style={GlobalStyles.buttonText}>LOGOUT</Text></TouchableOpacity>
      
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({

});