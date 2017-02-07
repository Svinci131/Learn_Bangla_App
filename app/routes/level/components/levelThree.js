import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { stylesObj } from '../styles';
import NavBar from '../../../components/NavBar'
import TextBlock from '../../../components/textblock'
import InputField from '../../../components/Input'
import LargeImage from '../../../components/LargeImage'
import SendButton from '../../../components/Button'
import LevelHeader from './subComponents/LevelHeader'

const styles = StyleSheet.create(stylesObj)

const LevelThreeBody = ({ topic, currentCard, onPress, onChange, count, guess }) => {
    const { english } = currentCard
    return (
        <View>
            <LevelHeader count={count} level='One' topic={topic} />
            <View style={styles.levelContainer}>
                <Text style={styles.subtitle}>
                    Enter the Bangla Translation
                </Text>
                <LargeImage { ...currentCard } />
                <Text style = {styles.text} >
                    { english }
                </Text>
                <InputField guess={guess} onChange={onChange} />
                <SendButton onPress={() => onPress('bangla')}/>
            </View>
        </View>
    )
}

export default LevelThreeBody