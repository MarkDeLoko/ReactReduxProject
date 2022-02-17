import React from 'react';
import './app.less'
import {Navigate, Route, Routes} from "react-router-dom";
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
  useAuthChanging();
  useSignupChanging();

  return (
    <Layout style={{width: '80vw'}}>
      <Layout.Content>
        <AccountMenu/>
        <Routes>
          <Route path="/login" element={
            <RequireNoAuth>
              <LoginPage/>
            </RequireNoAuth>
          }/>
          <Route path="/personal" element={
            <RequireAuth>
              <UserPage/>
            </RequireAuth>
          }/>
          <Route path="/signup" element={
            <RequireNoAuth>
              <SignupPage/>
            </RequireNoAuth>
          }/>
          <Route path='/' element={<Navigate to="/login" replace/>}/>
        </Routes>
      </Layout.Content>
    </Layout>
  );
};

export default App;