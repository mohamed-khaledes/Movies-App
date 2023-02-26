import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link ,useParams} from 'react-router-dom';
import { useState ,useEffect} from 'react';
import axios from "axios";
const MovieDetails = () => {
    const [movie,setMovie] = useState([])
    const [trailer,setTrailer] = useState()
    const param = useParams();
    const newParam=param.id.slice(1,param.id.length);
    // get all details of movie 
  const getAllDetails = async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${newParam}?api_key=216d86a877a94fc074ae88c2c289a858&language=ar`)
    setMovie(res.data)
    console.log(res.data)
  }
  // get video for watch a movie
  const getVideoOfMovie = async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${newParam}/videos?api_key=216d86a877a94fc074ae88c2c289a858&language=en-US`)
    setTrailer(res.data.results[0].key)
  }
  // use useEffect to display the data once we open the movie we want
  useEffect(()=>{
    getAllDetails()
    getVideoOfMovie();
  },[])
  return (
    <div>
        <Container className=' justify-content-center movie-details'>
        <Row>
            <Col className='section img-section' sm="12" md="4">
                    <img src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} className="details-img" alt='movie-poster'></img>
            </Col>
            <Col className='section details-section' sm="12" md="8">
            <div className='details-content'>
                <h4>اسم الفيلم:{movie.original_title}</h4>
                <p>تاريخ الاصدار:{movie.release_date} </p>
                <p>اللغه: {movie.original_language}</p>
                <p >التقييم: <FaStar style={{color:'goldenrod',margin:"-4px 5px 0"}}></FaStar>{movie.vote_average}</p>
            </div>
            </Col>
            <Col className='section story-section' sm="12">
                <h2>القصه</h2>
                <p>{movie.overview}</p>
            </Col>
        </Row>
        <Row>
        <Col className='btn-section' xs="12" sm="4">
                <Link to='/'>
                <button className='details-btn'>عوده للرئيسيه</button>
                </Link>
            </Col>
        <Col className='btn-section' xs="12" sm="4">
        <Link to="/movieWatch">
                <button className='details-btn2'>مشاهدة الفيلم</button>
                </Link>
                
            </Col>
        <Col className='btn-section' xs="12" sm="4">
        <a href={`https://www.youtube.com/watch?v=${trailer}`} target='_blank'>
                <button className='details-btn2'>الاعلان</button>
                </a>
            </Col>
        </Row>
        </Container>
    </div>
  )
}
export default MovieDetails;