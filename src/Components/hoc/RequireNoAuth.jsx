import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../../Hooks/UseAuth";

const RequireNoAuth = ({children}) => {
  const location = useLocation()
  const accessToken = useAuth()
  if (accessToken) {
    return <Navigate to='/personal' state={{from: location}} replace/>
  }
  return children
};

export default RequireNoAuth;
