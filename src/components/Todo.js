import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Todo = ({ text, completed, onClick, onRemoveTodoClick }) => (
  <View style={styles.container}>
    <Text
      onPress={onClick}
      style={{
        flex: 1,
        color: completed ? 'grey' : 'black',
        textDecorationLine: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </Text>
    <TouchableOpacity onPress={onRemoveTodoClick}>
      <Text style={{ color: 'grey' }}>x</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16
  }
})

export default Todo
