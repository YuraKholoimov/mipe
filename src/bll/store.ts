import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {productsReducer} from "./productsSlice";

const rootReducer = combineReducers({
    products: productsReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
})

export const state = store.getState()

export type AppRootStateType = ReturnType<typeof rootReducer>

