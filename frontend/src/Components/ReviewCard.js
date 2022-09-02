import React from 'react'
import ReactStars from 'react-rating-stars-component'
import Profile from '../../src/images/Profile.png';

const ReviewCard = (props) => {
    const {review} = props;
    const options = {
        edit : false,
        color : "rgba(20,20,20,0.1)",
        activeColor :"#FBA92C",
        size : window.innerWidth< 600? 20:25,
        value:review.rating,
        isHalf:true
      }
  return (
      <>
        <div className='reviewCard mt-5'>
            <img src = {Profile} alt = "user"/>
            <p>{review.name}</p>
            <ReactStars {...options}/>
            <span className='reviewCardComment'>{review.comment}</span>
        </div>
      </>
   
  )
}

export default ReviewCard