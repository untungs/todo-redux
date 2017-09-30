import React from 'react'
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist'
import { createLogger } from 'redux-logger';
import todoApp from './src/redux/reducers'
import Root from './src/Root'

export default class App extends React.Component {
  constructor() {
    super()
    const logger = createLogger({ duration: true })
    this.store = createStore(
      todoApp, 
      compose(applyMiddleware(logger), autoRehydrate())
    )
    persistStore(this.store, { storage: AsyncStorage })
  }

  render() {
    return (
      <Provider store={this.store}>
        <Root />
      </Provider>
    )
  }
}
