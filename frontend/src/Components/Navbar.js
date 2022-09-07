import React from 'react'
import { FaSearch, FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import $ from 'jquery';

export default function Navbar({scroll}) {
  const { cartItems } = useSelector((state) => state.cart);
  
 

const hideNavbar = () =>{
  $('.navbar-collapse').collapse('hide');
}


 
    return (
<>
      <nav className={scroll ? "navbar navbar-expand-lg navbar-dark fixed-top bg-scroll" : "navbar navbar-expand-lg navbar-dark fixed-top"} >
  <div className="container-fluid">
    
      <img src="../public/Data/images/logo.jpg" alt="" width="120" height="104"/>
      <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" onClick = {hideNavbar} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" onClick = {hideNavbar}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services" onClick = {hideNavbar}>Services</Link>
        </li>
        <li className="nav-item btn-group">
        <Link className="nav-link" to="/products" role="button" onClick = {hideNavbar}>Products</Link>
          <Link className="nav-link dropdown-toggle dropdown-toggle-split iconsHover" to="/products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/products/jeera" onClick = {hideNavbar}>Cumin seed</Link></li>
            <li><Link className="dropdown-item" to="/products/ajwain" onClick = {hideNavbar}>Carom seed</Link></li>
            <li><Link className="dropdown-item" to="/products/saunf" onClick = {hideNavbar}>Fennel seed</Link></li>
            <li><Link className="dropdown-item" to="/products/methi" onClick = {hideNavbar}>Fenugreek</Link></li>
            <li><Link className="dropdown-item" to="/products/dhaniya" onClick = {hideNavbar}>Coriander</Link></li>
            <li><Link className="dropdown-item" to="/products/rai" onClick = {hideNavbar}>Mustard</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/harvestchart" onClick = {hideNavbar}>Harvest Chart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact" onClick = {hideNavbar}>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link iconsHover" to="/search" onClick = {hideNavbar}><FaSearch/></Link>
        </li>
        <li className="nav-item">
        
       {cartItems.length > 0 && <div style = {{display : "flex",
                          justifyContent : "flex-end",
                          position: "absolute",
                          }}>
            <span className="badge rounded-pill bg-warning" >{cartItems.length}</span>
            </div>}
            <Link className="nav-link iconsHover" to="/cart" onClick = {hideNavbar}><FaShoppingCart/></Link>
         
          
        </li>
        <li className="nav-item">
          <Link className="nav-link  iconsHover" to="/login" onClick = {hideNavbar}><FaUserCircle/></Link>
        </li>
      </ul>
     
      
      
    </div>
  </div>
</nav> 

</>
      
    );
}
