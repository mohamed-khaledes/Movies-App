import React from 'react'
import { Container } from 'react-bootstrap';
import Landing from '../Components/Landing';
import MoviesList from '../Components/MoviesList';
import NavBar from '../Components/NavBar';

const HomePage = () => {

  return (
    <div>
      <NavBar homeActive="active-class"></NavBar>
      <Landing></Landing>
      <Container fluid>
      <MoviesList></MoviesList>
      </Container>
    </div>
  )
}
export default HomePage;