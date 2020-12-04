import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TextInput, Modal, Pressable } from 'react-native';

import { Context } from '../navigation/ContextProvider';
import GlobalStyles from '../css/styles'

import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },

];


//change this
const Item = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const EditScreen = () => {
  const {user, logout} = useContext(Context);
  const [newItem1, setNewItem1] = useState();
  const [newItem2, setNewItem2] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  function closeModal() {
    setNewItem1()
    setNewItem2()
    setModalVisible(false)
  }

  function onAddNew() {
    if(!newItem1) {
      alert('enter first word')
      return
    } else if (!newItem2) {
      alert('enter second word')
      return
    }
    setNewItem1()
    setNewItem2()
    setModalVisible(false)
  }
  
  return (
    <SafeAreaView style={GlobalStyles.container}>
    <FlatList
    ListHeaderComponent={<Text>Title</Text>}
      data={DATA}
      renderItem={Item}
      keyExtractor={item => item.id}
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'pink'
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
  }
});