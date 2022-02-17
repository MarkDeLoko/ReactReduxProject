import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuthSelector} from "../../Hooks/selectors/UseAuthSelector";

const RequireAuth = ({children}) => {
  const location = useLocation()
  const accessToken = useAuthSelector()
  if (!accessToken) {
    return <Navigate to='/login' state={{from: location}}/>
  }
  return children
};

export default RequireAuth;
