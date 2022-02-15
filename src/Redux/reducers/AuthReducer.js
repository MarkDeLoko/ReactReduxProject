import {AUTH, AUTH_FAIL, AUTH_SUCCESS} from "../actions/ActionTypes";

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
        // error: action.payload,
        // Показать состояние ошибки
      }

    default:
      return state;
  }
}