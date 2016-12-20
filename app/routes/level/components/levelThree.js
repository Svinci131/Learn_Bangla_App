import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { stylesObj } from '../styles';
import NavBar from '../../../components/NavBar'
import TextBlock from '../../../components/textblock'
import InputField from '../../../components/Input'
import LargeImage from '../../../components/LargeImage'
import SendButton from '../../../components/Button'

const styles = StyleSheet.create(stylesObj)

const LevelThreeBody = ({ topic, currentCard, onPress, onChange, count, guess }) => {
    const { english } = currentCard
    return (
        <View>
            <Text style={styles.title}>
            Level Three: { topic }
            <Text>Total: {count}</Text>
            <Text style={styles.subtitle}>
                Enter the Bangla Translation
            </Text>
            </Text>
            <View style={styles.levelContainer}>
                <LargeImage { ...currentCard } />
                <Text style = {styles.text} >
                    { english }
                </Text>
                <InputField onChange={onChange} />
                <SendButton onPress={() => onPress('bangla')}/>
            </View>
        </View>
    )
}

export default LevelThreeBody