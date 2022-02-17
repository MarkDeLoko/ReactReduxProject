import {
  AUTH,
  AUTH_FAIL,
  AUTH_SUCCESS,
  CHECK_AUTH,
  CHECK_AUTH_FAIL,
  CHECK_AUTH_SUCCESS,
  LOG_OUT, LOG_OUT_SUCCESS, REHYDRATE
} from "../actions/ActionTypes";

const defaultState = {
  isFetching: false,
  accessToken: null,
  refreshToken: null,
  error: '',
}

export default function authReducer(state = defaultState, action) {
  // console.log('Auth reducer > ', state)
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        isFetching: true,
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        accessToken: action.payload.data.accessToken,
        refreshToken: action.payload.data.refreshToken
      }
    case AUTH_FAIL:
      return {
        ...state,
        isFetching: false,
        // Показать состояние ошибки
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
    case CHECK_AUTH:
      return {
        ...state,
        isFetching: true,
      }
    case CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        accessToken: action.payload.data.accessToken
      }
    case CHECK_AUTH_FAIL:
      return {
        ...state,
        isFetching: false,
        accessToken: null
      }

    default:
      return state;
  }
}