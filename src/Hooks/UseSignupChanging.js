import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useSignupSelector} from "./selectors/UseSignupSelector";

export const useSignupChanging = () => {
  const {signupError} = useSignupSelector()
  const navigate = useNavigate()
  useEffect(() => {
    if (signupError) {
      console.log(signupError)
    } else {
      navigate('/')
    }
  }, [signupError])
}