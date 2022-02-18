import React from 'react';
import {Row} from "antd";
import UserForm from "../Components/Forms/UserForm";
import './pages.less'
import ChangePassModal from "../Components/Modals/ChangePassModal";

const UserPage = () => {

  return (
    <Row className='page'>
      <UserForm/>
      <ChangePassModal/>
    </Row>

  );
};

export default UserPage;