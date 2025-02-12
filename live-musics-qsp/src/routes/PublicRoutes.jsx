import React from "react";
import { AuthContext } from "../components/context/AuthContextApi";
import { Navigate } from "react-router-dom";
import { useContext } from "react"; 

//! This is for Login and Register
//* here we are restricting loggedin user to go to login and register page
const PublicRoutes = ({ children }) => {
  let { authUser } = useContext(AuthContext || {});
  if (
    (authUser && !authUser?.accessToken) ||
    window.localStorage.getItem("TOKEN")
  ) {
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
};

export default PublicRoutes;
