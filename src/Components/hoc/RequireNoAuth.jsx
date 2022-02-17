import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuthSelector} from "../../Hooks/selectors/UseAuthSelector";

const RequireNoAuth = ({children}) => {
  const location = useLocation()
  const accessToken = useAuthSelector()
  if (accessToken) {
    return <Navigate to='/personal' state={{from: location}} replace/>
  }
  return children
};

export default RequireNoAuth;
