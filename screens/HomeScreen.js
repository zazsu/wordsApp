import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Modal, Pressable } from 'react-native';

import { Context } from '../navigation/ContextProvider';
import GlobalStyles from '../css/styles'

import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const {user, logout} = useContext(Context);
  const [modalVisible, setModalVisible] = useState(false);
  

  function closeModal() {
    setModalVisible(false)
  }

  function onBegin() {
    setModalVisible(true)
  }

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Text style={styles.text}>You have xx cards to review</Text>
      <TouchableOpacity style={GlobalStyles.buttonPrimary} onPress={() => onBegin()} ><Text style={GlobalStyles.buttonText}>BEGIN</Text></TouchableOpacity>
      <Modal 
      animationType="fade"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        Alert.alert("New item added");
      }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Pressable onPress={closeModal} style={styles.closeButton}><Ionicons style={styles.ionicon}  name='close-sharp'></Ionicons></Pressable>
          </View>
        </View>
      </Modal> 
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    paddingHorizontal: 50,
    textAlign: "center",
    color: "#47305F"
  }, 
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#00000080'
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: "white",
    padding: 55,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  ionicon: {
    fontSize: 34,
  }
  
});