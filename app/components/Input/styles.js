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
  input: {
    borderColor:  'gray',
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    width: width
  }
}

export { stylesObj }