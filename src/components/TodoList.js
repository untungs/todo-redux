import React, { Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Todo from './Todo'

class TodoList extends Component {
  keyExtractor = (item, index) => item.id;

  renderTodo = ({ item }) => (
    <Todo text={item.text} />
  )

  render() {
    const todos = this.props.todos

    return (
      <FlatList
        data={todos}
        renderItem={this.renderTodo}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}

export default TodoList