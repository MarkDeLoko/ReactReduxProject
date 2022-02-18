import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_INFO,
  CHANGE_PASSWORD_SUCCESS
} from "../actions/ActionTypes";

const defaultState = {
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