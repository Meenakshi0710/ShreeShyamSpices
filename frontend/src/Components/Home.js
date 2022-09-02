import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom";
import Productslider from './Productslider';
import MetaData from './Metadata';

const Home = () => {
  return (
    <div>
      <MetaData title="Home - Shree Shyam Spices" />
        <Header/>

        <section className='section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h3 className='main-heading'>Our Company</h3>
                <div className='underline mx-auto'></div>
                <p>Our Company is in Manufacturing of agri product business from last 18 years, this is our third genration in agri business and currently we have deep knowledge of it, our company operations are active. Current board members & directors are PARMANAND MOTIYANI and RAMESH CHAND MOTIYANI. Our process is purchasing spices from farmers, processing the spices at our factory, and Packaging and delivering to customers all over the world. Our main aim is to provide best quality spices across the globe.</p>
                <Link to = "/about" className = "btn btn-warning shadow">Read More</Link>
              </div>
            </div>
          </div>
        </section>

        {/*Our services*/}
        <section className='section bg-c-light border-top'>
        <div className='container'>
            <div className='row'>
              <div className='col-md-12 mb-4 text-center'>
                <h3 className='main-heading'>Our Services</h3>
                <div className='underline mx-auto'></div>
                
              </div>
              <div className='col-md-4'>
              <div className='card shadow h-100'>
              <img src="Data/images/MAchinery/clean.jpg" className="w-100 border-bottom" alt="Cleaning"/>
              <div className='card-body'>
                <h6>Cleaning</h6>
                <div className='underline'></div>
                <p>We use High tech Machineries to clean the raw spices purchased from farmers.</p>
                <Link to = "/services" className = "btn btn-link">Read More</Link>
              </div>
              </div>
              </div>

              <div className='col-md-4'>
              <div className='card shadow h-100'>
              <img src="Data/images/MAchinery/grading.jpg" className="w-100 border-bottom" alt="Grading"/>
              <div className='card-body'>
                <h6>Grading</h6>
                <div className='underline'></div>
                <p>We offer high-tech automated machines which separate different granular materials and remove impurities.</p>
                <Link to = "/services" className = "btn btn-link">Read More</Link>
              </div>
              </div>
              </div>

              <div className='col-md-4'>
              <div className='card shadow h-100'>
              <img src="Data/images/MAchinery/packing.jpg" className="w-100 border-bottom" alt="Packaging"/>
              <div className='card-body'>
                <h6>Packaging</h6>
                <div className='underline'></div>
                <p>We guarantee prime packaging and follow strict
delivery schedules with our logistic partners.</p>
                <Link to = "/services" className = "btn btn-link">Read More</Link>
              </div>
              </div>

              </div>
            </div>
          </div>

        </section>

        {/*Our Products*/}
        <section className='section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center mb-4'>
                <h3 className='main-heading'>Our Products</h3>
                <div className='underline mx-auto'></div>
                
              </div>
            </div>

            <Productslider/>
          </div>
        </section>

        {/*Our brands*/}
        <section className='section bg-c-light border-top'>
        <div className='container'>
            <div className='row'>
              <div className='col-md-12 mb-4 text-center'>
                <h3 className='main-heading'>Our Brands</h3>
                <div className='underline mx-auto'></div>
                
              </div>
              
          </div>

          <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <Link to = "/products">
    <div className="card h-100 productCard">
      <img src="Data/images/Products/shyam.jpg" className="card-img-top" alt="..."/>
     
    </div>
    </Link>
  </div>
  <div className="col">
    <Link to = "/products">
    <div className="card h-100 productCard">
      <img src="Data/images/Products/shyamajwain.jpg" className="card-img-top" alt="..."/>
      
    </div>
    </Link>
  </div>
  <div className="col">
    <Link to= "/products">
    <div className="card h-100 productCard">
      <img src="Data/images/Products/khushboo.jpg" className="card-img-top" alt="..."/>
     
    </div>
    </Link>
  </div>
  <div className="col">
    <Link to="/products">
    <div className="card h-100 productCard">
      <img src="Data/images/Products/rajdhani.jpg" className="card-img-top" alt="..."/>
     
    </div>
    </Link>
  </div>
</div>
          </div>

        </section>

       {/*Why us*/}
       <section className='section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center mb-4'>
                <h3 className='main-heading'>Why Shree Shyam Spices?</h3>
                <div className='underline mx-auto'></div>
                
              </div>
            </div>
            <div className='row'>
  <div className="col-md-3 text-center">
      <img src="Data/images/Icons/quality.png" className="iconCardimg" alt="..."/>
      <div className='card-body'>
                <h4>Premium <strong>Quality</strong></h4>
                
                <p>Determine to Provide High Quality Spices</p>
                
              </div>
              
    </div>
  
  
  <div className="col-md-3 text-center">
      <img src="Data/images/Icons/machinery.png" className="iconCardimg" alt="..."/>
      <div className='card-body'>
                <h4>High-Tech <strong>Machinery</strong></h4>
                
                <p>High-Tech Automated Machinery</p>
                
              </div>
    </div>
  
  
  <div className="col-md-3 text-center">
      <img src="Data/images/Icons/worker.png" className="iconCardimg" alt="..."/>
      <div className='card-body'>
                <h4>Skilled <strong>Workers</strong></h4>
                
                <p>Trained and Hard-Working Labours</p>
                
              </div>
    </div>
  
  
  <div className="col-md-3 text-center">
      <img src="Data/images/Icons/delivery-truck.png" className="iconCardimg" alt="..."/>
      <div className='card-body'>
                <h4>Optimal <strong>Delivery</strong></h4>
                
                <p>Strict delivery schedules with our logistic partners</p>
                
              </div>
    </div>
  </div>
  
 
  
 </div>

           
          
        </section>
    </div>
  )
}

export default Home