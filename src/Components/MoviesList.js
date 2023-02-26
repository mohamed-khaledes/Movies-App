import React from 'react'
import { Row } from 'react-bootstrap'
import {MovieCard, TrendCard,NowPlayingCard} from './MovieCard'

const MoviesList = ({movies}) => {
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
const TrendList = ({trend}) => {
  return (
    <div className='my-5'>
        <Row className='justify-content-center'>
          {trend.length>=1?(trend.map((trend)=>{
            return(
              <TrendCard key={trend.id} trend={trend}></TrendCard>
            )
          })):<h2>لا يوجد افلام...</h2>}
        </Row>
    </div>
  )
}
const NowPlayingList = ({nowPlaying}) => {
  return (
    <div className='my-5'>
        <Row className='justify-content-center'>
          {nowPlaying.length>=1?(nowPlaying.map((nowPlaying)=>{
            return(
              <NowPlayingCard key={nowPlaying.id} nowPlaying={nowPlaying}></NowPlayingCard>
            )
          })):<h2>لا يوجد افلام...</h2>}
        </Row>
    </div>
  )
}
export  {MoviesList,TrendList,NowPlayingList}