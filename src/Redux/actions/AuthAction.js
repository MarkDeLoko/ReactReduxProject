import {AUTH, AUTH_ERROR, LOGIN_FORM_FIELDS, SIGNUP_INFO} from "./ActionTypes";

export const auth = ({email, password}) => {
  // console.log(username, password)
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

export function setSignupInfo(signupInfo) {
  return {
    type: SIGNUP_INFO,
    payload: signupInfo
  }
}
