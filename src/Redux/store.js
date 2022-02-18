import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'
import axiosMiddleware from "./Middlewares/axios";
import fieldsReducer from "./reducers/FieldsReducer";
import authReducer from "./reducers/AuthReducer";
import signupReducer from "./reducers/SignupReducer";
import {persistReducer, persistStore} from "redux-persist";


import {persistedReducer} from "./persistReducer";


const enhancer = compose(applyMiddleware(axiosMiddleware));

export const store = createStore(persistedReducer, composeWithDevTools(enhancer))
export const persistor = persistStore(store)