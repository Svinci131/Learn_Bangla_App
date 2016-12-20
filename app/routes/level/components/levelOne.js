import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { stylesObj } from '../styles';
import NavBar from '../../../components/NavBar'
import TextBlock from '../../../components/textblock'
import InputField from '../../../components/Input'
import LargeImage from '../../../components/LargeImage'
import SendButton from '../../../components/Button'

const styles = StyleSheet.create(stylesObj)


const LevelOneBody = ({ topic, currentCard, onPress, onChange, count, navigate, guess }) => {
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
                <LargeImage { ...currentCard } />
                <TextBlock  { ...currentCard } />
                <InputField onChange={onChange} guess={guess}/>
                <View style={styles.row}>
                    <SendButton text='Menu' onPress={() => navigate()}/>
                    <SendButton onPress={() => onPress('bangla')}/>
                </View>
            </View>
        </View>
    )
}

const Modal = ({shouldShow}) => {

}
export default LevelOneBody