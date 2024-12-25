import React from 'react'
import { Container } from 'react-bootstrap';
import TrendList from '../Components/TrendList';
import NavBar from '../Components/NavBar';

const TrendingPage = () => {
  return (
    <div className="page">
      <NavBar trendActive="active-class"></NavBar>
       <Container fluid>
       <TrendList></TrendList>
       </Container>
    </div>
  )
}
export default TrendingPage;
