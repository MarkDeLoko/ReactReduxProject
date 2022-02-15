import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../../Hooks/UseAuth";

const RequireAuth = ({children}) => {
  const location = useLocation()
  const accessToken = useAuth()
  if (!accessToken) {
    return <Navigate to='/login' state={{from: location}}/>
  }
  return children
};

export default RequireAuth;
