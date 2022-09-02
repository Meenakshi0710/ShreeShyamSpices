import { CLEAR_ERRORS, NEW_ENQUIRY_FAIL, NEW_ENQUIRY_REQUEST, NEW_ENQUIRY_RESET, NEW_ENQUIRY_SUCCESS } from "../constants/enquiryConstants";

export const newEnquiryReducer = (state = {enquiry : []}, action) => {

    switch (action.type) {
        case NEW_ENQUIRY_REQUEST:
            return {
                ...state,
                loading:true
            }

        case NEW_ENQUIRY_SUCCESS:
            return {
                loading:false,
                success:action.payload.success,
                enquiry:action.payload.enquiry,
                }

        case NEW_ENQUIRY_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        
        case NEW_ENQUIRY_RESET:
                return {
                  ...state,
                  success: false,
                };
        case CLEAR_ERRORS:
                return {
                  ...state,
                  error: null,
                };
    
        default:
            return state;
    }

}
