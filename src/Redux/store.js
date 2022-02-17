import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'
import axiosMiddleware from "./Middlewares/axios";
import fieldsReducer from "./reducers/FieldsReducer";
import authReducer from "./reducers/AuthReducer";
import signupReducer from "./reducers/SignupReducer";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import autoMergeLevel4 from "redux-persist/es/stateReconciler/autoMergeLevel2";
// import thunk from "redux-thunk";


const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel4
};

const enhancer = compose(applyMiddleware(axiosMiddleware));

const reducers = combineReducers({
  authReducer,
  fieldsReducer,
  signupReducer
})
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, composeWithDevTools(enhancer))
export const persistor = persistStore(store)