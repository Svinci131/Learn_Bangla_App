import React, { Component } from 'react';
import { getWords } from '../../../data'
import { LevelOneComp } from '../component/levelOne'

export default class LevelOneScene extends Component {
  componentWillMount () {
    const { topic } = this.props
    const words = getWords(topic)
    let data = getUpdatedData(words)
    this.setState(data)
  }
  _updateCurrentWord (shouldRemove) {
    let data = getUpdatedData(this.state.words, this.state.index, shouldRemove)
    this.setState(data)
  }
  _updateAnswer(e) {
    this.setState({answer: e})
  }
  _checkAnswer(e) {
    const { answer, currentCard } = this.state
    guess = answer.toLowerCase().trim()
    bangla = currentCard.bangla.toLowerCase().trim()
    if (guess === currentCard.bangla) this._updateCurrentWord(true)
    else this._updateCurrentWord(false)
  }
  render() {
    return (
      <LevelOneComp 
        count = { this.state.words.length }
        topic = { this.props.topic }
        currentCard = { this.state.currentCard }
        onPress = {this._checkAnswer.bind(this) }
        onChange = {this._updateAnswer.bind(this) } />
    )
  }
}

function getUpdatedData (words, currentIndex, shouldRemove) {
  if (shouldRemove) {
    words.splice(currentIndex, 1)
  }
  let randomIndex = getRandomListIndex(words)
  let word = words[randomIndex]
  return {
    currentCard: word,
    index: randomIndex,
    words: words,
    answer: ''
  }
}

function getRandomListIndex (list) {
    let listLength  = (list.length)-1
    let randomIndex = Math.floor(Math.random()*(listLength))
    return randomIndex
}