import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useChangePasswordSelector} from "./selectors/UseChangePasswordSelector";
import {setChangePasswordError} from "../Redux/actions/ChangePasswordAction";

export const useChangePassError = () => {
  const {changePassError} = useChangePasswordSelector()
  const dispatch = useDispatch()
  useEffect(() => {
    if (changePassError) {
      setTimeout(() => {
        dispatch(setChangePasswordError(''))
      }, 3000)
    }

  }, [changePassError])
}