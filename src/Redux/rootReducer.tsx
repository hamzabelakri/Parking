import {combineReducers} from 'redux'
import ServerReducer from './Server/ServerReducer'

const rootReducer = combineReducers({
  ServerReducer: ServerReducer,
})

export default rootReducer
