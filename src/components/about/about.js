import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import AboutImages from './aboutImages';
import AboutDetails from './aboutDetails';

const Div = styled.div`
  z-index: -1;
  --width: 100%;
  --angle: 11deg;
  --magic-number: 0.09719;
  --skew-padding: calc(var(--width) * var(--magic-number));

  position: relative;
  padding: var(--skew-padding) 0;
  margin-top: -1px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transform: skewy(var(--angle));
    transform-origin: 50% 0;
    outline: 1px solid transparent;
    backface-visibility: hidden;
    background-color: var(--background-secondary);
  }

  .container-fluid {
    width: var(--width);
    margin: 0 auto;
    padding: 1em;
    position: relative;
  }
`;

export default () => (
  <Div>
    <Container key="about" id="about" fluid>
      <h1>About</h1>
      <hr className="hrTitle" />
      <div className="two-column-layout">
        <AboutDetails />
        <AboutImages />
      </div>
    </Container>
  </Div>
);
