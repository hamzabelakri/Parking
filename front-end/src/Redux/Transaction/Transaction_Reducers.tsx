import {GET_ALL_DATA} from './Types'

const initState = {data: []}

const Transaction_Reducers = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return {...state, data: action.payload}
    default:
      return state
  }
}

export default Transaction_Reducers
