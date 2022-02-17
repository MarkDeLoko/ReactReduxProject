import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useSignupSelector} from "./selectors/UseSignupSelector";

export const useSignupChanging = () => {
  const {signupError} = useSignupSelector()

  // console.log(accessToken)
  const navigate = useNavigate()
  useEffect(() => {
    if (signupError) {
      // console.log('fgeeh')
      console.log('sign err',signupError)
      localStorage.setItem('token', signupError)
      // navigate('/personal')
    } else {
      // console.log('aaaaaaaaaaaaaaaaaa')

      navigate('/login')

    }
  }, [signupError])
}