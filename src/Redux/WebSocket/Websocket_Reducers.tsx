import {OPEN_WEBSOCKET, GET_ALL_DATA} from './Types'

const initState = {ws: null, data: [], ink_status: null}

const Websocket_Reducers = (state = initState, action) => {
  switch (action.type) {
    case OPEN_WEBSOCKET:
      return {...state, ws: action.payload}
    case GET_ALL_DATA:
      if (action.payload['ink_status']) {
        console.log("reducer", action.payload)
        return {...state, ink_status: action.payload}
      }
      if (action.payload['ticket_data']) {
        return {...state, data: action.payload}
      }
      return state
    default:
      return state
  }
}

export default Websocket_Reducers
