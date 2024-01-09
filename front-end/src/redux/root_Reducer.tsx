import {combineReducers} from 'redux'
import Websocket_Reducers from './WebSocket/Websocket_Reducers'
import Config_Reducer from './Config/Config_Reducer'
import Transaction_Reducers from './Transaction/Transaction_Reducers'
import Auth_Reducer from './Auth/Auth_Reducer'

const root_Reducer = combineReducers({
  Config_Reducer: Config_Reducer,
  Websocket_Reducers: Websocket_Reducers,
  Transaction_Reducers:Transaction_Reducers,
  Auth_Reducer:Auth_Reducer
})

export default root_Reducer
