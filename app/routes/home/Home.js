import React, { Component } from 'react';
import { AppRegistry, ScrollView, View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { stylesObj } from './styles';
import NavBar from '../../components/NavBar'
import { getTopics } from '../../data'
const styles = StyleSheet.create(stylesObj)

const topics = getTopics()

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
      <Image 
          style={styles.menuTopic_image}
          source={{ uri: topic.mainImg }}
      / >
      <View style={styles.menuTopic_textwrapper}>
      <TouchableHighlight onPress={() => this._navigate(topic.title)}>
        <Text style={styles.menuTopic_text}> { topic.title } </Text>
      </TouchableHighlight>
      </View>
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


