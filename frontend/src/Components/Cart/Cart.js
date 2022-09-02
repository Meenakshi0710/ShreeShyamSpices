import React from 'react'
import CartItemCard from './CartItemCard'
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsToCart, removeItemsFromCart } from '../../actions/cartAction';
import { Link, useNavigate } from 'react-router-dom';
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {cartItems}  = useSelector((state) => state.cart);
    console.log(cartItems);
    const increaseQuantity = (id,quantity,stock) =>{
        const newQty = quantity+1;
        if(stock <= quantity){
            return;
        }
        dispatch(addProductsToCart(id,newQty))
    }

    const decreaseQuantity = (id,quantity) =>{
        const newQty = quantity - 1;
        if(1 >= quantity){
            return;
        }
        dispatch(addProductsToCart(id,newQty))
    }

    const deleteCartItems = (id) =>{
        dispatch(removeItemsFromCart(id));
    }
   

    const checkoutHandler = () =>{
        navigate("/login?redirect=/shipping");
    }
  return (
    <>
  <div style={{ backgroundColor: "#9E9E9E", height :"20vh", backgroundSize: 'cover',
        width: "100%", opacity:"0.8" }}>
        
 
</div>
    
        {cartItems.length === 0 ? (
            <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>
        ) : (
            <div className='cartPage'>
            <div className='cartHeader'>
                <p>Product</p>
                <p>Quantity</p>
                <p>SubTotal</p>
            </div>
          
            {cartItems && cartItems.map((item) => (
                <div className='cartContainer' key = {item.product}>
                <CartItemCard item = {item} deleteCartItems = {deleteCartItems} />
                <div className='cartInput'>
                <button onClick = {() => decreaseQuantity(item.product,item.quantity)}>-</button>
                <input readOnly value={item.quantity} type = 'number'/>
                <button onClick = {() => increaseQuantity(item.product,item.quantity,item.stock)}>+</button>
                </div>
                <p className='cartSubtotal'>{`Rs. ${item.price * item.quantity}`}</p>
            </div>
            
            ))}
            
            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`₹${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick = {checkoutHandler}>Check Out</button>
              </div>
            </div>
            </div>
        )}
    </>
  )
}

export default Cart