import React, { Component } from 'react'

import { Provider } from 'react-redux'
import reducer from './Redux/store'
import { createStore, applyMiddleware } from 'redux'
import Home from './Home'
// Apply middleware is for redux-thunkn

import thunk from 'redux-thunk';

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}