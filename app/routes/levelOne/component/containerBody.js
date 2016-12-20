import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { stylesObj } from '../styles';
import NavBar from '../../../components/NavBar'
import TextBlock from '../../../components/textblock'
import InputField from '../../../components/Input'
import LargeImage from '../../../components/LargeImage'
import SendButton from '../../../components/Button'

const styles = StyleSheet.create(stylesObj)

const ContainerBody = ({ topic, currentCard, onPress, onChange, count, guess }) => {
    console.log('test', guess)
    return (
        <View>
            <Text style={styles.title}>
            Level One: { topic }
            <Text>Total: {count}</Text>
            <Text style={styles.subtitle}>
                Enter the Bangla Translation
            </Text>
            </Text>
            <View style={styles.levelContainer}>
                <LargeImage currentCard={currentCard} />
                <TextBlock currentCard={currentCard} />
                <InputField onChange={onChange} guessr={guess}/>
                <SendButton onPress={() => onPress('bangla')}/>
            </View>
        </View>
    )
}

export default ContainerBody