import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import AboutImages from './aboutImages';
import AboutDetails from './aboutDetails';

const Styles = styled.div`
  .about-content-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    margin: 4.375rem 2.5rem;
    grid-gap: 10em;
    padding: 0;
  }

  .about-content-container p {
    max-width: 560px;
  }

  .about-content-container {
    align-self: start;
    justify-self: end;
  }
`;

export default () => (
  <Styles>
    <Container key="about" id="about" fluid>
      <h1>About</h1>
      <hr className="hrTitle" />
      <div className="about-content-container">
        <AboutDetails />
        <AboutImages />
      </div>
    </Container>
  </Styles>
);
