import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../../../components/NavBar'
import TextBlock from '../../../components/textblock'
import InputField from '../../../components/Input'
import LargeImage from '../../../components/LargeImage'
import SendButton from '../../../components/Button'
import { stylesObj } from '../styles';

const styles = StyleSheet.create(stylesObj)

import { convertFromHex } from '../../../utils';

const LevelTwoBody = ({ topic, currentCard, onPress, onChange, count, guess }) => {
    const { bangla, bLetters } = currentCard
    return (
        <View>
            <Text style = {styles.title} >
            Level Two: { topic }
            <Text>Total: {count}</Text>
            <Text style = {styles.subtitle} >
                Enter the English Translation
            </Text>
            </Text>
            <View style = {styles.levelContainer} >
                <Text style = {styles.text} >
                    Bangla: {bangla}
                    <Text style = {styles.bLetters} > 
                        {convertFromHex(bLetters)}
                    </Text>
                </Text>
                <InputField guess={guess} onChange = {onChange} />
                <SendButton onPress  = {() => onPress('english')} />
            </View>
        </View>
    )
}

export default LevelTwoBody