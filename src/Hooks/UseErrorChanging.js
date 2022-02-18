import React, {useEffect} from 'react';
import {useAuthSelector} from "./selectors/UseAuthSelector";
import {useDispatch} from "react-redux";
import {setAuthError} from "../Redux/actions/AuthAction";
import {useSignupSelector} from "./selectors/UseSignupSelector";
import {setSignupError} from "../Redux/actions/SignUpAction";

export const useErrorChanging = () => {
  const {authError} = useAuthSelector()
  const {signupError} = useSignupSelector()
  const dispatch = useDispatch()
  useEffect(() => {
    if (authError) {
      setTimeout(() => {
        dispatch(setAuthError(''))
      }, 3000)
    }
    if (signupError) {
      setTimeout(() => {
        dispatch(setSignupError(''))
      }, 3000)
    }
  }, [authError, signupError])
}