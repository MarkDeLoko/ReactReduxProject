import React from 'react';
import LoginContainer from "../../Containers/Auth/Login/LoginContainer";
import AccountMenu from "../../Components/main/Menu/AccountMenu";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {getToken} from "../../Components/actions/auth";

const LoginPage = () => {
  const dispatch = useDispatch()

  function onBtnClick() {
    dispatch(getToken('john', 'password123admin'))
  }

  return (
    <div>
      <AccountMenu/>
      <LoginContainer/>
      <Button onClick={() => onBtnClick()}>
        gggggggggggggggggggggggggggggggggggggggggggggggggggggg
      </Button>
    </div>
  );
};

export default LoginPage;