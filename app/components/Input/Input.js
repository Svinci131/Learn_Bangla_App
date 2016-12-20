import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native'; 
import { stylesObj } from './styles';
const styles = StyleSheet.create(stylesObj)

const InputField = ({ onChange, guess }) => {
	return (
		<View style={ styles.InputField } >
			<TextInput 
				style={ styles.input }
				value={ guess }
				editable = {true}
				onChangeText={(e) => onChange(e)}
				clearTextOnFocus={true}
			/>
    	</View>
    )
}

export default InputField