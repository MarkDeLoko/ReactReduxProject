import {CHECK_AUTH} from "./ActionTypes";

export const checkAuth = (token) => {
  return {
    type: CHECK_AUTH,
    payload: {
      request: {
        method: 'POST',
        url: '/token',
        data: {
          token
        }
      }
    }
  }
}
