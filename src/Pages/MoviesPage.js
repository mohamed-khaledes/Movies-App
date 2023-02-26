import React from 'react'
import { Container } from 'react-bootstrap'
import { MoviesList } from '../Components/MoviesList'
import NavBar from '../Components/NavBar'
import {PagenationComponent} from '../Components/PagenationComponent'

const MoviesPage = ({movies,getPage,search,pageCount,moviesActive}) => {
  return (
    <div className='page'>
      <NavBar search={search} moviesActive="active-class"></NavBar>
        <Container fluid>
        <MoviesList movies={movies}></MoviesList>
        <PagenationComponent getPage={getPage} pageCount={pageCount}></PagenationComponent>
        </Container>
    </div>
  )
}
export default MoviesPage
