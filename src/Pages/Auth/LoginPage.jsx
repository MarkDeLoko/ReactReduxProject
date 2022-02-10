import React from 'react';
import LoginContainer from "../../Containers/Auth/Login/LoginContainer";
import AccountMenu from "../../Components/main/Menu/AccountMenu";

const LoginPage = () => {
  return (
    <div>
      <AccountMenu/>
      <LoginContainer/>
    </div>
  );
};

export default LoginPage;