import { connect } from 'react-redux'
import { toggleTodo } from '../redux/actions'
import TodoList from '../components/TodoList'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default ConnectedTodoList
