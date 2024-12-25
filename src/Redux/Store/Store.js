import {applyMiddleware} from "redux";
import {configureStore} from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {moviesReducer} from '../Redux-toolkit/Slices/moviesSlice'
import { nowPlayingReducer } from "../Redux-toolkit/Slices/nowPlayingSlice"; 
import { trendReducer } from "../Redux-toolkit/Slices/trendSlice";
// 1-create store
export const Store = configureStore(
    {reducer:{moviesReducer,nowPlayingReducer,trendReducer}}
    ,applyMiddleware(thunk))
