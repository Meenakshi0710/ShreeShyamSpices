import axios from 'axios';
import { CLEAR_ERRORS, NEW_ENQUIRY_FAIL, 
    NEW_ENQUIRY_REQUEST, 
     NEW_ENQUIRY_SUCCESS } from "../constants/enquiryConstants";

export const createEnquiry = (enquiryData) => async (dispatch) => {
    
      try {
        dispatch({ type: NEW_ENQUIRY_REQUEST });
      
        const config = { headers: { "Content-Type": "application/json" } };
    
        const {data}  = await axios.post("/api/enquiry/submit", enquiryData, config);
          console.log(data);
        dispatch({ type: NEW_ENQUIRY_SUCCESS, payload: data });
      
      } catch (error) {
        dispatch({
          type: NEW_ENQUIRY_FAIL,
          payload: error.response.data.message,
        });
      }
    };
    export const clearErrors = () => async (dispatch)=>{
      dispatch({
          type : CLEAR_ERRORS
      })
  }