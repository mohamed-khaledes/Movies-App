import React from 'react'
import { Container } from 'react-bootstrap';
// import { TrendList } from '../Components/MoviesList';
import TrendList from '../Components/TrendList';
import NavBar from '../Components/NavBar';
import {PagenationComponentForTrending} from '../Components/PagenationComponent';

const TrendingPage = ({trend,getPageTrending,pageCount,trendActive}) => {
  return (
    <div className="page">
      <NavBar trendActive="active-class"></NavBar>
       <Container fluid>
       <TrendList></TrendList>
       <PagenationComponentForTrending></PagenationComponentForTrending>
       </Container>
    </div>
  )
}
export default TrendingPage;
