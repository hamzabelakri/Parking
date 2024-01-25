import {ADMIN_LOGIN, OPERATOR_LOGIN, OPERATOR_LOGOUT, OPERATOR_PAUSE} from './Types'

const initState = {admin: null, operator: null, connected_operator: false}
const Auth_Reducer = (state = initState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN:
      return {...state, admin: action.payload}
    case OPERATOR_LOGIN:
      return {...state, operator: action.payload, connected_operator: true}
    case OPERATOR_LOGOUT:
      return {...state, operator: null, connected_operator: false}
      case OPERATOR_PAUSE:
        return {...state, operator: action.payload, connected_operator: false}
    default:
      return state
  }
}

export default Auth_Reducer
