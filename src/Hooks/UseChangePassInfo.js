import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useChangePasswordSelector} from "./selectors/UseChangePasswordSelector";
import {setChangePasswordInfo} from "../Redux/actions/ChangePasswordAction";

export const useChangePassInfo = () => {
  const {changePassInfo} = useChangePasswordSelector()
  const dispatch = useDispatch()
  useEffect(() => {
    if (changePassInfo) {
      setTimeout(() => {
        dispatch(setChangePasswordInfo(''))
      }, 3000)
    }

  }, [changePassInfo])
}