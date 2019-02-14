import {  createStore, combineReducers  } from 'redux';
import watchList from './reducers/watchList.js'

const rootReducer = combineReducers({
  watchList: watchList
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
