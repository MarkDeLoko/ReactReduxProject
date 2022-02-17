import {CHECK_AUTH} from "./ActionTypes";

export const checkAuth = (token) => {
  // console.log(username, password)
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
