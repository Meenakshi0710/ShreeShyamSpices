import React from 'react'
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className='topBar'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-4'>

                </div>
                <div className='col-sm-4'>
                    
                </div>
                <div className='col-sm-4 topbarIcons mx-2'>
                <Link className="nav-link" to="/cart"><FaShoppingCart/></Link>
                <Link className="nav-link" to="/login"><FaUserCircle/></Link> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar