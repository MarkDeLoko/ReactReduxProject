import React from 'react';
import './app.less'
import {useDispatch} from "react-redux";
import {Route, Router, Routes} from "react-router-dom";
import LoginPage from "../Pages/Auth/LoginPage";
import SignupPage from "../Pages/Auth/SignupPage";
import {history} from "../Redux/store";


const App = (props) => {
  // const dispatch = useDispatch()

  return (
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route exact path="/signup" element={<SignupPage />}/>
      </Routes>
  );
};

export default App;