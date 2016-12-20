import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Navigator
} from 'react-native';
import HomeScene from './app/routes/home'
import Level from './app/routes/level'
import Congrats from './app/routes/congrats'

export default class Learn_Bangla extends Component {
  renderScene(route, navigator) { 
    var globalNavigatorProps = {navigator}
    if (route.name === 'Main') { 
      return <HomeScene navigator={navigator} />
    }
    else if (route.name === 'Level') {
      return <Level navigator={navigator} {...route.passProps} />
    }
    else if (route.name === 'Congrats') {
      return <Congrats navigator={navigator} {...route.passProps} />
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