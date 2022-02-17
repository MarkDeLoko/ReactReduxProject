import {LOGIN_FORM_FIELDS} from "./ActionTypes";


export function setLoginFormFields({email, password}) {
  return {
    type: LOGIN_FORM_FIELDS,
    payload: {
      email,
      password
    }
  }
}

