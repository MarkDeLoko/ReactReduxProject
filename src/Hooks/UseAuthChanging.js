import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useAuthSelector} from "./selectors/UseAuthSelector";

export const useAuthChanging = () => {
  const {accessToken} = useAuthSelector()
  // console.log(accessToken)
  const navigate = useNavigate()
  useEffect(() => {
    if (accessToken) {
      // console.log('fgeeh')
      navigate('/personal')
    } else {
      // console.log('aaaaaaaaaaaaaaaaaa')
      navigate('/')
    }
  }, [accessToken])
}