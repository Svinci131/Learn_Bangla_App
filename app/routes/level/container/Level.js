import React, { Component } from 'react';
/*components*/
import {levels} from '../components'
import NavBar from '../../../components/NavBar'
import SendButton from '../../../components/Button'
import { View, StyleSheet } from 'react-native';
/* styles */
import { stylesObj } from '../styles';
const styles = StyleSheet.create(stylesObj)
/* utils */
import { getWords } from '../../../data'
import { getUpdatedData, checkAnswer } from '../utils'


export default class LevelScene extends Component {
  componentWillMount () {
    const { topic } = this.props
    const words     = getWords(topic)
    let data        = getUpdatedData(words)
    this.setState(data)
  }
  updateCurrentWord (shouldRemove) {
    let { words, index } = this.state
    let data = getUpdatedData(words, index, shouldRemove)
    
    this.setState(data)
  }
  clearText() {
    this._textInput.setNativeProps({text: ''});
  }
  navigate(next) {
    const { topic } = this.props
    let name
    if (next) {
      name = (next < 4) ? 'Level' : 'Congrats'
    }
    this.props.navigator.push({
      name: name || 'Main',
      passProps: { 
        topic,
        level: next
      }
    })
  }
  _updateAnswer = (e) => (this.setState({answer: e}))
  _isComplete   = ()  => (this.state.words.length === 10)
  _showButton () {
    return (
      <SendButton 
        value={this.props.level+1}
        text='Next Level'
        onPress={this.navigate.bind(this)}/>
    )
  }
  _drawCard () {
    let { level } = this.props
    let info = {
      count       : this.state.words.length,
      topic       : this.props.topic,
      currentCard : this.state.currentCard,
      onPress     : checkAnswer.bind(this),
      onChange    : this._updateAnswer.bind(this),
      guess       : this.state.answer,
      navigate    : this.navigate.bind(this)
    }
    return (levels[level](info))
  }
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        { this._isComplete() ? this._showButton() : this._drawCard() }
      </View>
    )
  }
}



