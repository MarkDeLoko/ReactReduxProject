import React from 'react';
import {useLocation, Navigate} from "react-router-dom";
import {useAuth} from "../../Hooks/UseAuth";

const RequireAuth = ({children}) => {
  const location = useLocation()
  const auth = useAuth()
  console.log(auth)
  if (!auth){
    return <Navigate to='/login' state={{from: location}}/>
  }
  return children
};

export default RequireAuth;
