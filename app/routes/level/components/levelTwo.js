import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NavBar from '../../../components/NavBar'
import TextBlock from '../../../components/textblock'
import InputField from '../../../components/Input'
import LargeImage from '../../../components/LargeImage'
import SendButton from '../../../components/Button'
import LevelHeader from './subComponents/LevelHeader'
import { stylesObj } from '../styles'

const styles = StyleSheet.create(stylesObj)

import { convertFromHex } from '../../../utils';

const LevelTwoBody = ({ topic, currentCard, onPress, onChange, count, guess }) => {
    const { bangla, bLetters } = currentCard
    return (
        <View>
            <LevelHeader count={count} level='Two' topic={topic} />
            <View style = {styles.levelContainer} >
                <Text style = {styles.textLarge}>Bangla: {bangla}</Text>
                <Text style = {styles.textLarge} > 
                    {convertFromHex(bLetters)}
                </Text>
                <InputField guess={guess} onChange = {onChange} />
                <SendButton onPress  = {() => onPress('english')} />
            </View>
        </View>
    )
}

export default LevelTwoBody