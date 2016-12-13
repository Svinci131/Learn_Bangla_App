import { StyleSheet } from 'react-native';
import { lightest,
          lighter,
          dark,
          darker,
          accentOne,
          accentTwo } from '../../../styles/colors'


const stylesObj = {
  navBar: {
    backgroundColor: dark,
    width: 500,
    paddingTop: 20,
    paddingBottom: 5,
    marginBottom: 35,
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
  }
}

export { stylesObj }