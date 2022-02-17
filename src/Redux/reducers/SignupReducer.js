import {
  SIGNUP,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS
} from "../actions/ActionTypes";

const defaultState = {
  isSignupFetching: false,
  signupError: false,
}

export default function signupReducer(state = defaultState, action) {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        isSignupFetching: true,
        signupError: true
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupError: false,
        isSignupFetching: false,
      }
    case SIGNUP_FAIL:
      return {
        ...state,
        signupError: true,
        isSignupFetching: false,
        // Показать состояние ошибки
      }

    default:
      return state;
  }
}