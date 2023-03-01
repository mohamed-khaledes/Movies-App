import { ALLMOVIES,moviesApiUrl,ALLTRENDING,PLAYINGNOW } from "../Type/actionsTypes"
import axios from 'axios'

// action dispatch for conect app with reducer
export const getMovies =()=>{
    return async(dispatch)=>{
        const res = await axios.get(moviesApiUrl)
            dispatch({type:ALLMOVIES, data:res.data.results, pages:res.data.total_pages})
            // console.log(res.data.total_pages)
    }
}


// action for displaying trending movies in trend page
export const getTrendingMovies =()=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=216d86a877a94fc074ae88c2c289a858&language=ar-EG&page=1`)
            dispatch({type:ALLTRENDING,data:res.data.results,pages:res.data.total_pages})
    }
}

// action for displaying trending movies in trend page
export const getPlayingNow =()=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=216d86a877a94fc074ae88c2c289a858&language=en-US&page=1`)
            dispatch({type:PLAYINGNOW,data:res.data.results,pages:res.data.total_pages})
    }
}

// action for search 
export const moviesSearch =(searchWord)=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=216d86a877a94fc074ae88c2c289a858&query=${searchWord}&language=en-US&page=1&include_adult=false`)
            dispatch({type:ALLMOVIES,data:res.data.results,pages:res.data.total_pages})
    }
}
export const moviesSearchTrend =(searchWord)=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=216d86a877a94fc074ae88c2c289a858&query=${searchWord}&language=en-US&page=1&include_adult=false`)
            dispatch({type:ALLTRENDING,data:res.data.results,pages:res.data.total_pages})
    }
}
export const moviesSearchNow =(searchWord)=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=216d86a877a94fc074ae88c2c289a858&query=${searchWord}&language=en-US&page=1&include_adult=false`)
            dispatch({type:PLAYINGNOW,data:res.data.results,pages:res.data.total_pages})
    }
}

// action for search 
export const getPage =(page)=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=216d86a877a94fc074ae88c2c289a858&language=ar-EG&page=${page}`)
            dispatch({type:ALLMOVIES,data:res.data.results,pages:res.data.total_pages})
            
    }
}

// get the other page of trending movies
export const getPageTrending =(page)=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=216d86a877a94fc074ae88c2c289a858&language=ar-EG&page=${page}`)
            dispatch({type:ALLTRENDING,data:res.data.results,pages:res.data.total_pages})
            
    }
}

// get all movies playing now
export const getPagePlayingNow =(page)=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=216d86a877a94fc074ae88c2c289a858&language=ar-EG&page=${page}`)
            dispatch({type:PLAYINGNOW,data:res.data.results,pages:res.data.total_pages})
            
    }
}


