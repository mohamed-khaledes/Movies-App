import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// 2-create movies slice
const initialState = {
    movies: [],
    loading:false,
    error:null,
};
// we use _ if we don't need this argument
export const getNowPlaying = createAsyncThunk("nowPlaying/getNowPlaying",async(_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const res = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=216d86a877a94fc074ae88c2c289a858&language=en-US&page=1")
        return res
    }catch(error){
        return rejectWithValue(error)
    }
})
export const getNowPlayingPage = createAsyncThunk("nowPlaying/getNowPlayingPage",async(page,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=216d86a877a94fc074ae88c2c289a858&language=ar-EG&page=${page}`)
        return res
    }catch(error){
        return rejectWithValue(error)
    }
})
export const nowPlayingSearch = createAsyncThunk("nowPlaying/nowPlayingSearch",async(searchWord,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=216d86a877a94fc074ae88c2c289a858&query=${searchWord}&language=en-US&page=1&include_adult=false`)
        return res
    }catch(error){
        return rejectWithValue(error)
    }
})
const nowPlayingSlice = createSlice({
    name:"nowPlaying",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getNowPlaying.pending,(state,action) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getNowPlaying.fulfilled,(state,action) =>{
            state.movies = action?.payload?.data
            state.loading = false;
            state.error = null;
        })
        .addCase(getNowPlaying.rejected,(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(nowPlayingSearch.pending,(state,action) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(nowPlayingSearch.fulfilled,(state,action) =>{
            state.movies = action?.payload?.data
            state.loading = false;
            state.error = null;
        })
        .addCase(nowPlayingSearch.rejected,(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getNowPlayingPage.pending,(state,action) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getNowPlayingPage.fulfilled,(state,action) =>{
            state.movies = action?.payload?.data
            state.loading = false;
            state.error = null;
        })
        .addCase(getNowPlayingPage.rejected,(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        })
    }
    
})

export const nowPlayingReducer =  nowPlayingSlice.reducer
export const nowPlayingActions =  nowPlayingSlice.actions 