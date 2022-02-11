import {LOGIN_FORM_FIELDS} from "./ActionTypes";


export function setLoginFormFields({username, password}) {
  return {
    type: LOGIN_FORM_FIELDS,
    payload: {
      username,
      password
    }
  }
}

