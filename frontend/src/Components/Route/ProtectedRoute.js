import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



const ProtectedRoute = (props) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  console.log(user);
  const {Component, isAdmin} = props;
    console.log(isAuthenticated);
  if (isAuthenticated === false) {
    return <Navigate to="/login" />;
  }
  if(isAdmin === true && user.role !== "admin"){
    return <Navigate to="/login" />;
  }

  return <Component/>;
}

    

export default ProtectedRoute;
