import React, { Component } from 'react';
import { getWords } from '../../../data'
import { LevelOneComp } from '../component/levelOne'
import {  
  getRandomListIndex,
  getUpdatedData,
  checkAnswer
} from '../../../utils'

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
  render() {
    console.log(this.state.answer)
    return (
      <LevelOneComp 
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

