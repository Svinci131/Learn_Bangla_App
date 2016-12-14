import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'; 
import { stylesObj } from './styles';
const styles = StyleSheet.create(stylesObj)

const SendButton = ({ onPress }) => {
	return (
		<View>
			<TouchableOpacity style={styles.button} onPress={() => onPress()}>
	          <Text style={styles.buttonText}>
	            Submit
	          </Text>
	        </TouchableOpacity>
      	</View>
    )
}

export default SendButton