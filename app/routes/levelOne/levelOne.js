import React, { Component } from 'react';
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar'
import { stylesObj, } from './styles';
const styles = StyleSheet.create(stylesObj)

export default class LevelOneScene extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<NavBar />
        <Text>Level One: { this.props.topic }</Text>
      </View>
    );
  }
}
