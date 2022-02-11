import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'
import authReducer from "./AuthReducer";
import axiosMiddleware from "../Middlewares/axios";
import {loginReducer} from "./LoginReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  authReducer,
  loginReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, axiosMiddleware)))