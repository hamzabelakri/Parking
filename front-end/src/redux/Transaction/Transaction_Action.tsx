import axios from 'axios'
import toast from 'react-hot-toast'
import { GET_TRANSACTION_DATA,GET_FILTERED_DATA,CLEAR_FILTERED_DATA } from './Types'

const url='http://127.0.0.1:8000/'
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
    const response = await axios.get(`${url}transaction/`, { params: filterData })
    //console.log("from action",response.data)
    dispatch({type: GET_FILTERED_DATA, payload: response.data})
  } catch (error) {
    toast.error('Failed to get data')
    console.log(error)
  }
}

export const clear_Filtered_Transaction_Data: any = () => (dispatch) => {
  dispatch({ type: CLEAR_FILTERED_DATA });
};
