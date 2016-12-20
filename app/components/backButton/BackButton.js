import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'; 
import { stylesObj } from './styles';
const styles = StyleSheet.create(stylesObj)

const SendButton = ({ onPress, value, text }) => {
	return (
		<View>
			<TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
	          <Text style={styles.buttonText}>
	            { text || 'Submit'}
	          </Text>
	        </TouchableOpacity>
      	</View>
    )
}

export default SendButton