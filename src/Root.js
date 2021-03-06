import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import Toolbar from './components/Toolbar'
import FilterGroup from './components/FilterGroup'
import VisibleTodoList from './containers/VisibleTodoList'
import AddTodo from './containers/AddTodo'

class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar title="Todo Redux" />
        <FilterGroup />
        <VisibleTodoList />
        <KeyboardAvoidingView behavior="padding">
          <AddTodo />
        </KeyboardAvoidingView>
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
