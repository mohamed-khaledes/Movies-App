import React,{useEffect} from 'react'
import { Row } from 'react-bootstrap'
import {MovieCard} from './MovieCard'
import { useDispatch,useSelector } from 'react-redux';
import { getMovies, getPage } from '../Redux/Redux-toolkit/Slices/moviesSlice';
import CustomPagination from './CustomPagination';
const MoviesList = () => {
  const dispatch  = useDispatch()
  
  useEffect(()=>{
    dispatch(getMovies())
  },[dispatch])

  const {movies,loading} = useSelector(state => state.moviesReducer)
   // handel page click
   const handleClick = async(data)=>{
    await dispatch(getPage(data.selected + 1))
  }
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
        <Row>
          <CustomPagination handleClick={handleClick} data={movies}/>
        </Row>
    </div>
  )
}

export default MoviesList