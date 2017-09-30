const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: getNextId(state),
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

const getNextId = todos => {
  if (todos.length == 0) {
    return 0
  }

  return todos.reduce((lastTodo, todo) =>
    todo.id > lastTodo.id ? todo : lastTodo
  ).id + 1
}

export default todos
