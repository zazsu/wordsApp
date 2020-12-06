/* Author: Eeva Mattila 
Student number: 1903054 */

import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Context } from '../navigation/ContextProvider';
import GlobalStyles from '../css/styles'

const ProfileScreen = () => {
  //get authentication logic from context
  const {user, logout} = useContext(Context);
  
  return (
    <View style={GlobalStyles.container}>
      <Text style={styles.hello}>Hello,</Text>

      {/* display the currently authenticated users email */}
      <Text style={styles.user}>{user.email}</Text>

      <TouchableOpacity 
      style={GlobalStyles.buttonPrimary} 
      onPress={() => logout()} >
        <Text style={GlobalStyles.buttonText}>LOGOUT</Text></TouchableOpacity>

      <Text style={styles.aboutTitle}>About Words:</Text>
      <Text style={styles.aboutText }>this app was made by eevamattila.com as a part of a cross platform mobile development course in Laurea University of Applied Sciences</Text>      
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
aboutTitle: {
  marginTop: 30,
  marginBottom: 20,
  color: '#47305F',
  fontSize: 18,
},
aboutText: {

  color: '#47305F',
  fontSize: 16,
},
user: {
  color: '#47305F',
  fontSize: 24,
},
hello: {
  color: '#47305F',
  fontSize: 40,
}
});