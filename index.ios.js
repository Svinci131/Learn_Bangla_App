import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Navigator
} from 'react-native';
import HomeScene from './app/routes/home'
import LevelOne from './app/routes/levelOne'
import LevelTwo from './app/routes/levelTwo'

export default class Learn_Bangla extends Component {
  renderScene(route, navigator) { 
    var globalNavigatorProps = {navigator}
    if (route.name === 'Main') { 
      return <HomeScene navigator={navigator} />
    }
    else if (route.name === 'LevelOne') {
      return <LevelOne navigator={navigator} {...route.passProps} />
    }
    else if (route.name === 'LevelTwo') {
      return <LevelTwo navigator={navigator} {...route.passProps} />
    }
  }
  render() {
    return (
      <Navigator
      style={{ flex:1 }}
      initialRoute={{ name: 'Main' }}
      renderScene={ this.renderScene } />
    )
  }
}

AppRegistry.registerComponent('Learn_Bangla', () => Learn_Bangla);