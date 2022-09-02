import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}


const Productslider = () => {

    var settings = {
  
      autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow:  window.innerWidth< 600? 2:5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <Slider {...settings}>
      <div className='productCardColor'>
      <Link className= "text-decoration-none text-reset" to = "/products/jeera">
        <div className='card shadow h-100'>
              <img src="Data/images/Products/cumin.jpg" className="w-100 border-bottom" alt="Cleaning"/>
              <div className='card-body'>
                <h6 className='text-center'>Cumin Seeds</h6>
                
              </div>
              </div>
              </Link>
              </div>
              <div className='productCardColor'>
              <Link className= "text-decoration-none text-reset" to = "/products/ajwain">
              <div className='card shadow h-100'>
              <img src="Data/images/Products/carom.jpg" className="w-100 border-bottom" alt="Cleaning"/>
              <div className='card-body'>
                <h6 className='text-center'>Carom Seeds</h6>
                
              </div>
              </div>
              </Link>
              </div>
              <div className='productCardColor'>
              <Link className= "text-decoration-none text-reset" to = "/products/saunf">
              <div className='card shadow h-100'>
              <img src="Data/images/Products/fennel.jpg" className="w-100 border-bottom" alt="Cleaning"/>
              <div className='card-body'>
                <h6 className='text-center'>Fennel Seeds</h6>
                
              </div>
              </div>
              </Link>
              </div>
              <div className='productCardColor'>
              <Link className= "text-decoration-none text-reset" to = "/products/rai">
              <div className='card shadow h-100'>
              <img src="Data/images/Products/mustard.jpg" className="w-100 border-bottom" alt="Cleaning"/>
              <div className='card-body'>
                <h6 className='text-center'>Mustard seeds</h6>
                
              </div>
              </div>
              </Link>
              </div>
              <div className='productCardColor'>
              <Link className= "text-decoration-none text-reset" to = "/products/dhaniya">
              <div className='card shadow h-100'>
              <img src="Data/images/Products/coriander.jpg" className="w-100 border-bottom" alt="Cleaning"/>
              <div className='card-body'>
                <h6 className='text-center'>Coriander Seeds</h6>
                
              </div>
              </div>
              </Link>
              </div>
              <div className='productCardColor'>
              <Link className= "text-decoration-none text-reset" to = "/products/methi">
              <div className='card shadow h-100'>
              <img src="Data/images/Products/fenugreek.jpg" className="w-100 border-bottom" alt="Cleaning"/>
              <div className='card-body'>
                <h6 className='text-center'>Fenugreek</h6>
                
              </div>
              </div>
              </Link>
              </div>
      
    </Slider>
  )
}

export default Productslider