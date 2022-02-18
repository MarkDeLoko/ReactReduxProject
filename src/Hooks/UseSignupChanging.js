import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useSignupSelector} from "./selectors/UseSignupSelector";

export const useSignupChanging = () => {
  const {signupStatus} = useSignupSelector()
  const navigate = useNavigate()
  useEffect(() => {
    if (!signupStatus) {
      navigate('/')
    }
  }, [signupStatus])
}