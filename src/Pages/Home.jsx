import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';


const Home = () => {

  return (
    <Container>
      <Row>
        <Col md={5} className='detail'>
          <div>
            <h3 className='track-head'>
              EXPENSE TRACKER
            </h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
