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
    fontWeight: 'bold',
    color: dark,
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
  level_header_title: {
    fontSize: 18,
    color: dark,
    fontWeight: 'bold'
  },
  level_header_total: {
    fontSize: 18,
    color: dark
  },
  row: {
    width: width,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    // borderColor: 'red',
    // borderWidth: 1,
    maxHeight: 40
  },
  textLarge: {
    color: lighter,
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  }
};

export { stylesObj }