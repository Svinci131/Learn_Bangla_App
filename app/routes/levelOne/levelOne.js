import React, { Component } from 'react';
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import { getWords } from '../../data'
import vocab from '../../../resources/vocab'
import { LevelOneComp } from './component/levelOne'


export default class LevelOneScene extends Component {
  componentWillMount () {
    const { topic } = this.props
    const words = getWords(topic)
    let data = getUpdatedData(words)
    console.log('didmount', data.words.length, data.index, data.words[data.index])
    this.setState(data)
  }
  _updateCurrentWord () {
    let data = getUpdatedData(this.state.words)
    console.log('update', this.state.words.length)
    this.setState(data, () => {
      console.log('done', this.state.currentCard)
    })
  }
  render() {
    console.log('render', this.state)
    return (
      <LevelOneComp 
        topic = { this.props.topic }
        currentCard = { this.state.currentCard }
        onPress = {this._updateCurrentWord.bind(this) }  />
    );
  }
}

function getUpdatedData (words, shouldRemove) {
  let randomIndex = getRandomListIndex(words)
  let word = words[randomIndex]
  if (shouldRemove) words.splice(randomIndex, 1)
  return {
    currentCard: word,
    index: randomIndex,
    words: words
  }
}

function getRandomListIndex (list) {
    let listLength  = (list.length)-1
    let randomIndex = Math.floor(Math.random()*(listLength))
    return randomIndex
}