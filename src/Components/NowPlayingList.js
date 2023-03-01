import React,{useState,useEffect} from 'react'
import { Row } from 'react-bootstrap'
import {NowPlayingCard} from './MovieCard'
import { useDispatch,useSelector } from 'react-redux';
import {getPlayingNow } from '../Redux/Actions/movieAction';


const NowPlayingList = () => {
    const [nowPlaying,setNowPlaying] = useState([])
    const dispatch  = useDispatch()
  
    useEffect(()=>{
      dispatch(getPlayingNow())
    },[])
  
    const playingNowData = useSelector((state)=>state.nowPlayingReducer.moviesPlayingNow)
  
    useEffect(()=>{
      setNowPlaying(playingNowData)
    },[playingNowData])
    
    return (
      <div className='now-playing-list'>
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

export default NowPlayingList