import React from 'react';
import styled from 'styled-components';
import { Container, Jumbotron } from 'react-bootstrap';
import headerImage from '../../assets/images/headerImage.jpg';

const StyledJumbotron = styled(Jumbotron)`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 82%);
  background-image: url('${headerImage}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
  padding: 0;
  text-align: center;

  .container {
    background-color: rgba(20, 20, 20, 0.75);
    min-width: 100%;
    height: 60vh;
    padding: 15em 0 0 0;
    top: 0;
    position: absolute;
  }

  h1{
    padding: 0;
    margin: 0;
  }
`;

const blogHeader = () => (
  <StyledJumbotron fluid>
    <Container>
      <h1>DANIEL TAYLOR | BLOG</h1>
    </Container>
  </StyledJumbotron>
);

export default blogHeader;
