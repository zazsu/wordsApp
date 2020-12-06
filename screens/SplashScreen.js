/* Author: Eeva Mattila 
Student number: 1903054 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30
  }
});