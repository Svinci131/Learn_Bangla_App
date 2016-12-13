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
    width: 375,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10
  },
  menuTopic_image: {
    width: 180,
    height: 80
  },
  menuTopic_textwrapper: {
    alignItems: 'center'
  },
  menuTopic_text: {
    fontSize: 14,
    color: dark,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center'
  }
}

export { stylesObj }