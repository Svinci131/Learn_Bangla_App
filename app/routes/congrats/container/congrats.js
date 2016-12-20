import React, { Component } from 'react';
import { AppRegistry, ScrollView, View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { stylesObj } from '../styles';
const styles = StyleSheet.create(stylesObj)

export default class Congrats extends Component {
  _navigate(name, prop) {
	  this.props.navigator.push({
	    name: name,
      passProps: { 
        ...props
      }
	  })
  }
  render() {
    var _scrollView: ScrollView;
    return (
      <View style={ styles.mainContainer }>
        <Text>Congrats!!</Text>
      </View>
    );
  }
  
}
