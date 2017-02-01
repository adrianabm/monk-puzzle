import { combineReducers } from 'redux'
import pieces from './pieces_reducer'

const rootReducer = combineReducers({
  pieces,
})

export default rootReducer
