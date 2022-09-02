import axios from 'axios';
import {ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAILS,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAILS,
    PRODUCT_DETAILS_REQUEST,
        PRODUCT_DETAILS_SUCCESS,
        PRODUCT_DETAILS_FAILS,
    CLEAR_ERRORS,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    ALL_REVIEW_REQUEST,
    ALL_REVIEW_SUCCESS,
    ALL_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,} from "../constants/productConstant"

export const getProducts = (keyword = "",currentPage) => async (dispatch) =>{
    try {
        dispatch({
            type : ALL_PRODUCT_REQUEST
        })
        console.log(keyword);
        let link = `/api/products?keyword=${keyword}&page=${currentPage}`;
        console.log(link);
        const {data} = await axios.get(link);
        console.log(data);
        dispatch({
            type : ALL_PRODUCT_SUCCESS,
            payload : data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            
            type : ALL_PRODUCT_FAILS,
            payload:error.response.data.message
        })
    }
};

//Get all products for admin

export const getAdminProducts = () => async (dispatch) =>{
    try {
        dispatch({
            type : ADMIN_PRODUCT_REQUEST
        })
        
        const {data} = await axios.get(`/api/admin/products`);
        dispatch({
            type : ADMIN_PRODUCT_SUCCESS,
            payload : data
        });
    } catch (error) {
        dispatch({
            
            type : ADMIN_PRODUCT_FAILS,
            payload:error.response.data.message
})
    };
}

//New product
export const createProduct = (productData) => async (dispatch) => {
    console.log(productData.get("name"));
    
      try {
        dispatch({ type: NEW_PRODUCT_REQUEST });
      
        const config = { headers: { "Content-Type": "application/json" } };
    
        const {data}  = await axios.post("/api/admin/product/new", productData, config);
          console.log(data);
        dispatch({ type: NEW_PRODUCT_SUCCESS, payload: data });
      
      } catch (error) {
        dispatch({
          type: NEW_PRODUCT_FAIL,
          payload: error.response.data.message,
        });
      }
    };

//Update product
export const updateProduct = (id,productData) => async (dispatch) => {
    
      try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });
      
        const config = { headers: { "Content-Type": "application/json" } };
    
        const {data}  = await axios.put(`/api/admin/product/${id}`, productData, config);
        dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data.success });
      
      } catch (error) {
        dispatch({
          type: UPDATE_PRODUCT_FAIL,
          payload: error.response.data.message,
        });
      }
    };
  
    //Delete product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });
    
        const {data}  = await axios.delete(`/api/admin/product/${id}`);
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data.success });
      
      } catch (error) {
        dispatch({
          type: DELETE_PRODUCT_FAIL,
          payload: error.response.data.message,
        });
      }
    };
  
export const getProductDetails = (id) => async (dispatch) =>{
    try {
        dispatch({
            type : PRODUCT_DETAILS_REQUEST
        })
        
        const {data} = await axios.get(`/api/product/${id}`);
        dispatch({
            type : PRODUCT_DETAILS_SUCCESS,
            payload : data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            
            type : PRODUCT_DETAILS_FAILS,
            payload:error.response.data.message
        })
    }
};

//New review
export const newReview = (reviewData) => async (dispatch) => {
  console.log(reviewData.get("productId"));
    try {
      dispatch({ type: NEW_REVIEW_REQUEST });
    
      const config = { headers: { "Content-Type": "application/json" } };
  
      const {data}  = await axios.put("/api/product/review", reviewData, config);
        console.log(data);
      dispatch({ type: NEW_REVIEW_SUCCESS, payload: data.success });
    
    } catch (error) {
      dispatch({
        type: NEW_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Get All Reviews of a Product
export const getAllReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_REVIEW_REQUEST });

    const { data } = await axios.get(`/api/product/reviews?id=${id}`);

    dispatch({
      type: ALL_REVIEW_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Review of a Product
export const deleteReviews = (reviewId, productId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_REVIEW_REQUEST });

    const { data } = await axios.delete(
      `/api/product/reviews?id=${reviewId}&productId=${productId}`
    );

    dispatch({
      type: DELETE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const clearErrors = () => async (dispatch)=>{
    dispatch({
        type : CLEAR_ERRORS
    })
}