import React, { Component } from 'react';
import { AppRegistry, ScrollView, View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import vocab from '../../../resources/vocab'
import { stylesObj } from './styles';
import NavBar from '../../components/NavBar'

const styles = StyleSheet.create(stylesObj)

const topics = Object.keys(vocab).reduce(
  ( arr, currentItem) => {
    let firstKey = (Object.keys(vocab[currentItem])[0])
    let topic    = { title: currentItem,
                    mainImg: vocab[currentItem][firstKey].img['04'] 
                  }
    return arr.concat([topic]) 
  }, []);

export default class HomeScene extends Component {

  _navigate(topic) {
	  this.props.navigator.push({
	    name: 'LevelOne',
      passProps: { topic }
	  })
  }
  topics () {
    console.log(topics)
    return topics.map(topic => 
    (<View style= {styles.menuTopic}>
      <Image 
          style={styles.menuTopic_image}
          source={{ uri: topic.mainImg }}
      / >
      <View>
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


