import {AUTH, AUTH_ERROR, AUTH_FAIL, AUTH_INFO, AUTH_SUCCESS, LOG_OUT, LOG_OUT_SUCCESS} from "../actions/ActionTypes";

const defaultState = {
  isFetching: false,
  accessToken: null,
  authInfo: false,
  authError: '',
}

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        isFetching: true,
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.data.success ? action.payload.data.accessToken : '',
        authInfo: action.payload.data.success ? action.payload.data.authInfo : '',
        authError: !action.payload.data.success ? action.payload.data.reason : '',
        isFetching: false,
      }
    case AUTH_FAIL:
      return {
        ...state,
        isFetching: false,
      }

    case AUTH_ERROR:
      return {
        ...state,
        authError: action.payload
      }

    case LOG_OUT:
      return {
        ...state,
        isFetching: true,

      }
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        accessToken: null
      }
    case AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload
      }


    default:
      return state;
  }
}