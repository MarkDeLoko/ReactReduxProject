import {persistReducer} from "redux-persist";
import {combineReducers} from "redux";
import authReducer from "./reducers/AuthReducer";
import fieldsReducer from "./reducers/FieldsReducer";
import signupReducer from "./reducers/SignupReducer";
import storage from 'redux-persist/lib/storage';
import modalReducer from "./reducers/ModalReducer";
import changePasswordReducer from "./reducers/ChangePasswordReducer";
// import autoMergeLevel4 from "redux-persist/es/stateReconciler/autoMergeLevel2";


const persistConfig = {
  key: 'root',
  storage,
  // stateReconciler: autoMergeLevel4
  blacklist: ['authReducer']
};
const authPersistConfig = {
  key: 'authReducer',
  storage: storage,
  whitelist: ['accessToken']
}


const reducers = combineReducers({
  authReducer: persistReducer(authPersistConfig, authReducer),
  fieldsReducer,
  signupReducer,
  modalReducer,
  changePasswordReducer
})


export const persistedReducer = persistReducer(persistConfig, reducers);