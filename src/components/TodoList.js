import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Todo from './Todo'

class TodoList extends Component {
  keyExtractor = (item, index) => item.id;

  renderTodo = ({ item }) => (
    <Todo
      text={item.text}
      completed={item.completed}
      onClick={() => this.props.onTodoClick(item.id)}
      onRemoveTodoClick={() => this.props.onRemoveTodoClick(item.id)}
    />
  )

  renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: '#efefef' }} />
  )

  render() {
    const { todos, emptyStateText } = this.props

    return (
      <View style={styles.container}>
        <FlatList
          data={todos}
          renderItem={this.renderTodo}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
        />
        <View
          style={[
            styles.emptyStateStyle,
            { display: emptyStateText ? 'flex' : 'none' }
          ]}
        >
          <Text style={{ color: 'grey' }}>
            {emptyStateText}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emptyStateStyle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default TodoList