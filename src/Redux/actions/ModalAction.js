import {SHOW_MODAL} from "./ActionTypes";


export function setModalActive(active) {
  return {
    type: SHOW_MODAL,
    payload: active
  }
}


