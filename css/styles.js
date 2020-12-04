import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40
  },
  buttonPrimary: {
    backgroundColor: "#FB8B24",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 10
    }, 
  buttonText: {
      fontSize:20,
      color: '#fff'
    },
  formInput: {
    height: 50,
    borderColor: '#47305F',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 12
  },
  bigTitle: {
    color: '#47305F',
    fontSize: 50,
    marginBottom: 50
  },
  inputLabel: {
    backgroundColor: "#fff",
    position: 'absolute',
    left: 10,
    top: -10,
    zIndex: 2,
    paddingHorizontal: 3
  },
  inputLabelText: {
    fontSize: 16,
    color: '#FB8B24'
  }
});

export default GlobalStyles