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
  }
};

export { stylesObj }