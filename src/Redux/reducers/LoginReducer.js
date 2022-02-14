import {LOGIN_FORM_FIELDS} from "../actions/ActionTypes";

const defaultState = {
  username: '',
  password: '',
}

export const loginReducer = (state = defaultState, action) => {
  console.log('Login reducer >state> ', state)
  switch (action.type) {
    case LOGIN_FORM_FIELDS:
      return {
        ...state,
        username: typeof action.payload.username === 'string' ? action.payload.username : state.username,
        password: typeof action.payload.password === 'string' ? action.payload.password : state.password,
      }

    default:
      return state;
  }
}