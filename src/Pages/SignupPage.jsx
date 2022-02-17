import React from 'react';
import SignUpForm from "../Components/Forms/SignUpForm";
import {Row} from "antd";
import './pages.less'

const SignupPage = () => {
  return (
    <Row className='page'>
      <SignUpForm/>
    </Row>
  );
};

export default SignupPage;