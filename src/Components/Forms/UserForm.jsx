import React from 'react';
import {useFieldsSelector} from "../../Hooks/selectors/UseFieldsSelector";
import {Form} from "antd";

const UserForm = () => {
  const userEmail = useFieldsSelector().email

  // console.log(userEmail)
  return (
    <div>

          Hello, {userEmail}!

    </div>
  );
};

export default UserForm;