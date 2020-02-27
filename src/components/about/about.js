import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import AboutImages from './aboutImages';
import AboutDetails from './aboutDetails';

const Div = styled.div`
  z-index: 1;
  margin-bottom: 1rem;

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    margin-bottom: 25rem;
  }
`;

export default () => (
  <Div>
    <Container key="about" id="about" fluid style={{ zIndex: 1 }}>
      <h1>About</h1>
      <hr className="hrTitle" />
      <div className="two-column-layout">
        <AboutDetails />
        <AboutImages />
      </div>
    </Container>
  </Div>
);
