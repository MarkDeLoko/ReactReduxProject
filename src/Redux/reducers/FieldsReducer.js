import {LOGIN_FORM_FIELDS} from "../actions/ActionTypes";

const defaultState = {
  email: '',
  password: '',
}

export const fieldsReducer = (state = defaultState, action) => {
  // console.log('Login reducer >state> ', state)
  switch (action.type) {
    case LOGIN_FORM_FIELDS:
      return {
        ...state,
        email: typeof action.payload.email === 'string' ? action.payload.email : state.email,
        password: typeof action.payload.password === 'string' ? action.payload.password : state.password,
      }

    default:
      return state;
  }
}