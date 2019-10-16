import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { resume } from './reducers/reducers'
import { getProjectList, getContactList, getContactById, getProjectById } from './actions/actions'


//Using middleware to log the action calls for debugging purposes
const loggerMiddleware = createLogger()

//store is created, middleware and logger applied
const store = createStore(resume,applyMiddleware(
    thunkMiddleware, 
    loggerMiddleware 
  ))


store.dispatch(getProjectList())
.then(store.dispatch(getContactList()))
//testing output of different calls
.then(store.dispatch(getProjectById(1)))
.then(store.dispatch(getContactById(4)))
.then(ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app')))