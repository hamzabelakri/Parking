import {combineReducers} from 'redux'
import Websocket_Reducers from './WebSocket/Websocket_Reducers'
import Server_Reducer from './Server/ServerReducer'

const rootReducer = combineReducers({
  Server_Reducer: Server_Reducer,
  Websocket_Reducers: Websocket_Reducers
})

export default rootReducer
