import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../redux/actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const getEmptyStateText = (todos, filter) => {
  if (todos.length > 0) {
    return ''
  }

  switch (filter) {
    case 'SHOW_ALL':
      return 'Have something to do later? List \'em down here.'
    case 'SHOW_COMPLETED':
      return 'Tap a todo to mark it as completed.'
    case 'SHOW_ACTIVE':
      return 'Nothing todo here 🚀'
  }
}

const mapStateToProps = state => {
  const todos = getVisibleTodos(state.todos, state.visibilityFilter)
  const emptyStateText = getEmptyStateText(todos, state.visibilityFilter)
  return {
    todos,
    emptyStateText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    onRemoveTodoClick: id => {
      dispatch(removeTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
