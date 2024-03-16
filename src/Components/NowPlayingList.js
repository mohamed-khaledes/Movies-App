import React,{useEffect} from 'react'
import { Row } from 'react-bootstrap'
import {NowPlayingCard} from './MovieCard'
import { useDispatch,useSelector } from 'react-redux';
import { getNowPlaying } from '../Redux/Redux-toolkit/Slices/nowPlayingSlice';

const NowPlayingList = () => {
    const dispatch  = useDispatch()
    useEffect(()=>{
      dispatch(getNowPlaying())
    },[dispatch])
  
    const {movies,loading} = useSelector((state)=>state.nowPlayingReducer)
  
    return (
      <div className='now-playing-list'>
          <Row className='justify-content-center'>
            {
              loading===false?
              movies?.results?.length>=1?(movies?.results?.map((nowPlaying)=>{
                return(
                  <NowPlayingCard key={nowPlaying.id} nowPlaying={nowPlaying}></NowPlayingCard>
                )
              })):<h2>لا يوجد افلام...</h2>
              :<h2>...loading</h2>
            }
            
          </Row>
      </div>
    )
  }

export default NowPlayingList