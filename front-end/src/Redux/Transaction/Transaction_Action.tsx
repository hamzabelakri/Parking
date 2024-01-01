import {GET_ALL_DATA} from './Types'
import axios from 'axios'
import toast from 'react-hot-toast'

const url='http://127.0.0.1:8000'
export const get_All_Data: any = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}transaction`)
    console.log("from action",response.data)
    dispatch({type: GET_ALL_DATA, payload: response.data})
  } catch (error) {
    toast.error('Failed to get data')
    console.log(error)
  }
}
