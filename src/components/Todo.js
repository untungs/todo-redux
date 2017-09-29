import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Todo = ({ text }) => (
  <Text style={styles.container}>
    {text}
  </Text>
)

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#efefef'
  }
})

export default Todo
