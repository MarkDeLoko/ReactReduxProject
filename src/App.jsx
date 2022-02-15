import React from 'react';
import './app.less'
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import SignupPage from "./Pages/Auth/SignupPage";
import UserPage from "./Pages/User/UserPage";
import {useSelector} from "react-redux";
import RequireAuth from "./Components/hoc/RequireAuth";


const App = () => {
  // const isAuth = useSelector(state => {
  //   const {authReducer} = state
  //   console.log(authReducer.accessToken, 'token')
  //   return authReducer.accessToken
  // })
  // console.log(isAuth || 'nope')
  return (
    <Routes>
      <Route path="/personal" element={
        <RequireAuth>
          <UserPage/>
        </RequireAuth>
      }/>
      <Route path='*' element={<Navigate to="/personal" replace/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path='/' element={<Navigate to="/login" replace/>}/>
    </Routes>

  );
};

export default App;