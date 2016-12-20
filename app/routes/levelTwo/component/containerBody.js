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
    return (
        <View>
            <Text style={styles.title}>
            Level Two: { topic }
            <Text>Total: {count}</Text>
            <Text style={styles.subtitle}>
                Enter the English Translation
            </Text>
            </Text>
            <View style={styles.levelContainer}>
                <Text style={styles.text}>
                    Bangla: {currentCard.bangla}
                    <Text style={styles.bLetters}> {currentCard.bLetters}</Text>
                </Text>
                <InputField onChange={onChange} guessr={guess}/>
                <SendButton onPress={() => onPress('english')}/>
            </View>
        </View>
    )
}

export default ContainerBody