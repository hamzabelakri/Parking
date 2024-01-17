import axios from 'axios'
import {STAFF_REGISTER, STAFF_LOGOUT} from './Types'
import toast from 'react-hot-toast'

const url = 'http://127.0.0.1:8000/auth/'

export const staff_Login:any = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}sign-in`, credentials)
    dispatch({type: STAFF_REGISTER, payload: response.data})
    //console.log("from action",response.data)
    
    toast.success("welcome")
  } catch (error:any) {
    toast.error(error.response.data.detail)
  }
}

export const staff_Logout:any = (email, navigate) => async (dispatch) =>{
    
   try {
    const response = await axios.post(`${url}sign-out`, {email: email})
    dispatch({type: STAFF_LOGOUT, payload: response.data})
    navigate("/auth");
   } catch (error) {
    console.log(error)
   }
  };