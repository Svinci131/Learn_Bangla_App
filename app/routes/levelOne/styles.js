import { StyleSheet } from 'react-native';
import { lightest,
          lighter,
          dark,
          darker,
          accentOne,
          accentTwo } from '../../../styles/colors'

const stylesObj = {
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: darker,
    textAlign: 'left',
    width: 300
  },
  mainContainer: {
    backgroundColor: 'steelblue',
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 5000,
  },
  homeMenu: {
    backgroundColor: 'steelblue',
    width: 50
  },
  menuTopic: {
    color: 'white', 
    margin: 10,
    textAlign: 'center',
  },
  menuTopicView: {
    width: 50,
    borderColor: 'steelblue',
    backgroundColor: 'steelblue'
  }
};

export { stylesObj }