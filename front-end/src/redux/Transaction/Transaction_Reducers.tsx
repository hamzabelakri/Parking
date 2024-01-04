import { GET_TRANSACTION_DATA,GET_FILTERED_DATA } from "./Types"

const initState = {data: [], filtered_data:[]}

const Transaction_Reducers = (state = initState, action) => {
  switch (action.type) {
    case GET_TRANSACTION_DATA:
      return {...state, data: action.payload}
      case GET_FILTERED_DATA:
      return {...state, filtered_data: action.payload}
    default:
      return state
  }
}

export default Transaction_Reducers
