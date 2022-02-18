import {SIGNUP_FORM_FIELDS} from "../actions/ActionTypes";

const defaultState = {
  email: '',
  password: '',
  secondPassword: ''
}

export default function signupFieldsReducer(state = defaultState, action) {
  switch (action.type) {
    case SIGNUP_FORM_FIELDS:
      return {
        ...state,
        email: typeof action.payload.email === 'string' ? action.payload.email : state.email,
        password: typeof action.payload.password === 'string' ? action.payload.password : state.password,
        secondPassword: typeof action.payload.secondPassword === 'string' ? action.payload.secondPassword : state.secondPassword,
      }
    default:
      return state;
  }
}