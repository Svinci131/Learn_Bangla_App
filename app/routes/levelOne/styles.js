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
    width: width
  },
  mainContainer: {
    backgroundColor: 'steelblue',
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 5000,
  },
  levelContainer: {
    borderWidth: 1,
    borderColor: dark,
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: accentOne,
    padding: 12,
    borderColor: accentOne,
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20
  },
  buttonText: {
    color: lightest,
    fontSize: 18
  }
};

export { stylesObj }