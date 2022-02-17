import {AUTH} from "./ActionTypes";

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

