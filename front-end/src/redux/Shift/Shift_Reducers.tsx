import {FETCH_ALL_SHIFTS,ADD_TRANSACTION_TO_SHIFT, ADD_EVENT_TO_SHIFT} from './Types'

const initState = {shifts: [], shift_trans:[], shift_event: []}

const Shift_Reducers = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ALL_SHIFTS:
      return {...state, shifts: action.payload}
    case ADD_TRANSACTION_TO_SHIFT:
      return {...state, shift_trans: action.payload}
    case ADD_EVENT_TO_SHIFT:
      return {...state, shift_event: action.payload}
     
    default:
      return state
  }
}

export default Shift_Reducers
