import React, { Component } from 'react';
import { AppRegistry, ScrollView, View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
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
    (<View style= {styles.menuTopic}>
      <TouchableHighlight onPress={() => this._navigate(topic)}>
        <Text style={styles.menuTopic_text}> { topic } </Text>
      </TouchableHighlight>
    </View>)
    )
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
	       {this.topics()}
      	</ScrollView>
      </View>
    );
  }
  
}


