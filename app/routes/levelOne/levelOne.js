import React, { Component } from 'react';
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import { getWords } from '../../data'
import vocab from '../../../resources/vocab'
import { LevelOneComp } from './component/levelOne'

export default class LevelOneScene extends Component {
  componentWillMount () {
    const { topic } = this.props
    const words = getWords(topic)
    let randomIndex = getRandomListIndex(words)
    console.log('didmount', words.length, randomIndex, words[randomIndex])
    this.setState({
      currentCard: words[randomIndex],
      index: randomIndex,
      words: words
    })
  }
  _updateCurrentWord () {
    console.log('update')
    let randomIndex = getRandomListIndex(this.state.words)
    console.log('update', this.state.words)
    this.setState({
      currentCard: this.state.words[randomIndex],
      index: randomIndex
    }, () => {
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

function getRandomListIndex (list) {
    let listLength  = (list.length)-1
    let randomIndex = Math.floor(Math.random()*(listLength))
    return randomIndex
}