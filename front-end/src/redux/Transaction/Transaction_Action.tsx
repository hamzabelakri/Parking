import axios from 'axios'
import toast from 'react-hot-toast'
import {GET_TRANSACTION_DATA, GET_FILTERED_DATA, CLEAR_FILTERED_DATA, ADD_TRANSACTION_TO_SHIFT,ADD_EVENT_TO_SHIFT} from './Types'

const url = 'http://127.0.0.1:8000/'
export const fetch_All_Transaction_Data: any = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}transaction`)
    //console.log("from action",response.data)
    dispatch({type: GET_TRANSACTION_DATA, payload: response.data})
  } catch (error) {
    toast.error('Failed to get data')
    console.log(error)
  }
}

export const fetch_Filtered_Transaction_Data: any = (filterData) => async (dispatch) => {
  try {
    //console.log("from action",filterData)
    const response = await axios.get(`${url}transaction/`, {params: filterData})
    dispatch({type: GET_FILTERED_DATA, payload: response.data})
  } catch (error) {
    toast.error('Failed to get data')
    console.log(error)
  }
}

export const clear_Filtered_Transaction_Data: any = () => (dispatch) => {
  dispatch({type: CLEAR_FILTERED_DATA})
}


export const add_transaction_to_shift: any =(data,shift_id) => async (dispatch) => {
  try {
    const response= await axios.post(`${url}shift/add-transaction/${shift_id}`,data)
    dispatch({type:ADD_TRANSACTION_TO_SHIFT,payload:response.data})
    console.log("added data",data)
  } catch (error) {
    toast.error('Failed to add data')
    console.log(error)
  }
}

export const add_event_to_shift: any =(event,shift_id) => async (dispatch) => {
  try {
    const response= await axios.post(`${url}shift/add-transaction/${shift_id}`,event)
    dispatch({type:ADD_EVENT_TO_SHIFT,payload:response.data})
    console.log("added data",event)
  } catch (error) {
    toast.error('Failed to add data')
    console.log(error)
  }
}