import { StyleSheet } from 'react-native';
import { lightest,
          lighter,
          dark,
          darker,
          accentOne,
          accentTwo } from '../../../styles/colors'


const stylesObj = {
  button: {
    backgroundColor: accentOne,
    padding: 12,
    borderColor: accentOne,
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    width: 100,
    height: 50,
    alignItems: 'center'
  },
  buttonText: {
    color: lightest,
    fontSize: 18
  }
}

export { stylesObj }