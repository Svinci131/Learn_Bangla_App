import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NavBar from '../../../components/NavBar'
import TextBlock from '../../../components/textblock'
import InputField from '../../../components/Input'
import LargeImage from '../../../components/LargeImage'
import SendButton from '../../../components/Button'
import LevelHeader from './subComponents/LevelHeader'
import { toTitleCase } from '../../../utils'
import { stylesObj } from '../styles'

const styles = StyleSheet.create(stylesObj)

import { convertFromHex } from '../../../utils';

const LevelTwoBody = ({ topic, currentCard, onPress, onChange, count, guess, navigate }) => {
    const { bangla, bLetters } = currentCard
    return (
        <View>
            <LevelHeader count={count} level='Two' topic={topic} />
            <View style = {styles.levelContainer} >
                <View style={styles.level_two_text_block}>
                    <Text style = {styles.level_two_text}>Bangla: {toTitleCase(bangla)}</Text>
                    <Text style = {styles.level_two_text} > 
                        {convertFromHex(bLetters)}
                    </Text>
                    <Text style = {styles.level_two_text}>English:</Text>
                </View>
                
                <View style={{marginBottom: 20}}>
                 <InputField guess={guess} onChange = {onChange} />
                </View>
                <View style={styles.row}>
                    <SendButton text='Menu' onPress={() => navigate()}/>
                    <SendButton onPress  = {() => onPress('english')} />
                </View>
            </View>
        </View>
    )
}

export default LevelTwoBody