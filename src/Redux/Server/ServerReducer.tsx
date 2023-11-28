import {GET_ALL_DATA} from './Types'

const initState = {products: [], product: {}}
const ProductReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return {...state, products: action.payload}

    default:
      return state
  }
}

export default ProductReducer
