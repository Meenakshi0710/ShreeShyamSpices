import React from 'react'
import { Link } from 'react-router-dom'


const Product = (props) => {

  const { product } = props;
  return (
    <>
  <div className='productCardColor'>
       <Link to = {`/product/${product._id}`} className='text-decoration-none text-reset'>
       
       <div className="card my-3 productCard " style={{width: "18rem"}}>
        <img src={product.images[0].url} className="card-img-top" alt={product.name}/>
  <div className="card-body">
    <h5 className="card-title text-center">{product.name}</h5>
    </div>
  </div>

</Link>
</div>
    </>
  )
}

export default Product