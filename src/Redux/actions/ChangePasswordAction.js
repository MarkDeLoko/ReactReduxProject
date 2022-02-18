import {CHANGE_PASSWORD, CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_INFO} from "./ActionTypes";


export const changePassword = (email, oldPassword, newPassword, accessToken) => {
  // console.log(username, password)
  return {
    type: CHANGE_PASSWORD,
    payload: {
      request: {
        method: 'POST',
        url: '/changepassword',
        data: {
          email,
          oldPassword,
          newPassword,
          accessToken
        }
      }
    }
  }
}

export function setChangePasswordError(err) {
  return {
    type: CHANGE_PASSWORD_ERROR,
    payload: err
  }
}

export function setChangePasswordInfo(info) {
  return {
    type: CHANGE_PASSWORD_INFO,
    payload: info
  }
}

