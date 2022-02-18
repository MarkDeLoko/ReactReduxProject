import React from 'react';
import {useLoginFieldsSelector} from "../../Hooks/selectors/UseLoginFieldsSelector";

const UserForm = () => {
  const {email} = useLoginFieldsSelector()

  return (
    <div style={{fontSize: '30px'}}>
      Добрый день, {email.split('@')[0]}!
    </div>
  );
};

export default UserForm;