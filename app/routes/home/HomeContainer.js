import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar'
import Topics from './topics'
import { stylesObj } from './styles';
const styles = StyleSheet.create(stylesObj)

import { getTopics } from '../../data'
const topics = getTopics()

export default class HomeScene extends Component {
  _navigate(topic) {
    let level = 3;
	  this.props.navigator.push({
	    name: 'Level',
      passProps: { 
        topic,
        level
      }
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


