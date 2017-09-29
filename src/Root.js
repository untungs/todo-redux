import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Toolbar from './components/Toolbar'
import ConnectedTodoList from './containers/ConnectedTodoList'
import AddTodo from './containers/AddTodo'

class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar title="Todo Redux" />
        <AddTodo />
        <ConnectedTodoList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Root
