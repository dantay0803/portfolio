import React from 'react';
import styled from 'styled-components';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import headerImage from '../assets/images/headerImage.jpg';

const StyledJumbotron = styled(Jumbotron)`
  background-image: url('${headerImage}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding: 0;
  margin: 3.5em 0 0 0;
  overflow: hidden;

  .container-fluid{
    padding: 0;
    margin: 0;
  }

  div{
    height: 100vh;
    width: 100vw;
  }

  .black{
    background-color: var(--background-primary);
    -webkit-clip-path: polygon(100% 0, 0 0, 0 100%);
    clip-path: polygon(100% 0, 0 0, 0 100%);
  }

  .red{
    background-color: rgba(255, 0, 0, 0.75);
    -webkit-clip-path: polygon(100% 0, 0 100%, 100% 100%);
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
    position: absolute;
    right: 0;
  }

  h1 {
    font-size: 1.6rem;
    font-weight: bold;
    text-transform: none;
    font-family: 'Montserrat', sans-serif;
    line-height: 3rem;
    margin: 0;
    padding: 1.75rem 0 0 1rem;
    width: 18rem;
    margin-bottom: 0.75em;
  }

  .actionLink {
    width: 9em;
    padding: 0.65em;
    margin: 0 0 1em 1em;
    font-weight: bold;
    font-size: 0.9rem;
    display: block;
    text-align: center;
  }

  .actionLink:hover {
    cursor: pointer;
  }

  .cta {
    background-color: var(--highlight);
    border: 1px solid var(--highlight);
    color: var(--text-secondary);
  }

  .contact {
    background-color: transparent;
    border: 1px solid var(--text-muted);
    color: var(--text-primary);
  }

  .contact:hover{
    background-color: var(--text-muted);
  }

  @media (min-width: 576px) {
    h1{
      font-size: 2.25rem;
      padding: 5rem 0 0 1rem;
      width: 30rem;
    }

    .actionLink {
      display: inline;
    }
  }

  @media (min-width: 768px) {
    h1{
      font-size: 3rem;
      line-height: 4.75rem;
      width: 40rem;
    }

    .actionLink {
      width: 9em;
      height: 2.5em;
      padding: 0.75em;
      margin: 0 0 0 1em;
      font-weight: bold;
      font-size: 1.2rem;
      display: inline;
    }
  }

  @media (min-width: 992px) {
    h1{
      font-size: 3.875rem;
      width: 51rem;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 3.75rem;
      line-height: 4.75rem;
      width: 54rem;
      padding-top: 7.5rem;
    }
  }

  @media (min-width: 1400px) {
    h1 {
      font-size: 3.875rem;
      width: 70rem;
      padding-top: 10rem;
    }
  }
`;

export default function Header() {
  return (
    <StyledJumbotron fluid>
      <Container fluid>
        <Row noGutters>
          <Col xs={6}>
            <div className="black">
              <h1>
                I build high-quality web & mobile products that bring your users
                & products closer.
              </h1>
              <Link
                className="actionLink cta"
                to="projects"
                spy
                smooth
                offset={-30}
                duration={500}
              >
                View My Work
              </Link>
              <Link
                className="actionLink contact"
                to="contact"
                spy
                smooth
                offset={-30}
                duration={500}
              >
                Contact Me
              </Link>
            </div>
          </Col>
          <Col xs={6}>
            <div className="red" />
          </Col>
        </Row>
      </Container>
    </StyledJumbotron>
  );
}
