import axios from 'axios'
import {OPERATOR_REGISTER, OPERATOR_LOGOUT} from './Types'
import toast from 'react-hot-toast'

const url = 'http://127.0.0.1:8000/auth/'

export const operator_Login:any = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}sign-in`, credentials)
    dispatch({type: OPERATOR_REGISTER, payload: response.data})
    //console.log("from action",response.data)
    
    toast.success("welcome")
  } catch (error:any) {
    toast.error(error.response.data.detail)
  }
}

export const operator_Logout:any = (email, navigate) => async (dispatch) =>{
    
   try {
    const response = await axios.post(`${url}sign-out`, {email: email})
    dispatch({type: OPERATOR_LOGOUT, payload: response.data})
    navigate("/auth");
   } catch (error) {
    console.log(error)
   }
  };