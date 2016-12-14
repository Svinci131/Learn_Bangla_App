import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native'; 
import { stylesObj } from './styles';
const styles = StyleSheet.create(stylesObj)

const InputField = ({ onChange }) => {
	return (
		<View style={ styles.InputField } >
			<TextInput style={styles.input} onChangeText={(e) => onChange(e)} />
    	</View>
    )
}

export default InputField