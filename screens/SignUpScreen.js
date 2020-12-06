/* Author: Eeva Mattila 
Student number: 1903054 */

import React, {useContext, useState} from 'react';
import {View, SafeAreaView, TextInput, Pressable, StyleSheet, TouchableOpacity, Text} from 'react-native';

import { Context } from '../navigation/ContextProvider';
import GlobalStyles from '../css/styles'

const SignUpScreen = ({navigation}) => {
  //save user input in state
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  //get authentication logic from context
  const {register} = useContext(Context);

  function onRegister() {
    //don't register a new user if the given passwords don't match
    if(password !== confirmPassword) {
      alert('passwords need to match')
      return
    }
    //register a new user with given email and password
    register(email, password)
  }

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Text style={GlobalStyles.bigTitle}>Sign Up</Text>
      <View>
        <View style={GlobalStyles.inputLabel}><Text style={GlobalStyles.inputLabelText}>Email</Text></View>
        <TextInput style={GlobalStyles.formInput}
          numberOfLines={1}
          autoCapitalize='none'
          textContentType='emailAddress'
          onChangeText={(userEmail) => setEmail(userEmail)}
        />
      </View>
      <View>
        <View style={GlobalStyles.inputLabel}><Text style={GlobalStyles.inputLabelText}>Password</Text></View>
        <TextInput style={GlobalStyles.formInput}
          numberOfLines={1}
          autoCapitalize='none'
          onChangeText={(userPassword) => setPassword(userPassword)}
          secureTextEntry={true}
        />
      </View>
      <View>
        <View style={GlobalStyles.inputLabel}><Text style={GlobalStyles.inputLabelText}>Confirm password</Text></View>
        <TextInput style={GlobalStyles.formInput}
                numberOfLines={1}
                autoCapitalize='none'
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                secureTextEntry={true}
              />
      </View>
      <TouchableOpacity style={GlobalStyles.buttonPrimary} onPress={() => onRegister()} ><Text style={GlobalStyles.buttonText}>Sign Up</Text></TouchableOpacity>
        <Text style={GlobalStyles.textPurple} onPress={() => navigation.navigate(("Login"))}>Already have an account? Login</Text>
    </SafeAreaView>
  );
};

export default SignUpScreen;


const styles = StyleSheet.create({
});