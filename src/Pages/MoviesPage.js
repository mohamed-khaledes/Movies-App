import React from 'react'
import { Container } from 'react-bootstrap'
import MoviesList from '../Components/MoviesList'
import NavBar from '../Components/NavBar'

const MoviesPage = ({movies,getPage,search,pageCount,moviesActive}) => {
  return (
    <div className='page'>
      <NavBar search={search} moviesActive="active-class"></NavBar>
        <Container fluid>
        <MoviesList></MoviesList>
        </Container>
    </div>
  )
}
export default MoviesPage
