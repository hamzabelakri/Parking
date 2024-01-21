import {OPERATOR_REGISTER, OPERATOR_LOGOUT} from './Types'

const initState = {operator: null, connected_operator: false}
const Auth_Reducer = (state = initState, action) => {
  switch (action.type) {
    case OPERATOR_REGISTER:
      return {...state, operator: action.payload, connected_operator: true}
    case OPERATOR_LOGOUT:
      return {...state, operator: null, connected_operator: false}
    default:
      return state
  }
}

export default Auth_Reducer