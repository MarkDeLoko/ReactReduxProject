import React from 'react';
import LoginContainer from "../../Containers/Auth/Login/LoginContainer";
import AccountMenu from "../../Components/main/Menu/AccountMenu";
import Button from "@mui/material/Button";


const LoginPage = () => {
  // con
  function btnHandler(event) {
    event.preventDefault();
    // dispatch(getToken(inputFields))
  }

  return (
    <div>
      <Button onClick={btnHandler}>

      </Button>
      <AccountMenu/>
      <LoginContainer/>

    </div>
  );
};

export default LoginPage;