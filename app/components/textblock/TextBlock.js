import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import { stylesObj } from './styles';
const styles = StyleSheet.create(stylesObj)

const TextBlock = ({english, bangla, bLetters}) => {
   return (
	   	<View >
		  <Text style={styles.text}>English: {english}</Text>
		  <Text style={styles.text}>
		  	Bangla: {bangla}
		 	<Text style={styles.bLetters}> {bLetters}</Text>
		  </Text>
		</View>
	)
}

export default TextBlock