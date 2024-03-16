import React,{useEffect} from 'react'
import { Row } from 'react-bootstrap'
import {MovieCard} from './MovieCard'
import { useDispatch,useSelector } from 'react-redux';
import { getMovies } from '../Redux/Redux-toolkit/Slices/moviesSlice';
const MoviesList = () => {
  const dispatch  = useDispatch()
  useEffect(()=>{
    dispatch(getMovies())
  },[dispatch])

  const {movies,loading} = useSelector(state => state.moviesReducer)
  
  return (
    <div className='my-5'>
        <Row className='justify-content-center'>
          {
            loading===false?
            movies?.results?.length>=1?(movies?.results.map((movie)=>{
              return(
                <MovieCard key={movie.id} movie={movie}></MovieCard>
              )
            })):<h2>لا يوجد افلام...</h2>
            :
            <h2>...loading</h2>
          }
        </Row>
    </div>
  )
}

export default MoviesList