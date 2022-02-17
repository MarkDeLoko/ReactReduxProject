import { SIGNUP} from "./ActionTypes";

export const signup = ({email, password}) => {
  // console.log(username, password)
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
