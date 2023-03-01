import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { nowPlayingReducer } from "./nowPlayingReducer";
import { trendReducer } from "./trendReducer";

export const rootReducers = combineReducers({
    moviesReducer:moviesReducer,
    trendReducer:trendReducer,
    nowPlayingReducer:nowPlayingReducer,
})