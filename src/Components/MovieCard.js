import React from 'react'
import { Col,Card } from 'react-bootstrap'
import {FaStar} from "react-icons/fa"
import { Link } from 'react-router-dom'
const MovieCard = ({movie}) => {
  return (
    <Col xs="12" sm="6" md="4" lg="3" xl="2" className='my-3 d-flex justify-content-center'>
          <Link to={`/movieDetails/:${movie.id}`}>
        <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} className="card-img" />
      <div className='card-overlay'>
        <h4>اسم الفيلم:{movie.original_title}</h4>
        <p>تاريخ الاصدار: {movie.release_date}</p>
        <p>اللغه: {movie.original_language}</p>
        <p >التقييم: <FaStar style={{color:'goldenrod',margin:"-4px 5px 0"}}></FaStar>{movie.vote_average}</p>
      </div>
    </Card>
        </Link>
        </Col>
  )
}
const TrendCard = ({trend}) => {
  return (
        <Col xs="12" sm="6" md="4" lg="3" xl="2" className='my-3 d-flex justify-content-center'>
          <Link to={`/movieDetails/:${trend.id}`}>
        <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500`+trend.poster_path} className="card-img" />
      <div className='card-overlay'>
        <h4>اسم الفيلم:{trend.original_title}</h4>
        <p>تاريخ الاصدار: {trend.release_date}</p>
        <p>اللغه: {trend.original_language}</p>
        <p >التقييم: <FaStar style={{color:'goldenrod',margin:"-4px 5px 0"}}></FaStar>{trend.vote_average}</p>
      </div>
    </Card>
    </Link>
        </Col>
    
  )
}
const NowPlayingCard = ({nowPlaying}) => {
  return (
        <Col xs="12" sm="6" md="4" lg="3" xl="2" className='my-3 d-flex justify-content-center'>
          <Link to={`/movieDetails/:${nowPlaying.id}`}>
        <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500`+nowPlaying.poster_path} className="card-img" />
      <div className='card-overlay'>
        <h4>اسم الفيلم:{nowPlaying.original_title}</h4>
        <p>تاريخ الاصدار: {nowPlaying.release_date}</p>
        <p>اللغه: {nowPlaying.original_language}</p>
        <p >التقييم: <FaStar style={{color:'goldenrod',margin:"-4px 5px 0"}}></FaStar>{nowPlaying.vote_average}</p>
      </div>
    </Card>
    </Link>
        </Col>
    
  )
}
export {MovieCard,TrendCard,NowPlayingCard}
