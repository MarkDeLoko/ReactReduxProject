import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setSignupInfo} from "../Redux/actions/AuthAction";
import {useSignupSelector} from "./selectors/UseSignupSelector";
import {useNavigate} from "react-router-dom";

export const useSignupInfoChanging = () => {
  const {signupInfo} = useSignupSelector()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (signupInfo) {
      navigate('/')
      setTimeout(() => {
        dispatch(setSignupInfo(''))
      }, 3000)
    }
  }, [signupInfo])
}