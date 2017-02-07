import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SendButton from '../../../../components/Button'
import { stylesObj } from '../../styles'
import { toTitleCase } from '../../../../utils'

const styles = StyleSheet.create(stylesObj)

const LevelHeader = ({level, topic, count}) => (
  <View style={styles.row}>
    <Text style={styles.level_header_title}>{/*style={styles.title*/}
      Level { level }: { toTitleCase(topic) }
    </Text>
    <Text style={styles.level_header_total}> Total: {count}</Text>
  </View>
)
export default LevelHeader