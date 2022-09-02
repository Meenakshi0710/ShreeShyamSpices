import React from 'react'
import { Link } from 'react-router-dom'





export default function Header() {
    return (
        <>
        
        <div className='hero-image'>
   
 
  <div className="hero-text">
  
    <h1 className = "animate__animated animate__slideInUp">Shri Shyam Spices Pvt. Ltd.</h1>
    
    <p className = "animate__animated animate__slideInUp">Leading Manufacturer and Supplier of best quality spices </p>
    <Link to = "/contact" className = "btn btn-warning shadow animate__animated animate__zoomInUp">Contact Us</Link>
  </div>
 
</div>
</>
    )
}

