import { StyleSheet } from 'react-native';
import { lightest,
          lighter,
          dark,
          darker,
          accentOne,
          accentTwo } from '../../../styles/colors'

const stylesObj = {
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightest,
  },
  menuTopic: {
    borderWidth: 1,
    borderColor: dark,
    width: 370,
    alignItems: 'center'
  },
  menuTopic_text: {
    fontSize: 14,
    color: dark,
    paddingTop: 10,
    paddingBottom: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
}

export { stylesObj }