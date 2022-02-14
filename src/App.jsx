import React from 'react';
import './app.less'
import {Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import SignupPage from "./Pages/Auth/SignupPage";
import UserPage from "./Pages/User/UserPage";
import {useSelector} from "react-redux";



const App = () => {
  const isAuth = useSelector(state => {
    const {authReducer} = state
    return authReducer.accessToken
  })
  console.log(isAuth || 'nope')
  return (
    isAuth
      ?
      <Routes>
        <Route path="/personal" element={<UserPage/>}/>
        <Route
          path="*"
          element={<UserPage/>}
        />
      </Routes>
      :
      <Routes>
        <Route path="/" element={<LoginPage/>}/>

        <Route path="/signup" element={<SignupPage/>}/>

      </Routes>
  );
};

export default App;