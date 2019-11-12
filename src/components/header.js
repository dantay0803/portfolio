import React from 'react';
import styled from 'styled-components';
import { Container, Jumbotron } from 'react-bootstrap';
import headerImage from '../images/headerImage.webp';

const StyledJumbotron = styled(Jumbotron)`
    background-image: url('${headerImage}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    padding: 0;
    margin: 0;
    text-align: center;
    color: #FFFFFF;
    text-shadow: black 10px 10px 10px;

    .container{
      background-color: rgba(0, 47, 167, 0.8);
      min-width: 100%;
      min-height: 100%;
    }

    h1{
      padding-top: 30vh;
      font-size: 7rem;
      margin: 0;
      color: var(--header-title);
    }

    h2{
      font-size: 4rem;
      margin: 0;
      color: var(--header-title);
    }
    
    hr{
      border-color: white;
      border-width: 5px;
      max-width: 55%;
      -moz-box-shadow:    0 5px 0 0 black;
      -webkit-box-shadow: 0 5px 0 0 black;
      box-shadow:         0 5px 0 0 black;
    }

    @media (max-width:641px) {
      h1{
        font-size: 5rem;
      }
  
      h2{
        font-size: 2rem;
      }
    }
`;

export default function Header() {
  return (
    <StyledJumbotron fluid>
      <Container>
        <h1>DANIEL TAYLOR</h1>
        <hr />
        <h2>Software Developer</h2>
      </Container>
    </StyledJumbotron>
  );
}
