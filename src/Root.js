import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import Toolbar from './components/Toolbar'
import TodoList from './components/TodoList'
import AddTodo from './containers/AddTodo'

class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar title="Todo Redux" />
        <AddTodo />
        <TodoList
          todos={this.props.todos}
        />
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

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(Root)
