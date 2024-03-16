import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// 2-create movies slice
const initialState = {
    loading:false,
    error:null,
    movies: [],
};
// we use _ if we don't need this argument
export const getTrendMovies = createAsyncThunk("trend/getMovies",async(_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const res = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=216d86a877a94fc074ae88c2c289a858&language=ar-EG&page=1")
        return res
    }catch(error){
        return rejectWithValue(error)
    }
})
export const getTrendPage = createAsyncThunk("trend/getPage",async(page,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=216d86a877a94fc074ae88c2c289a858&language=ar-EG&page=${page}`)
        return res
    }catch(error){
        return rejectWithValue(error)
    }
})
export const trendSearch = createAsyncThunk("trend/trendSearch",async(searchWord,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=216d86a877a94fc074ae88c2c289a858&query=${searchWord}&language=en-US&page=1&include_adult=false`)
        return res
    }catch(error){
        return rejectWithValue(error)
    }
})
const trendSlice = createSlice({
    name:"trend",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getTrendMovies.pending,(state,action) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getTrendMovies.fulfilled,(state,action) =>{
            state.movies = action?.payload?.data
            state.loading = false;
            state.error = null;
        })
        .addCase(getTrendMovies.rejected,(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(trendSearch.pending,(state,action) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(trendSearch.fulfilled,(state,action) =>{
            state.movies = action?.payload?.data
            state.loading = false;
            state.error = null;
        })
        .addCase(trendSearch.rejected,(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getTrendPage.pending,(state,action) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getTrendPage.fulfilled,(state,action) =>{
            state.movies = action?.payload?.data
            state.loading = false;
            state.error = null;
        })
        .addCase(getTrendPage.rejected,(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        })
    }
    
})

export const trendReducer =  trendSlice.reducer
export const moviesActions =  trendSlice.actions 