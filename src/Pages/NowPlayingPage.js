import React from 'react'
import { Container } from 'react-bootstrap';
import {NowPlayingList } from '../Components/MoviesList';
import NavBar from '../Components/NavBar';
import {PagenationComponent} from '../Components/PagenationComponent';

const NowPlayingPage = ({nowPlaying,search,getPageMoviesPlayingNow,pageCount,nowActive}) => {
  return (
    <div>
        <NavBar search={search} nowActive="active-class"></NavBar>
        <Container fluid>
        <NowPlayingList nowPlaying={nowPlaying}></NowPlayingList>
        <PagenationComponent getPageMoviesPlayingNow={getPageMoviesPlayingNow} pageCount={pageCount}></PagenationComponent>
        </Container>
    </div>
  )
}
export default NowPlayingPage;