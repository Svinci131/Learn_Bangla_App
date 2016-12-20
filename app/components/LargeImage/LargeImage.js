import React from 'react';
import { Image, StyleSheet } from 'react-native'; 
import { stylesObj } from './styles';
const styles = StyleSheet.create(stylesObj)

const LargeImage = ({ img }) => {
	return (
		<Image 
    		source={{ uri: img['05'] }}
    		style={styles.mainImageBox}
    	/>
    )
}

export default LargeImage