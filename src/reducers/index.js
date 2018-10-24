import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// reducers
import clients from './clients'

export default combineReducers({
  routing: routerReducer,
  clients,
})
