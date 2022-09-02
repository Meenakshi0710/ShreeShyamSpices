import React from 'react'
import Contactform from './Contactform'

import { FaEnvelope, FaMapMarkerAlt, FaPhoneSquareAlt} from 'react-icons/fa';

import MetaData from './Metadata';

const iconStyles = {color : "#f76c2f", fontSize : "30px"};
const Contactus = () => {
 
  return (
      <>
      <MetaData title="Contact Us - Shree Shyam Spices" />
      <div className='secondImage'>
        

  <div className="hero-text">
  
  <h1>Contact Us</h1>
  
  
</div>
</div>
<section className='section'>
<div className='container mt-4 mb-4'>
<div className="row">
  <div className="col-sm-6">
    <div className="card h-100 contactData">
      <div className="card-body">
      <h5 className="card-title text-center">Get in touch</h5>
        <div className='underline mx-auto mb-5' ></div>
        <div className="mb-1">
        <h6 className="card-text" style={{color:"#f76c2f", fontWeight:"bold", fontSize : "20px"}}><FaMapMarkerAlt style = {iconStyles}/> Shree Shyam Spices Private Limited</h6>
        </div>
        <div className="mb-5">
        
        <p className="card-text">Bazar No. 3, Bhopal Ganj, Bhilwara-311001, Rajasthan, India</p>
        </div>
        <div className="mb-5">
       <p className="card-text"><FaEnvelope style = {iconStyles}/> shrishyamspices@gmail.com</p>
        </div>
        <div className="mb-5">
        <p className="card-text"><FaPhoneSquareAlt style = {iconStyles}/> Mr. Bharat Motiyani : 8209041115</p>
        </div>
      </div>
    </div>
  </div>
  

  {/* Contact form */}
  <div className="col-sm-6">
  <Contactform/>
  </div>
  </div>
</div>
</section>
</>
  )
}

export default Contactus