import axios from 'axios'
import {STAFF_REGISTER} from './Types'
import toast from 'react-hot-toast'

const url = 'http://127.0.0.1:8000/auth/'

export const staff_Login:any = (credentials,navigate) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}sign-in`, credentials)
    dispatch({type: STAFF_REGISTER, payload: response.data})
    console.log("from action",response.data)
    navigate('/shift')
  } catch (error) {
    alert(error)
  }
}
