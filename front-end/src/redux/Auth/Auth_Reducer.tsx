import {STAFF_REGISTER, STAFF_LOGOUT} from './Types'

const initState = {staff: null, connected_staff: false}
const Auth_Reducer = (state = initState, action) => {
  switch (action.type) {
    case STAFF_REGISTER:
      return {...state, staff: action.payload, connected_staff: true}
    case STAFF_LOGOUT:
      return {...state, staff: null, connected_staff: false}
    default:
      return state
  }
}

export default Auth_Reducer
