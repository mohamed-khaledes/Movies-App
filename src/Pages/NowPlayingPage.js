import React from 'react'
import { Container } from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import NowPlayingList from '../Components/NowPlayingList';
import {PagenationComponent} from '../Components/PagenationComponent';

const NowPlayingPage = ({nowPlaying,search,getPageMoviesPlayingNow,pageCount,nowActive}) => {
  return (
    <div>
        <NavBar  nowActive="active-class"></NavBar>
        <Container fluid>
        <NowPlayingList ></NowPlayingList>
        <PagenationComponent></PagenationComponent>
        </Container>
    </div>
  )
}
export default NowPlayingPage;