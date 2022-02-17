import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useAuthSelector} from "./selectors/UseAuthSelector";
import {checkAuth} from "../Redux/actions/CheckAuthAction";

export const useAuthChanging = () => {
  const {accessToken} = useAuthSelector()

  console.log('Ghjdthrf')
  const navigate = useNavigate()
  useEffect(() => {
    if (accessToken) {
      // if (!localStorage.getItem('token')){
      //
      //   localStorage.setItem('token', accessToken)
      // }
      navigate('/personal')
    } else {
      navigate('/')

    }
  }, [accessToken])
}