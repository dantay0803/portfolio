import React from 'react';
import { Container } from 'react-bootstrap';
import AboutImages from './aboutImages';
import AboutDetails from './aboutDetails';

export default () => (
  <Container key="about" id="about" fluid>
    <h1>About</h1>
    <hr className="hrTitle" />
    <div className="two-column-layout">
      <AboutDetails />
      <AboutImages />
    </div>
  </Container>
);
