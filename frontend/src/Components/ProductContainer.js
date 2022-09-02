import React, { useState } from 'react'

import { getProducts } from '../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Product from './Product'
import Loader from './Loader'
import { useAlert } from 'react-alert'
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination";

import MetaData from './Metadata'




const ProductContainer = () => {
  
  const alert = useAlert()
  const [currentPage, setCurrentPage] = useState(1)
    const {loading, error, products, productsCount, resultPerPage}  = useSelector((state) => state.products);
    console.log(products);
    const { keyword } = useParams();
    const dispatch =  useDispatch();

    const setCurrentPageNo = (e)=>{
        setCurrentPage(e);
    }
       useEffect(() => {
      if(error){
        return alert.error(error);
      }
      dispatch(getProducts(keyword,currentPage));
    }, [dispatch, error,alert,keyword,currentPage])  
    
  return (
    <>
     <MetaData title="Products - Shree Shyam Spices" />
     <div className='secondImage'>
        

  <div className="hero-text">
  
  <h1>Products</h1>
  
  
</div>
</div>
{loading ? (
  <Loader/>
) :(
  <section className='section'>
<div className='container d-flex flex-row justify-content-evenly flex-wrap align-content-start mt-4'>


{products && products.map((product) => 
  <Product product = {product} key = {product._id}/>
)}

</div>

<div className='filterBox'>

</div>

{resultPerPage < productsCount &&
  (<div className='paginationBox'>
<Pagination
          activePage={currentPage}
          itemsCountPerPage={resultPerPage}
          totalItemsCount={productsCount}
          onChange={setCurrentPageNo}
          itemclassName="page-item"
          linkclassName="page-link"
          activeclassName='pageItemActive'
          activeLinkclassName='pageLinkActive'
        />
</div>)}
</section>
) }
    </>
  )
}

export default ProductContainer