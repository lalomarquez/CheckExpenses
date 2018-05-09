import { createStore, combineReducers } from 'redux'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
    user: usersReducer
  })

export default createStore(rootReducer)