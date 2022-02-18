import {AUTH_ERROR, SIGNUP, SIGNUP_ERROR, SIGNUP_INFO} from "./ActionTypes";

export const signup = ({email, password}) => {
  return {
    type: SIGNUP,
    payload: {
      request: {
        method: 'POST',
        url: '/signup',
        data: {
          email,
          password,
        }
      }
    }
  }
}

export function setSignupError(signupError) {
  return {
    type: SIGNUP_ERROR,
    payload: signupError
  }
}
export function setSignupInfo(signupinfo) {
  return {
    type: SIGNUP_INFO,
    payload: signupInfo
  }
}

