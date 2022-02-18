import {persistReducer} from "redux-persist";
import {combineReducers} from "redux";
import authReducer from "./reducers/AuthReducer";
import loginFieldsReducer from "./reducers/LoginFieldsReducer";
import signupFieldsReducer from "./reducers/SignupFieldsReducer";
import signupReducer from "./reducers/SignupReducer";
import storage from 'redux-persist/lib/storage';
import modalReducer from "./reducers/ModalReducer";
import changePasswordReducer from "./reducers/ChangePasswordReducer";


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['authReducer', 'loginFieldsReducer', 'signupFieldsReducer']
};
const authPersistConfig = {
  key: 'authReducer',
  storage: storage,
  whitelist: ['accessToken']
}
const loginFieldsPersistConfig = {
  key: 'loginFieldsReducer',
  storage: storage,
  whitelist: ['email']
}
const signupFieldsPersistConfig = {
  key: 'signupFieldsReducer',
  storage: storage,
  whitelist: []
}

const reducers = combineReducers({
  authReducer: persistReducer(authPersistConfig, authReducer),
  loginFieldsReducer: persistReducer(loginFieldsPersistConfig, loginFieldsReducer),
  signupFieldsReducer: persistReducer(signupFieldsPersistConfig, signupFieldsReducer),
  signupReducer,
  modalReducer,
  changePasswordReducer,
})


export const persistedReducer = persistReducer(persistConfig, reducers);