import React from 'react';
import { Image, StyleSheet } from 'react-native'; 
import { stylesObj } from './styles';
const styles = StyleSheet.create(stylesObj)

const LargeImage = ({ currentCard }) => {
	return (
		<Image 
    		source={{ uri: currentCard.img['05'] }}
    		style={styles.mainImageBox}
    	/>
    )
}

export default LargeImage