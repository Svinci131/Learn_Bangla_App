import React, { Component } from 'react';
import { AppRegistry, View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import vocab from '../../../resources/vocab'
import { stylesObj } from './styles';
import NavBar from '../../components/NavBar'

const styles = StyleSheet.create(stylesObj)
const topics = Object.keys(vocab).reduce(( arr, currentItem) => { return arr.concat([currentItem]) }, []);

export default class HomeScene extends Component {

  _navigate(topic) {
	  this.props.navigator.push({
	    name: 'LevelOne',
      passProps: { topic }
	  })
  }
  topics () {
    return topics.map(topic => 
    (<TouchableHighlight onPress={() => this._navigate(topic)}>
      <Text style={styles.menuTopic}> { topic } </Text>
    </TouchableHighlight>)
    )
  }
  render() {
    console.log(NavBar)
    return (
      <View style={ styles.mainContainer }>
        <NavBar />
        <View style={ styles.homeMenu }>
	       {this.topics()}
      	</View>
        	        <TouchableHighlight style={styles.menuTopic} onPress={() => this._navigate()}>
	          <Text>Tap me to load the next scene</Text>
	        </TouchableHighlight>

      </View>
    );
  }
  
}


