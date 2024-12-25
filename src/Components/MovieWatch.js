import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MovieWatch = () => {
  return (
    <div>
        <Container>
        <Row className='m-5'>
            <Col sm="12">
                <h2>غيو متوفر الان</h2>
            <Link to='/'>
                <button className='details-btn'>عوده للرئيسيه</button>
                </Link>
            </Col>
        </Row>
        </Container>
    </div>
  )
}
export default MovieWatch;
