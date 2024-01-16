import {
  GET_TRANSACTION_DATA,
  GET_FILTERED_DATA,
  CLEAR_FILTERED_DATA,
  ADD_TRANSACTION_TO_SHIFT,
  ADD_EVENT_TO_SHIFT,
} from './Types'

const initState = {data: [], filtered_data: [], transaction_data: [], event: []}

const Transaction_Reducers = (state = initState, action) => {
  switch (action.type) {
    case GET_TRANSACTION_DATA:
      return {...state, data: action.payload}
    case GET_FILTERED_DATA:
      return {...state, filtered_data: action.payload}
    case CLEAR_FILTERED_DATA:
      return {filtered_data: []}
    case ADD_TRANSACTION_TO_SHIFT:
      return {...state, transaction_data: action.payload}
    case ADD_EVENT_TO_SHIFT:
      return {...state, event: action.payload}
    default:
      return state
  }
}

export default Transaction_Reducers
