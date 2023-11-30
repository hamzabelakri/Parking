import {GET_ALL_DATA, SELECT_SERVER, POST_ALL_DATA} from './Types'
import axios from 'axios'
import {CustomToast} from '../../app/pages/Config/CustomToast'

export const getAllData: any = () => async (dispatch) => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/config')
    dispatch({type: GET_ALL_DATA, payload: response.data})
  } catch (error) {
    //console.log(error)
  }
}

export const postAllData: any = (data) => async (dispatch) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/config', data)
    dispatch({type: POST_ALL_DATA, payload: response.data})
    CustomToast('This is a test message', 'success')
    console.log('Saved successfully')
  } catch (error) {
    //console.log(error)
  }
}

export const setSelectedServer: any = (selectedServer) => async (dispatch) => {
  try {
    dispatch({type: SELECT_SERVER, payload: selectedServer})
    console.log(selectedServer)
  } catch (error) {}
}
