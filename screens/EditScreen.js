/* Author: Eeva Mattila 
Student number: 1903054 */

import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TextInput, Modal, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from "@react-native-firebase/firestore"

import { Context } from '../navigation/ContextProvider';
import GlobalStyles from '../css/styles'

const EditScreen = () => {
  //get user information from context
  const {user} = useContext(Context);
  
  //save user input in state
  const [newItem1, setNewItem1] = useState();
  const [newItem2, setNewItem2] = useState();

  //support for modal and words
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState([]);

  //Item used for displaying words in a list
  const Item = ({ item }) => (
    <View style={styles.item}>
      <View>
        <Text style={GlobalStyles.textOrange}>{item.word1}</Text>
      </View>
      <View>
        <Text style={GlobalStyles.textPurple}>{item.word2}</Text>
      </View>
      <Pressable onPress={() => removeWords(item)} style={styles.closeButton}><Ionicons style={styles.removeIonicon}  name='close-sharp'></Ionicons></Pressable> 
    </View>
  );

  //update the database in real time
  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .doc(user.uid)
      .collection('Words')
      .onSnapshot(querySnapshot  => {

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
        setWords(w);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  //reset words if modal is closed without creating a new word
  function closeModal() {
    setNewItem1()
    setNewItem2()
    setModalVisible(false)
    console.log('Words' + words);
  }

  //remove a specific word from database
  function removeWords(item) {
    firestore()
    .collection('Users')
    .doc(user.uid)
    .collection('Words')
    .doc(item.key)
    .delete()
    .then(() => {
      console.log('Word deleted!');
    });
  }

  //Add new words to database in the current users collection
  function onAddNew() {
    if(!newItem1) {
      alert('enter first word')
      return
    } else if (!newItem2) {
      alert('enter second word')
      return
    }
    firestore()
      .collection('Users')
      .doc(user.uid)
      .collection('Words')
      .add({
        word1: newItem1,
        word2: newItem2
      })
    setNewItem1()
    setNewItem2()
    setModalVisible(false)
  }
  
  if (loading) {
    return (
      <SafeAreaView style={GlobalStyles.container}><Text>Loading</Text></SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={GlobalStyles.container}>
    <FlatList
    ListHeaderComponent={<Text style={styles.title}>Your words</Text>}
      data={words}
      renderItem={Item}
      keyExtractor={item => item.key}
    />
    <Pressable style={styles.floatingButton} onPress={() => setModalVisible(true)} ><Ionicons style={styles.ionicon} color='white' name='add-sharp'></Ionicons></Pressable>
    <Modal 
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        Alert.alert("New item added");
      }}>
      <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TextInput style={GlobalStyles.formInput}
          numberOfLines={1}
          placeholder='Word 1'
          onChangeText={(item1) => setNewItem1(item1)}
        />
        <TextInput style={GlobalStyles.formInput}
          numberOfLines={1}
          placeholder='Word 2'
          onChangeText={(item2) => setNewItem2(item2)}
        />
        <Pressable style={GlobalStyles.buttonPrimary} onPress={onAddNew} ><Text style={GlobalStyles.buttonText}>Add to list</Text></Pressable>   
        <Pressable onPress={closeModal} style={styles.closeButton}><Ionicons style={styles.ionicon}  name='close-sharp'></Ionicons></Pressable>
        </View>
      </View>
      </Modal> 
    </SafeAreaView>
  );
}

export default EditScreen;

const styles = StyleSheet.create({
  floatingButton: {
    backgroundColor: '#FB8B24',
    position: 'absolute',
    bottom: 20,
    right:20,
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  item: {
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#47305F',
    backgroundColor: 'white'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    padding: 55,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  ionicon: {
    fontSize: 34,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
  separator: {
    position: 'absolute',
    top: '100%',
    left: '50%'
  },
  removeIonicon: {
    fontSize: 20
  },
  title: {
    color: '#47305F',
    fontSize: 40,
    marginVertical: 20,
    alignSelf: 'center'
  }
});