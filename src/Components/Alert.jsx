import React from 'react';
import {useAuthSelector} from "../Hooks/selectors/UseAuthSelector";
import {useSignupSelector} from "../Hooks/selectors/UseSignupSelector";
import {useChangePasswordSelector} from "../Hooks/selectors/UseChangePasswordSelector";


const Alert = () => {
  const {authError} = useAuthSelector()
  const {authInfo} = useAuthSelector()
  const {signupError} = useSignupSelector()
  const {signupInfo} = useSignupSelector()
  const {changePassError, changePassInfo} = useChangePasswordSelector()


  let alertComponent
  if (signupInfo || changePassInfo || authInfo) {
    alertComponent =
      <div className="alert alert-success" role="alert">
        {signupInfo || changePassInfo || authInfo}
      </div>
  }
  if (authError || signupError || changePassError) {
    alertComponent =
      <div className="alert alert-danger" role="alert">
        {signupError || authError || changePassError}
      </div>
  }
  return (
    <>
      {alertComponent}
    </>
  );
}

export default Alert;