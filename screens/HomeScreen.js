/* Author: Eeva Mattila 
Student number: 1903054 */

import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Modal, Pressable } from 'react-native';
import firestore from "@react-native-firebase/firestore"

import { Context } from '../navigation/ContextProvider';
import GlobalStyles from '../css/styles'

import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
  //get user information from context
  const {user} = useContext(Context);

  //support for modal and words
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState();
  const [words, setWords] = useState([]);
  const [index, setIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(false);
  const [currentWord1, setCurrentWord1] = useState();
  const [currentWord2, setCurrentWord2] = useState();

  //update the amount of words to review in main display in real time
  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .doc(user.uid)
      .collection('Words')
      .onSnapshot(querySnapshot  => {
        //get the amount of words
        setAmount(querySnapshot.size)

        //array for words and a unique key
        const w = [];
        //get the words from database and push to array
        querySnapshot.forEach(documentSnapshot => {
          w.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
            word1: documentSnapshot.data().word1,
            word2: documentSnapshot.data().word2
          });
        });

        //save array in state
        shuffle(w)
        setWords(w);

        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  //shuffle words array so the words won't be displayed in the same order every time
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  }

  //begin reviewing words
  function onReview() {
    //shuffle the word list so the order will be different from last time
    shuffle(words)
    setCurrentWord1(words[index].word1);
    setCurrentWord2(words[index].word2);
    setModalVisible(true)
    //increment the index
    setIndex(index+1) 
  }
  //show answer
  function onShowWord() {
    setWordVisible(true)   
  }

  //show next word
  function onNext() {
    //hide answer
    setWordVisible(false)

    //only continue if there are any words left
    if(index < words.length) {
      setCurrentWord1(words[index].word1);
      setCurrentWord2(words[index].word2);
      setIndex(index+1) 
      //otherwise close the modal and reset the index
    } else {
      setIndex(0);
      setModalVisible(false)      
    }   
  }

  //reset index if the user closes the modal
  function closeModal() {
    setIndex(0);
    setModalVisible(false)
    setWordVisible(false)
  }

  //TODO: this should be replaced with a spinning loader
  if (loading) {
    return (
      <SafeAreaView style={GlobalStyles.container}><Text>Loading</Text></SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Text style={GlobalStyles.mediumTitle}>You have {amount} words to review</Text>
      <TouchableOpacity style={GlobalStyles.buttonPrimary} onPress={() => onReview()} ><Text style={GlobalStyles.buttonText}>REVIEW</Text></TouchableOpacity>
      <Text style={GlobalStyles.textPurple} onPress={() => navigation.navigate(("Edit"))}>You can add words in the edit section</Text>
      <Modal 
      animationType="fade"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        Alert.alert("New item added");
      }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={GlobalStyles.mediumTitle}>{currentWord1}</Text>
            <Text style={GlobalStyles.mediumTitle}>{ wordVisible ? currentWord2 : ""}</Text>
          <Pressable style={GlobalStyles.buttonPrimary} onPress={onShowWord} ><Text style={GlobalStyles.buttonText}>Show</Text></Pressable>  
          <Pressable visible={wordVisible} onPress={closeModal} style={styles.closeButton}><Ionicons style={styles.ionicon}  name='close-sharp'></Ionicons></Pressable>
          <Pressable style={styles.next} onPress={onNext} ><Ionicons style={styles.ioniconNext}  name='chevron-forward-sharp'></Ionicons></Pressable>  
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
    justifyContent: 'center',
    backgroundColor: '#00000080'
  },
  modalView: {
    justifyContent: 'center',
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
  },
  ioniconNext: {
    fontSize: 40,
    color: 'white'
  },
  next: {
    backgroundColor: '#FB8B24',
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  } 
});