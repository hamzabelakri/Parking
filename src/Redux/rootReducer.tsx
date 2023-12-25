import {combineReducers} from 'redux'
import ServerReducer from './Server/ServerReducer'
import webSocketReducer from './WebSocket/Websocket_Reducers'

const rootReducer = combineReducers({
  ServerReducer: ServerReducer,
  webSocketReducer:webSocketReducer
})

export default rootReducer
