import React from 'react';
import {Card, Row} from "antd";
import LoginForm from "../Components/Forms/LoginForm";
import './pages.less'

const LoginPage = () => {
  return (

      <Row className="page">
        <LoginForm/>
      </Row>

  );
};

export default LoginPage;