import {  createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk'
import watchList from './reducers/watchList.js'

const rootReducer = combineReducers({
  watchList: watchList
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))
