import React, {useContext, useState} from 'react';
import {SafeAreaView, View, Pressable, TextInput, TouchableOpacity, StyleSheet, Text} from 'react-native';

import { Context } from '../navigation/ContextProvider';
import GlobalStyles from '../css/styles'

const LoginScreen = ({navigation}) => {
  //save user input in state
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //get authentication logic from context
  const {login} = useContext(Context);

  function onLogin() {
    //TODO validation stuff
    
    login(email, password)
  }

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Text style={GlobalStyles.bigTitle}>Login</Text> 
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
      <TouchableOpacity style={GlobalStyles.buttonPrimary} onPress={() => onLogin()} ><Text style={GlobalStyles.buttonText}>LOGIN</Text></TouchableOpacity>
      <Pressable  onPress={() => navigation.navigate(("Sign Up"))}>
        <Text>Dont have an account yet? Sign up</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
});