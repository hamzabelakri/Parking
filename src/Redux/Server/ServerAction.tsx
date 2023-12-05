import {GET_ALL_DATA, SELECT_SERVER, POST_ALL_DATA, GET_ONE_SERVER, GET_SAVED_DATA} from './Types'
import axios from 'axios'
import toast from 'react-hot-toast'

export const getAllData: any = () => async (dispatch) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/local/config`)
    // console.log(response.data)
    dispatch({type: GET_ALL_DATA, payload: response.data})
  } catch (error) {
    toast.error('Failed to retrieve data')
    console.log(error)
  }
}

export const getOneServer: any = (input) => async (dispatch) => {
  try {
    const url = `http://${input.ip}:${input.port}/lrgeometry`

    const response = await axios.get(url)
    //console.log(response.data)
    dispatch({type: GET_ONE_SERVER, payload: response.data})
  } catch (error) {
    toast.error('Incorrect IP or PORT')
  }
}

export const postAllData: any = (data) => async (dispatch) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/local/config', data)
    //console.log(response.data.start)
    dispatch({type: POST_ALL_DATA, payload: response.data})
    toast.success(response.data.start)
  } catch (error) {
    toast.error('Failed')
    // console.log(error)
  }
}

export const setSelectedServer: any = (selectedServer) => async (dispatch) => {
  try {
    dispatch({type: SELECT_SERVER, payload: selectedServer})
    console.log(selectedServer)
  } catch (error) {}
}
