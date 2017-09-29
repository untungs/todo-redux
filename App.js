import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import todoApp from './src/redux/reducers'
import Root from './src/Root'

export default class App extends React.Component {
  constructor() {
    super()
    this.store = createStore(todoApp)
  }

  render() {
    return (
      <Provider store={this.store}>
        <Root />
      </Provider>
    )
  }
}
