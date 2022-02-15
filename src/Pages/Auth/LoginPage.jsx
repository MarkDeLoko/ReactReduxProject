import React from 'react';
import {Row} from "antd";
import LoginForm from "../../Components/Forms/Login/LoginForm";
import './pages.less'

const LoginPage = () => {
  return (
    <Row className="page">
      <LoginForm/>
    </Row>
  );
};

export default LoginPage;