import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Todo = ({ text, completed, onClick }) => (
  <Text
    onPress={onClick}
    style={[
      styles.container,
      {
        color: completed ? 'grey' : 'black',
        textDecorationLine: completed ? 'line-through' : 'none'
      }
    ]}
  >
    {text}
  </Text>
)

const styles = StyleSheet.create({
  container: {
    padding: 16
  }
})

export default Todo
