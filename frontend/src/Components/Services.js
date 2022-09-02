import React from 'react'
import MetaData from "./Metadata"

const Services = () => {
  return (
   <>
     <MetaData title="Services - Shree Shyam Spices" />
     <div className='secondImage'>
        

  <div className="hero-text">
  
  <h1>Services</h1>
  
  
</div>
</div>

<section className='section  border-top '>
        <div className='container mt-5'>

        
      
          <div className='row'>
            <div className='col-md-6'>
            <div className="card mx-auto bg-c-light h-100" style={{width: "25rem", border : "none"}}>
  <img src="Data/Images/MAchinery/clean.jpg" className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><strong>Cleaning</strong></h5>
    <p className="card-text">We use High tech Machineries to clean the raw spices purchased from farmers. These spices are then processed in our automated Machineries  to make it effective for cooking.</p>
    
  </div>
</div>
            </div>

            <div className='col-md-6'>
            <div className="card mx-auto bg-c-light h-100" style={{width: "25rem", border : "none"}}>
  <img src="Data/Images/MAchinery/sortex.jpg" className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><strong>Sorting</strong></h5>
    <p className="card-text">We have our own Sortex machine in our factory to provide clients best quality spices. We offer high-tech automated machines which separate different granular materials and remove impurities.</p>
    
  </div>
</div>
</div>
          </div>
          
        
          <div className='row mt-5'>
            <div className='col-md-6'>
            <div className="card mx-auto bg-c-light h-100" style={{width: "25rem", border : "none"}}>
  <img src="Data/Images/MAchinery/packing.jpg" className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><strong>Packaging</strong></h5>
    <p className="card-text">After processing, the spices are further dispatched for packaging. We have a Separate Unit for Packaging with well Trained Staff and Automated Machines.</p>
    
  </div>
</div>
            </div>

            <div className='col-md-6'>
            <div className="card mx-auto bg-c-light h-100" style={{width: "25rem", border : "none"}}>
  <img src="Data/Images/MAchinery/truck.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><strong>Logistics</strong></h5>
    <p className="card-text">Our aim is to provide products on time as per client’s requirements. We have tie-ups with the logistics department which ensures strict and on-time delivery of spices.</p>
    
  </div>
</div>
            </div>
          </div>
          
 
  
        </div>
        </section>
   </>
  )
}

export default Services