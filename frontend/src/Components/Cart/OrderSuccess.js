import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const OrderSuccess = () => {
  return (
    <>
    <div style={{ backgroundColor: "#9E9E9E", height :"20vh", backgroundSize: 'cover',
        width: "100%", opacity:"0.8" }}>
        
  <Navbar/>
</div>
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
    </>
  );
};

export default OrderSuccess;