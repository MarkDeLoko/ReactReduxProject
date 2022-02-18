import {
  CHANGE_PASSWORD, CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_INFO,
  CHANGE_PASSWORD_SUCCESS,
  SIGNUP,
  SIGNUP_ERROR,
  SIGNUP_FAIL,
  SIGNUP_INFO,
  SIGNUP_SUCCESS
} from "../actions/ActionTypes";

const defaultState = {
  // changePassSuccess: false,
  changePassInfo: '',
  changePassStatus: false,
  changePassError: ''

}

export default function changePasswordReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_PASSWORD:
      return {
        ...state,
        changePassStatus: true
      }
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePassInfo: action.payload.data.success ? action.payload.data.info : '',
        changePassError: !action.payload.data.success ? action.payload.data.error : '',
        // changePassSuccess: action.payload.data.success,
        changePassStatus: false
      }
    case CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        changePassError: action.payload,
      }
    case CHANGE_PASSWORD_INFO:
      return {
        ...state,
        changePassInfo: action.payload,
      }
    default:
      return state;
  }
}