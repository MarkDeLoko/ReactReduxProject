import React from 'react';
import {useDispatch} from "react-redux";
import {checkAuth} from "../Redux/actions/CheckAuthAction";
import {useAuthSelector} from "./selectors/UseAuthSelector";

export const useCheckAuth = () => {
  const {accessToken} = useAuthSelector()
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  if (!accessToken) {
    if (token) {
      dispatch(checkAuth(token))
    } else {
    }
  }
}