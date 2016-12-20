import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import { stylesObj } from './styles';
const styles = StyleSheet.create(stylesObj)

const TextBlock = ({currentCard,}) => {
	console.log('here!!', currentCard.english)
   return (
	   	<View >
		  <Text style={styles.text}>English: {currentCard.english}</Text>
		  <Text style={styles.text}>
		  	Bangla: {currentCard.bangla}
		 	<Text style={styles.bLetters}> {currentCard.bLetters}</Text>
		  </Text>
		</View>
	)
}

export default TextBlock