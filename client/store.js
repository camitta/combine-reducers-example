import {createStore, combineReducers, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import { puppyReducer } from './reducers/puppyReducer'; 
import { kittenReducer } from './reducers/kittenReducer';

const rootReducer = combineReducers({puppyState: puppyReducer, kittenState: kittenReducer})

const middlewares = applyMiddleware(
  loggerMiddleware,
  thunkMiddleware
)

const store = createStore(
  rootReducer,
  middlewares
)

export default store;