import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { stylesObj } from '../styles';
import NavBar from '../../../components/NavBar'
const styles = StyleSheet.create(stylesObj)

export const LevelOneComp = ({ topic, currentCard, onPress }) => {
    return (
      <View style={styles.container}>
        <NavBar />
        <Text style={styles.title}>Level One: { topic }</Text>
        <View>
	      <Text>English: {currentCard.english}</Text>
	      <Text>Bangla: {currentCard.bangla}</Text>
	    </View> 
	    <Button color="#841584" onPress={() => onPress()} title='Submit' />
      </View>
    )
}
