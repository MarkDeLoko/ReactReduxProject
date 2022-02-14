import {AUTH, AUTH_FAIL, IS_FETCHING} from "./ActionTypes";

export const getToken = ({username, password}) => {
  // console.log(username, password)
  return {
    type: AUTH,
    payload: {
      request: {
        method: 'POST',
        url: '/login',
        data: {
          username,
          password,
        }
      }
    }
  }
}

export const setError = (payload) => ({type: AUTH_FAIL, payload})
export const setIsFetching = (payload) => ({type: IS_FETCHING, payload})