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
  mainImageBox: {
    borderWidth: 1,
    borderColor: accentTwo,
    height:width-20,
    width: width-20,
    marginTop: 10,
    marginBottom: 20
  }
}

export { stylesObj }