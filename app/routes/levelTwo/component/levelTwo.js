import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { stylesObj } from '../styles';
import NavBar from '../../../components/NavBar'
import ContainerBody from './containerBody'

const styles = StyleSheet.create(stylesObj)

export const LevelTwoComp = ({ topic, currentCard, onPress, onChange, count }) => {
    console.log(count, 'count')
    return (
      <View style={styles.container}>
        <NavBar />
        <ContainerBody
            topic       = { topic }
            currentCard = { currentCard }
            onPress     = { onPress }
            onChange    = { onChange }
            count       = { count }
        />
      </View>
    )
}

