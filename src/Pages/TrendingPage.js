import React from 'react'
import { Container } from 'react-bootstrap';
import { TrendList } from '../Components/MoviesList';
import NavBar from '../Components/NavBar';
import {PagenationComponentForTrending} from '../Components/PagenationComponent';

const TrendingPage = ({trend,getPageTrending,pageCount,search,trendActive}) => {
  return (
    <div className="page">
      <NavBar search={search} trendActive="active-class"></NavBar>
       <Container fluid>
       <TrendList trend={trend}></TrendList>
       <PagenationComponentForTrending getPageTrending={getPageTrending} pageCount={pageCount}></PagenationComponentForTrending>
       </Container>
    </div>
  )
}
export default TrendingPage;
