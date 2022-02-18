import {SIGNUP, SIGNUP_ERROR, SIGNUP_FAIL, SIGNUP_INFO, SIGNUP_SUCCESS} from "../actions/ActionTypes";

const defaultState = {
  isSignupFetching: false,
  signupStatus: false,
  signupError: '',
  signupInfo: ''
}

export default function signupReducer(state = defaultState, action) {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        isSignupFetching: true,
        signupStatus: true
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupStatus: false,
        isSignupFetching: false,
        signupError: action.payload.data.success ? '' : action.payload.data.reason,
        signupInfo: action.payload.data.success ? action.payload.data.signupInfo : ''
      }
    case SIGNUP_FAIL:
      return {
        ...state,
        signupStatus: true,
        isSignupFetching: false,
        signupError: 'Ошибка'

      }
    case SIGNUP_ERROR:
      return {
        ...state,
        signupError: action.payload
      }
    case SIGNUP_INFO:
      return {
        ...state,
        signupInfo: action.payload
      }

    default:
      return state;
  }
}