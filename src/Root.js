import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Toolbar from './components/Toolbar'
import AddTodo from './containers/AddTodo'

class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar title="Todo Redux" />
        <AddTodo />
        <View style={styles.content}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
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
