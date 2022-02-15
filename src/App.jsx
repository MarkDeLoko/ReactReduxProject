import React from 'react';
import './app.less'
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import SignupPage from "./Pages/Auth/SignupPage";
import UserPage from "./Pages/User/UserPage";
import RequireAuth from "./Components/hoc/RequireAuth";
import RequireNoAuth from "./Components/hoc/RequireNoAuth";
import {useAuthChanging} from "./Hooks/UseAuthChanging";
import AccountMenu from "./Components/Menu/AccountMenu";
import {Layout} from "antd";


const App = () => {
  // const isAuth = useSelector(state => {
  //   const {authReducer} = state
  //   console.log(authReducer.accessToken, 'token')
  //   return authReducer.accessToken
  // })
  // console.log(isAuth || 'nope')
  return (
    <>
      <div style={{width: '80vw'}}>
        <Layout>
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
        </Layout>
      </div>
    </>
  );
};

export default App;