
import './App.css';
import {
 
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Contactus from './Components/Contactus';

import Harvestchart from './Components/Harvestchart';
import ProductContainer from './Components/ProductContainer';
import ProductDetails from './Components/ProductDetails';
import Search from './Components/Search';
import LoginSignup from './Components/User/LoginSignup';
import Cart from './Components/Cart/Cart';
import Shipping from './Components/Cart/Shipping';
import ProtectedRoute from './Components/Route/ProtectedRoute';
import ConfirmOrder from './Components/Cart/ConfirmOrder';
import Payment from './Components/Cart/Payment';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import OrderSuccess from './Components/Cart/OrderSuccess';
import MyOrders from './Components/Order/MyOrders';
import OrderDetails from './Components/Order/OrderDetails';
import Dashboard from './Components/Admin/Dashboard';
import ProductList from './Components/Admin/ProductList';
import NewProduct from './Components/Admin/NewProduct';
import store from "./store"
import { loadUser } from './actions/userAction';
import UserOptions from './Components/UserOptions';
import { useSelector } from 'react-redux';
import Profile from './Components/User/Profile';
import UpdateProfile from './Components/User/UpdateProfile';
import UpdatePassword from './Components/User/UpdatePassword';
import ForgotPassword from './Components/User/ForgotPassword';
import ResetPassword from './Components/User/ResetPassword';
import UpdateProduct from './Components/Admin/UpdateProduct';
import OrderList from './Components/Admin/OrderList';
import ProcessOrder from './Components/Admin/ProcessOrder';
import UsersList from './Components/Admin/UsersList';
import UpdateUser from './Components/Admin/UpdateUser';
import ProductReviews from './Components/Admin/ProductReviews';

import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  const {isAuthenticated,user} = useSelector(state=>state.user)
  const [stripeApiKey, setStripeApiKey] = useState("");
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  
  async function getStripeApiKey (){
    
    const {data} = await axios.get("/api/stripeapikey");
    

    setStripeApiKey(data.stripeApiKey);

  }

  useEffect(() => {
    getStripeApiKey()
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
    store.dispatch(loadUser());

   
  }, [])
  
  const stripePromise = loadStripe("pk_test_51LA5TBSFHF0guij2hLfTCNFL9FS2bOGGZE9EbR8BMvLSfTTg2FuMPgNd3FuVUl10w7P7T37Oufx01Qbl19IpWqTe00LQJp2KVr")
  
  
  return (
    <div>
      <>
      
        <ScrollToTop/>
      {!["/login","/admin/dashboard", "/account", "/search","/admin/products","/admin/product/new",
    "/admin/orders","/user/admin/users","/admin/product/reviews","/orders","/shipping","/order/confirm",
    "/process/payment","/user/password/update","/user/me/update","/user/password/forgot",].includes(location.pathname) && <Navbar scroll = {scroll}/>}
      {isAuthenticated && <UserOptions user = {user}/>}
      
        
      <Routes>

        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/products" element={<ProductContainer/>} />
        <Route exact path="/products/:keyword" element={<ProductContainer/>} />
        <Route exact path="/product/:id" element={<ProductDetails/> } />
        <Route exact path="/harvestchart" element={<Harvestchart/>} />
        <Route exact path="/contact" element={<Contactus/>} />
        <Route exact path="/search" element={<Search/>} />
        <Route exact path="/login" element={<LoginSignup/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route path="/account" element={<ProtectedRoute Component = {Profile} />}/>
        <Route path="/user/me/update" element={<ProtectedRoute Component = {UpdateProfile} />}/>
        <Route path="/user/password/update" element={<ProtectedRoute Component = {UpdatePassword} />}/>
        <Route path="/user/password/forgot" element={<ForgotPassword/>} />
        <Route path="/user/password/reset/:token" element={<ResetPassword/>} />
        <Route path="/shipping" element={<ProtectedRoute Component = {Shipping} />}/>
        <Route path="/order/confirm" element={<ProtectedRoute Component = {ConfirmOrder} />}/>
        
        
        <Route path="/process/payment" element={ <Elements stripe = {stripePromise}> <ProtectedRoute Component = {Payment}  /></Elements>}/>
        <Route path="/success" element={ <ProtectedRoute Component = {OrderSuccess}  />}/>
        <Route path="/orders" element={ <ProtectedRoute Component = {MyOrders}  />}/>
        <Route path="/order/:id" element={ <ProtectedRoute Component = {OrderDetails}  />}/>
        <Route path="/admin/dashboard" isAdmin = {true} element={ <ProtectedRoute  Component = {Dashboard}  />}/>
        <Route path="/admin/products" isAdmin = {true} element={ <ProtectedRoute  Component = {ProductList}  />}/>
        <Route path="/admin/product/new" isAdmin = {true} element={ <ProtectedRoute  Component = {NewProduct}  />}/>
        <Route path="/admin/product/:id" isAdmin = {true} element={ <ProtectedRoute  Component = {UpdateProduct}  />}/>
        <Route path="/admin/orders" isAdmin = {true} element={ <ProtectedRoute  Component = {OrderList}  />}/>
        <Route path="/admin/order/:id" isAdmin = {true} element={ <ProtectedRoute  Component = {ProcessOrder}  />}/>
        <Route path="/user/admin/users" isAdmin = {true} element={ <ProtectedRoute  Component = {UsersList}  />}/>
        <Route path="user/admin/:id" isAdmin = {true} element={ <ProtectedRoute  Component = {UpdateUser}  />}/>
        <Route path="/admin/product/reviews" isAdmin = {true} element={ <ProtectedRoute  Component = {ProductReviews}  />}/>
        
        
     
    </Routes>
    
    <Footer/>
   
      </>
    </div>
  );
}

export default App;
