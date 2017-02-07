import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { stylesObj } from '../../styles'
import SendButton from '../../../../components/Button'

const styles = StyleSheet.create(stylesObj)

const LevelFooter = ({navigate, onPress}) => (
	<View style={styles.row}>
	    <SendButton text='Menu' onPress={() => navigate()}/>
	    <SendButton onPress  = {() => onPress('english')} />
	</View>
)

export default LevelFooter