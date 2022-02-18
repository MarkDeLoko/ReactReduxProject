import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setAuthInfo} from "../Redux/actions/AuthAction";
import {useAuthSelector} from "./selectors/UseAuthSelector";

export const useAuthInfoChanging = () => {
  const {authInfo} = useAuthSelector()
  const dispatch = useDispatch()
  useEffect(() => {
    if (authInfo) {
      setTimeout(() => {
        dispatch(setAuthInfo(''))
      }, 3000)
    }
  }, [authInfo])
}