import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { getProjectList, getContactList, getContactById, getProjectById } from './actions/actions'
import rootReducer from './reducers/reducers'

//Using middleware to log the action calls for debugging purposes
const loggerMiddleware = createLogger()

//store is created, middleware and logger applied
const store = createStore(rootReducer,applyMiddleware(
    thunkMiddleware, 
    loggerMiddleware 
  ))


store.dispatch(getProjectList())
.then(store.dispatch(getContactList()))
//testing output of different calls
.then(store.dispatch(getProjectById(3)))
.then(store.dispatch(getContactById(4)))
.then(ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app')))