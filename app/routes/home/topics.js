import React, { Component } from 'react';
import { AppRegistry, ScrollView, View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { stylesObj } from './styles';
import NavBar from '../../components/NavBar'
import { getTopics } from '../../data'
const styles = StyleSheet.create(stylesObj)

const topics = getTopics()


const Topic = ({topic, onPress}) => {
	return (
	    <View style= {styles.menuTopic}>
	      <Image 
	          style={styles.menuTopic_image}
	          source={{ uri: topic.mainImg }}
	      />
	      <View style={styles.menuTopic_textwrapper}>
	        <TouchableHighlight onPress={() => onPress(topic.title)}>
	          <Text style={styles.menuTopic_text}> { topic.title } </Text>
	        </TouchableHighlight>
	      </View>
	     </View>
    )
}

const Topics = ({ onPress }) => {
  return (
    <View>
      { 
        topics.map((topic, i) => {
          return (
          	<Topic 
	          	topic={topic} 
	          	key={i} 
	          	onPress={onPress} 
	          />
	         )
        })
      }
    </View>
  )
}

export default Topics