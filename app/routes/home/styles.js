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
  navBar: {
    backgroundColor: dark,
    width: 500,
    paddingTop: 20,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBar_text_title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: lightest

  },
  navBar_text_span: {
    fontSize: 24,
    fontWeight: 'bold',
    color: lighter
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