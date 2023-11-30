import {GET_ALL_DATA, SELECT_SERVER, POST_ALL_DATA, GET_ONE_SERVER} from './Types'
import axios from 'axios'
import {CustomToast} from '../../app/pages/Config/CustomToast'

export const getAllData: any = (input) => async (dispatch) => {
  try {
    const response = await axios.get(`http://${input.ID}:${input.PORT}/lrgeometry`)
    console.log(response.data)
    dispatch({type: GET_ALL_DATA, payload: response.data})
  } catch (error) {
    //console.log(error)
  }
}

export const getOneServer: any = (input) => async (dispatch) => {
  try {
    const url = `http://${input.ID}:${input.PORT}/config`;

    const response = await axios.get(url)
    console.log(response.data)
    dispatch({type: GET_ONE_SERVER, payload: response.data})
  } catch (error) {
    //console.log(error)
  }
}

export const postAllData: any = (data) => async (dispatch) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/config', data)
    dispatch({type: POST_ALL_DATA, payload: response.data})
    CustomToast(response.data.start, 'success')
  } catch (error) {
    CustomToast('Failed', 'error')
    //console.log(error)
  }
}

export const setSelectedServer: any = (selectedServer) => async (dispatch) => {
  try {
    dispatch({type: SELECT_SERVER, payload: selectedServer})
    console.log(selectedServer)
  } catch (error) {}
}
