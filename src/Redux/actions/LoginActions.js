import {LOGIN_FORM_FIELDS} from "./ActionTypes";
import {useDispatch} from "react-redux";
import {setError, setIsFetching} from "./AuthAction";


export function setLoginFormFields({username, password}) {
  return {
    type: LOGIN_FORM_FIELDS,
    payload: {
      username,
      password
    }
  }
}

// export function login (username, password) => {
//   return async () => {
//     const dispatch = useDispatch()
//     try {
//       dispatch(setIsFetching(true));
//     } catch (e) {
//       dispatch(setError('Произошла ошибка при логине'))
//     }
//   }
// }
