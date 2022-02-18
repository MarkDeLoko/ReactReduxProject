import {AUTH, AUTH_ERROR, AUTH_INFO} from "./ActionTypes";

export const auth = ({email, password}) => {
  return {
    type: AUTH,
    payload: {
      request: {
        method: 'POST',
        url: '/login',
        data: {
          email,
          password,
        }
      }
    }
  }
}

export function setAuthError(authError) {
  return {
    type: AUTH_ERROR,
    payload: authError
  }
}

export function setAuthInfo(authInfo) {
  return {
    type: AUTH_INFO,
    payload: authInfo
  }
}
