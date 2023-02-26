import React from 'react'
import { Container } from 'react-bootstrap';
import Landing from '../Components/Landing';
import {MoviesList} from '../Components/MoviesList';
import NavBar from '../Components/NavBar';
import {PagenationComponent} from '../Components/PagenationComponent';

const HomePage = ({movies,getPage,pageCount,search,homeActive}) => {
  return (
    <div>
      <NavBar search={search} homeActive="active-class"></NavBar>
      <Landing></Landing>
      <Container fluid>
      <MoviesList movies={movies}></MoviesList>
      <PagenationComponent getPage={getPage} pageCount={pageCount}></PagenationComponent>
      </Container>
    </div>
  )
}
export default HomePage;