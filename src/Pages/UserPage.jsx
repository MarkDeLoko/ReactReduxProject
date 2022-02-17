import React from 'react';
import {Row} from "antd";
import UserForm from "../Components/Forms/UserForm";
import './pages.less'
import {useCheckAuth} from "../Hooks/UseCheckAuth";

const UserPage = () => {

  return (
    <Row className='page'>
      <UserForm/>
    </Row>
  );
};

export default UserPage;