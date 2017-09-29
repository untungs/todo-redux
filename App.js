import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import todoApp from './src/redux/reducers'
import Root from './src/Root'

export default class App extends React.Component {
  constructor() {
    super()
    const logger = createLogger({ collapsed: true, duration: true })
    this.store = createStore(todoApp, applyMiddleware(logger))
  }

  render() {
    return (
      <Provider store={this.store}>
        <Root />
      </Provider>
    )
  }
}
