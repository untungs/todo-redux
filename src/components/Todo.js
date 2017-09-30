import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Todo = ({ text, completed, onClick, onRemoveTodoClick }) => (
  <TouchableOpacity
    onPress={onClick}
    style={styles.container}
  >
    <Text
      style={{
        flex: 1,
        color: completed ? 'grey' : 'black',
        textDecorationLine: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </Text>
    <TouchableOpacity
      onPress={onRemoveTodoClick}
      hitSlop={{ top: 8, left: 8, bottom: 8, right: 8 }}
    >
      <Text style={{ color: 'grey' }}>x</Text>
    </TouchableOpacity>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16
  }
})

export default Todo
