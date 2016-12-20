import { StyleSheet } from 'react-native';
import { lightest,
          lighter,
          dark,
          darker,
          accentOne,
          accentTwo } from '../../../styles/colors'

import { levelOne } from '../../../styles/dimensions'
const  { width } = levelOne


const stylesObj = {
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: darker,
    textAlign: 'left',
    width: width,
    marginBottom: 20
  },
  mainContainer: {
    backgroundColor: 'steelblue',
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 20
  },
  levelContainer: {
    borderWidth: 1,
    borderColor: dark,
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: lighter,
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  bLetters: {
  }
};

export { stylesObj }