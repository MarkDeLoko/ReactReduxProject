import React from 'react';
import './app.less'
import {Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import SignupPage from "./Pages/Auth/SignupPage";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
    </Routes>
  );
};

export default App;