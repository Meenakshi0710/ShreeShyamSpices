import React, { useState } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getProductDetails, newReview } from '../actions/productAction'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import ReviewCard from './ReviewCard'
import Loader from './Loader'
import { useAlert } from 'react-alert'
import { addProductsToCart } from '../actions/cartAction'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from '../constants/productConstant'
import MetaData from './Metadata'




const ProductDetails = () => {
  const alert = useAlert()
  const dispatch =  useDispatch();
  const {product, loading, error}  = useSelector((state) => state.productDetails );
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = ()=>{
    if(product.stock <= quantity){
      return;
    }
    let qty = quantity + 1 ;
    setQuantity(qty);
  }

  const decreaseQuantity = ()=>{
    if(quantity <= 1){
      return;
    }
    let qty = quantity - 1 ;
    setQuantity(qty);
    
  }

  const addToCartHandler = ()=>{
    console.log("I am here");
    dispatch(addProductsToCart(id,quantity));
    alert.success("Item added to cart");
  }

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);
    console.log(myForm.get("rating"));

    dispatch(newReview(myForm));

    setOpen(false);
  };

  useEffect(() => {
    if(error){
       alert.error(error);
       dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    
    dispatch(getProductDetails(id));
  }, [dispatch,id,error,alert,reviewError,success])  
  

  const options = {
    edit : false,
    color : "rgba(20,20,20,0.1)",
    activeColor :"#FBA92C",
    size : window.innerWidth< 600? 20:25,
    value:product.ratings,
    isHalf:true
  }
  return (
    
    <>
     <MetaData title={`${product.name} - Shree Shyam Spices`} />
        <div style={{ backgroundColor: "#9E9E9E", height :"20vh", backgroundSize: 'cover',
        width: "100%", opacity:"0.8" }}>
        
  <Navbar/>
</div>

{loading ? (<Loader/>) : (
  <div>
  <section className='section'>
<div className='container'>
<div className="card mb-3 productDetailsCard" style={{maxWidth: "100%"}}>
  <div className="row g-0">
    <div className="col-md-4">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      {product.images && product.images.map((item)=>(
        <img src={item.url} className="img-fluid rounded-start" key = {item.url} alt={item.url}/>
      ))}
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   
    </div>
    
    
    <div className="col-md-8">
      <div className="card-body ms-5">
        <div className='detailsBlock-1'>
          <h2>{product.name}</h2>
          
        </div>
        <div className='detailsBlock-2'>
        <p>{product.description}</p>
        </div>
        <div className='detailsBlock-3'>
          <ReactStars {...options}/>
          <span>({product.numofreviews} Reviews)</span>
        </div>
        <div className='detailsBlock-4'>
          <h1>{`Rs.${product.price}`}</h1>
          <div className='detailsBlock-4-1'>
          <div className='detailsBlock-4-1-1'>
            <button onClick = {decreaseQuantity}>-</button>
            <input readOnly value={quantity} type = 'number'/>
            <button onClick = {increaseQuantity}>+</button>
            </div>
            <button disabled={product.stock < 1 ?true :false} onClick={addToCartHandler}>Add to Cart</button>
          </div>
          <p>Status : {}
          <b className={product.stock < 1 ? 'redColor' : 'greenColor'}>
            {product.stock < 1 ? "OutOfStock" : "InStock"}
          </b>
          </p>
        </div>
        <button onClick = {submitReviewToggle} className='submitReview'>Submit Review</button>
      </div>
    </div>
  </div>
</div>
</div>

</section>

<Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                name='unique-rating'
                onChange={(e) => setRating(e.target.value)}
                value={Number(rating)}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>



<section className='section bg-c-light border-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h3 className='main-heading'>Reviews</h3>
                <div className='underline mx-auto'></div>
                </div>
              </div>

              {product.reviews && product.reviews[0] ? (
                <div className='reviews'>
                {product.reviews && 
                product.reviews.map((review) =>
                  <ReviewCard review = {review} key = {review.user}/>
                )}
                </div>
              ) : (<p className='noReviews mt-5'>No Reviews Yet</p>)}
              </div>
              </section>
          </div>
)}
    </>
  )
}

export default ProductDetails