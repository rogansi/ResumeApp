import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

//Using middleware to log the action calls for debugging purposes
const loggerMiddleware = createLogger()

//store is created, middleware and logger applied
const store = createStore(snackDisplay,applyMiddleware(
    thunkMiddleware, 
    loggerMiddleware 
  ))

//the initial state is the vote total (3) as well as the information from the /snacks API call
store.dispatch(getSnackList())
.then(ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app')))