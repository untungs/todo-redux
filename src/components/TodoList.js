import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Todo from './Todo'

class TodoList extends Component {
  keyExtractor = (item, index) => item.id;

  renderTodo = ({ item }) => (
    <Todo
      text={item.text}
      completed={item.completed}
      onClick={() => { this.props.onTodoClick(item.id) }}
    />
  )

  renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: '#efefef' }} />
  )

  render() {
    const todos = this.props.todos

    return (
      <FlatList
        data={todos}
        renderItem={this.renderTodo}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.renderSeparator}
      />
    )
  }
}

export default TodoList