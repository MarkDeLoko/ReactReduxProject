import {AUTH} from "./ActionTypes";

export const getToken = ({username, password}) => {
  console.log(username, password)
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
