import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// 2-create movies slice
const initialState = {
    loading:false,
    error:null,
    movies: [],
};
// we use _ if we don't need this argument
export const getMovies = createAsyncThunk("movies/getMovies",async(_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=216d86a877a94fc074ae88c2c289a858&language=ar-EG&page=1")
        return res
    }
    catch(error){
        return rejectWithValue(error)
    }
})
export const getPage = createAsyncThunk("movies/getPage",async(page,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=216d86a877a94fc074ae88c2c289a858&language=ar-EG&page=${page}`)
        return res
    }catch(error){
        return rejectWithValue(error)
    }
})
export const moviesSearch = createAsyncThunk("movies/moviesSearch",async(searchWord,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=216d86a877a94fc074ae88c2c289a858&query=${searchWord}&language=en-US&page=1&include_adult=false`)
        return res
    }catch(error){
        return rejectWithValue(error)
    }
})
const moviesSlice = createSlice({
    name:"movies",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getMovies.pending,(state,action) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getMovies.fulfilled,(state,action) =>{
            state.movies = action?.payload?.data
            state.loading = false;
            state.error = null;
        })
        .addCase(getMovies.rejected,(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(moviesSearch.pending,(state,action) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(moviesSearch.fulfilled,(state,action) =>{
            state.movies = action?.payload?.data
            state.loading = false;
            state.error = null;
        })
        .addCase(moviesSearch.rejected,(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getPage.pending,(state,action) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getPage.fulfilled,(state,action) =>{
            state.movies = action?.payload?.data
            state.loading = false;
            state.error = null;
        })
        .addCase(getPage.rejected,(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const moviesReducer =  moviesSlice.reducer
export const moviesActions =  moviesSlice.actions 