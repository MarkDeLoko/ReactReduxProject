import {SIGNUP_FORM_FIELDS} from "./ActionTypes";


export function setSignupFormFields({email, password, secondPassword}) {
  return {
    type: SIGNUP_FORM_FIELDS,
    payload: {
      email,
      password,
      secondPassword
    }
  }
}

