import { GET_ALL_DATA } from "./Types";
import axios from "axios";


export const getAllData = () => async (dispatch) => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/config");
  
      dispatch({ type: GET_ALL_DATA, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };