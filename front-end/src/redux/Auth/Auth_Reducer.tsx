import {STAFF_REGISTER} from './Types'

const initState = {staff: null, connected_staff: false}
const Auth_Reducer = (state = initState, action) => {
  switch (action.type) {
    case STAFF_REGISTER:
      return {...state, staff: action.payload.user, connected_staff: true}

    default:
      return state
  }
}

export default Auth_Reducer
