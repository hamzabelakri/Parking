import {GET_ALL_DATA} from './Types'
import axios from 'axios'
import {CustomToast, Toast} from '../../app/pages/Config/CustomToast'

export const getAllData: any = () => async (dispatch) => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/config')
    console.log(response.data)
    dispatch({type: GET_ALL_DATA, payload: response.data})
  } catch (error) {
    //console.log(error)
  }
}

