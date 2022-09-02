import React from 'react'
import { Link } from 'react-router-dom'
import './CartItemCard.css'

const CartItemCard = (props) => {
    const {item, deleteCartItems } = props;
  return (
    <>
    <div className='CartItemCard'>
        <img src={item.image} alt = 'pimg'/>
        <div>
            <Link to= {`/product/${item.product}`}>{item.name}</Link>
            <span>{`Price : Rs. ${item.price}`}</span>
            <p onClick={()=>deleteCartItems(item.product)}>Remove</p>
        </div>

    </div>
    </>

  )
}

export default CartItemCard