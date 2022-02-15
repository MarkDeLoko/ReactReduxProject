import {useSelector} from "react-redux";

export const useAuth = () => {
  return useSelector(state => {
    const {authReducer} = state
    // console.log(authReducer.accessToken, 'token')
    return authReducer.accessToken
  })
}

