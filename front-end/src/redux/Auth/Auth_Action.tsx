import axios from 'axios'
import {ADMIN_LOGIN, OPERATOR_LOGIN, OPERATOR_LOGOUT, OPERATOR_PAUSE} from './Types'
import toast from 'react-hot-toast'

const url = 'http://127.0.0.1:8000/auth'

export const admin_Login:any = (credentials, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/admin/sign-in`, credentials)
    console.log("from action",response.data)
    dispatch({type: ADMIN_LOGIN, payload: response.data})
    navigate("/config")
    toast.success("welcome")
  } catch (error:any) {
    toast.error(error.response.data.detail)
    console.log("from action",error.response.data.detail)
  }
}

export const operator_Login:any = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/operator/sign-in`, credentials)
    dispatch({type: OPERATOR_LOGIN, payload: response.data})
    //console.log("from action",response.data)
    
    toast.success("welcome")
  } catch (error:any) {
    toast.error(error.response.data.detail)
  }
}

export const operator_Logout:any = (email, navigate) => async (dispatch) =>{
    
  try {
   const response = await axios.post(`${url}/operator/sign-out`, {email: email})
   dispatch({type: OPERATOR_LOGOUT, payload: response.data})
   console.log("action",response.data)
   navigate("/auth");
  } catch (error) {
   console.log(error)
  }
 };


 export const operator_Pause:any = (email, navigate) => async (dispatch) =>{
    
  try {
   const response = await axios.post(`${url}/operator/sign-out`, {email: email})
   console.log("action",response.data)
   dispatch({type: OPERATOR_LOGOUT, payload: response.data})
   navigate("/auth");
  } catch (error) {
   console.log(error)
  }
 }; 