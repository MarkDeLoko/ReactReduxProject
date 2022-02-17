import {SIGNUP} from "./ActionTypes";

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
