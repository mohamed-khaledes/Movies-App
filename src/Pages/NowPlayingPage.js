import React from 'react'
import { Container } from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import NowPlayingList from '../Components/NowPlayingList';

const NowPlayingPage = () => {
  return (
    <div>
        <NavBar  nowActive="active-class"></NavBar>
        <Container fluid>
        <NowPlayingList ></NowPlayingList>
        </Container>
    </div>
  )
}
export default NowPlayingPage;