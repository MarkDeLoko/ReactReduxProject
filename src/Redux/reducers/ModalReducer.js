import {SHOW_MODAL} from "../actions/ActionTypes";

const defaultState = {
  active: false,

}

export default function modalReducer (state = defaultState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        active: action.payload
      }
    default:
      return state;
  }
}