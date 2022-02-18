import {applyMiddleware, compose, createStore} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'
import axiosMiddleware from "./Middlewares/axios";
import {persistStore} from "redux-persist";


import {persistedReducer} from "./persistReducer";


const enhancer = compose(applyMiddleware(axiosMiddleware));

export const store = createStore(persistedReducer, composeWithDevTools(enhancer))
export const persistor = persistStore(store)