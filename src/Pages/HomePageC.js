import React from 'react'
import { Container } from 'react-bootstrap';
import Landing from '../Components/Landing';
import MoviesList from '../Components/MoviesList';
import NavBar from '../Components/NavBar';
import {PagenationComponent} from '../Components/PagenationComponent';

const HomePage = ({getPage,pageCount,search,homeActive}) => {
  return (
    <div>
      <NavBar homeActive="active-class"></NavBar>
      <Landing></Landing>
      <Container fluid>
      <MoviesList></MoviesList>
      <PagenationComponent></PagenationComponent>
      </Container>
    </div>
  )
}
export default HomePage;