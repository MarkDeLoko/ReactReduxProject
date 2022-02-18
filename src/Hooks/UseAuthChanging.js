import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useAuthSelector} from "./selectors/UseAuthSelector";

export const useAuthChanging = () => {
  const {accessToken} = useAuthSelector()
  const navigate = useNavigate()
  useEffect(() => {
    if (accessToken) {
      navigate('/personal')
    }
  }, [accessToken])
}