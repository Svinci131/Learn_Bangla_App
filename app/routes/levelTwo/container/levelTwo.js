import React, { Component } from 'react';
import { getWords } from '../../../data'
import { LevelTwoComp } from '../component/levelTwo'
import {  
  getRandomListIndex,
  getUpdatedData,
  checkAnswer
} from '../../../utils'

export default class LevelTwoScene extends Component {
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
  render() {
    return (
      <LevelTwoComp 
        count       = { this.state.words.length }
        topic       = { this.props.topic }
        currentCard = { this.state.currentCard }
        onPress     = { checkAnswer.bind(this) }
        onChange    = { this._updateAnswer.bind(this) } 
        guess       = { this.state.answer }
      />
    )
  }
}