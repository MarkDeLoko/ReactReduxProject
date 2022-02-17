import {LOG_OUT} from "./ActionTypes";

export const logout = (token) => {
  // console.log(username, password)
  // localStorage.removeItem('token')
  return {
    type: LOG_OUT,
    payload: {
      request: {
        method: 'POST',
        url: '/logout',
        data: {
          token
        }
      }
    }
  }
}