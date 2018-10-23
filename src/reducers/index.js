import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// reducers
import users from './users'

export default combineReducers({
  routing: routerReducer,
  users,
})
