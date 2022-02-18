import {persistReducer} from "redux-persist";
import {combineReducers} from "redux";
import authReducer from "./reducers/AuthReducer";
import fieldsReducer from "./reducers/FieldsReducer";
import signupReducer from "./reducers/SignupReducer";
import storage from 'redux-persist/lib/storage';
import modalReducer from "./reducers/ModalReducer";
import changePasswordReducer from "./reducers/ChangePasswordReducer";


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['authReducer', 'fieldsReducer']
};
const authPersistConfig = {
  key: 'authReducer',
  storage: storage,
  whitelist: ['accessToken']
}
const fieldsPersistConfig = {
  key: 'fieldsReducer',
  storage: storage,
  whitelist: ['email']
}


const reducers = combineReducers({
  authReducer: persistReducer(authPersistConfig, authReducer),
  fieldsReducer: persistReducer(fieldsPersistConfig, fieldsReducer),
  signupReducer,
  modalReducer,
  changePasswordReducer
})


export const persistedReducer = persistReducer(persistConfig, reducers);