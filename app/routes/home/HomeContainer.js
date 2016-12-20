import React, { Component } from 'react';
import { AppRegistry, ScrollView, View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { stylesObj } from './styles';
import NavBar from '../../components/NavBar'
import { getTopics } from '../../data'
import Topics from './topics'
const styles = StyleSheet.create(stylesObj)

const topics = getTopics()

export default class HomeScene extends Component {
  _navigate(topic) {
	  this.props.navigator.push({
	    name: 'LevelOne',
      passProps: { topic }
	  })
  }
  render() {
    var _scrollView: ScrollView;
    return (
      <View style={ styles.mainContainer }>
        <NavBar />
        
        <ScrollView 
         ref={(scrollView) => { _scrollView = scrollView; }}
         automaticallyAdjustContentInsets={false}
         onScroll={() => { console.log('onScroll!'); }}
         scrollEventThrottle={200}
         style={ styles.topicsList }>

          <Topics onPress={this._navigate.bind(this)}/>
      	
        </ScrollView>
      </View>
    );
  }
  
}


