import React,{useState,useEffect} from 'react'
import { Row } from 'react-bootstrap'
import {MovieCard} from './MovieCard'
import { useDispatch,useSelector } from 'react-redux';
import { getMovies } from '../Redux/Actions/movieAction';

const MoviesList = () => {
  const [movies,setMovies] = useState([]);
  const dispatch  = useDispatch()

  useEffect(()=>{
    dispatch(getMovies())
  },[])

  const moviesData = useSelector((state)=>state.moviesReducer.movies)

  useEffect(()=>{
    setMovies(moviesData)
  },[moviesData])
  
  return (
    <div className='my-5'>
        <Row className='justify-content-center'>
          {movies.length>=1?(movies.map((movie)=>{
            return(
              <MovieCard key={movie.id} movie={movie}></MovieCard>
            )
          })):<h2>لا يوجد افلام...</h2>}
        </Row>
    </div>
  )
}

export default MoviesList