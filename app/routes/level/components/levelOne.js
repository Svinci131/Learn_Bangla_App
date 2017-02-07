import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { stylesObj } from '../styles';
import NavBar from '../../../components/NavBar'
import TextBlock from '../../../components/textblock'
import InputField from '../../../components/Input'
import LargeImage from '../../../components/LargeImage'
import SendButton from '../../../components/Button'
import { toTitleCase } from '../../../utils'
const styles = StyleSheet.create(stylesObj)

const LevelHeader = ({level, topic, count}) => (
  <View style={styles.row}>
    <Text style={styles.level_header_title}>{/*style={styles.title*/}
      Level { level }: { toTitleCase(topic) }
    </Text>
    <Text style={styles.level_header_total}> Total: {count}</Text>
  </View>
)

const LevelOneBody = ({ topic, currentCard, onPress, onChange, count, navigate, guess }) => {
    return (
      <View>
        <LevelHeader count={count} level='One' topic={topic} />
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

export default LevelOneBody