import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContextApi'


//this is for login and register
const PublicRoutes = ({children}) => {
    let { authUser } = useContext(AuthContext || {});
  if(authUser && !authUser?.accessToken || window.localStorage.getItem('Token')){
return <Navigate to={'/user/profile'}/>

  } else {
      return <>{children}</>
  }
}

export default PublicRoutes;
