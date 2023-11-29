import {GET_ALL_DATA, SELECT_SERVER} from './Types'

const initState = {data: [], selectedServer: null}
const ServerReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return {...state, data: action.payload}
    case SELECT_SERVER:
      return {...state, selectedServer: action.payload}
    default:
      return state
  }
}

export default ServerReducer
