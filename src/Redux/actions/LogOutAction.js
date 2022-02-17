import {LOG_OUT} from "./ActionTypes";

export const logout = (token) => {
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