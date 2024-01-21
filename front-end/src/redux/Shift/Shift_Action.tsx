import axios from 'axios'
import toast from 'react-hot-toast'
import {FETCH_ALL_SHIFTS, ADD_TRANSACTION_TO_SHIFT, ADD_EVENT_TO_SHIFT} from './Types'

const url = 'http://127.0.0.1:8000/'

export const fetch_All_Shifts: any = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}shift`)
    dispatch({type: FETCH_ALL_SHIFTS, payload: response.data})
    //console.log('all shifts', response.data)
  } catch (error) {
    console.log(error)
  }
}

export const add_Transaction_To_Shift: any = (shift_transaction, shift_id) => async (dispatch) => {
  try {
    //console.log('adding transaction',shift_transaction)
    const response = await axios.put(`${url}shift/add-transaction/${shift_id}`,shift_transaction)
    dispatch({type: ADD_TRANSACTION_TO_SHIFT, payload: response.data})
  } catch (error) {
    toast.error('Failed to add transaction')
    console.log(error)
  }
}

export const add_Event_To_Shift: any = (shift_event, shift_id) => async (dispatch) => {
  try {
    const response = await axios.put(`${url}shift/add-event/${shift_id}`, {event: shift_event})
    console.log('added data', shift_event)
    dispatch({type: ADD_EVENT_TO_SHIFT, payload: response.data})
  } catch (error) {
    toast.error('Failed to add event')
    console.log(error)
  }
}
