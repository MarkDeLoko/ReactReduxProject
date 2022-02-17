import React from 'react';
import './app.less'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import UserPage from "./Pages/UserPage";
import RequireAuth from "./Components/hoc/RequireAuth";
import RequireNoAuth from "./Components/hoc/RequireNoAuth";
import {useAuthChanging} from "./Hooks/UseAuthChanging";
import AccountMenu from "./Components/Menu/AccountMenu";
import {Layout} from "antd";
import {useSignupChanging} from "./Hooks/UseSignupChanging";


const App = () => {
  // const isAuth = useSelector(state => {
  //   const {authReducer} = state
  //   console.log(authReducer.accessToken, 'token')
  //   return authReducer.accessToken
  // })
  // console.log(isAuth || 'nope')
  return (

      <div style={{width: '80vw'}}>
        <Layout>
          <Layout.Content>
            <AccountMenu/>
            <Routes>
              <Route path="/personal" element={
                <RequireAuth>
                  <UserPage/>
                </RequireAuth>
              }/>
              <Route path="/login" element={
                <RequireNoAuth>
                  <LoginPage/>
                </RequireNoAuth>
              }/>
              <Route path="/signup" element={<SignupPage/>}/>
              <Route path='/' element={<Navigate to="/login" replace/>}/>
            </Routes>
          </Layout.Content>
        </Layout>
      </div>

  );
};

export default App;