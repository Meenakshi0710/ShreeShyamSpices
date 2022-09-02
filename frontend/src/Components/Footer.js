import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneSquareAlt} from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='section footer text-white'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <h5>Shree Shyam Spices Pvt. Ltd.</h5>
                    <div className='underline mb-5'></div>
                    <p className='text-white'>We are manufacturer of various kinds of spices. We have advanced high-tech machinery. We provide premium quality products and services to our customers.</p>
                </div>

                <div className='col-md-3'>
                    <h5>Quick Links</h5>
                    <div className='underline mb-5'></div>
                    <div><Link to = "/">Home</Link></div>
                    <div><Link to = "/about">About</Link></div>
                    <div><Link to = "/services">Services</Link></div>
                    <div><Link to = "/products">Products</Link></div>
                    <div><Link to = "/harvestchart">Harvest Chart</Link></div>
                    <div><Link to = "/contact">Contact us</Link></div>
                </div>

                <div className='col-md-3'>
                    <h5>Products</h5>
                    <div className='underline mb-5'></div>
                    <div><Link to = "/">Cumin seed</Link></div>
                    <div><Link to = "/about">Carom seed</Link></div>
                    <div><Link to = "/services">Fennel seed</Link></div>
                    <div><Link to = "/">Fenugreek</Link></div>
                    <div><Link to = "/">Coriander</Link></div>
                    <div><Link to = "/contact">Mustard</Link></div>
                </div>

                <div className='col-md-3'>
                    <h5>Get in touch</h5>
                    <div className='underline mb-5'></div>
                    <div><p className='text-white mb-1'><FaMapMarkerAlt/> Shree Shyam Spices Private Limited</p></div>
                    <div><p className='text-white mb-1'>Bazar No. 3, Bhopal Gunj, Bhopal Ganj, Bhilwara-311001, Rajasthan, India</p></div>
                    <div><p className='text-white mb-1'><FaEnvelope/> shrishyamspices@gmail.com</p></div>
                    <div><p className='text-white mb-1'><FaPhoneSquareAlt/> 8209041115</p></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer