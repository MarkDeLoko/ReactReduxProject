import React from 'react';
import {useFieldsSelector} from "../../Hooks/selectors/UseFieldsSelector";

const UserForm = () => {
  const userEmail = useFieldsSelector().email

  // console.log(userEmail)
  return (
    <div style={{fontSize: '30px'}}>
      Добрый день, {userEmail.split('@')[0]}!
    </div>
  );
};

export default UserForm;