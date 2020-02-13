import React from 'react';
import styled from 'styled-components';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import headerImage from '../images/headerImage.webp';

const StyledJumbotron = styled(Jumbotron)`
  background-image: url('${headerImage}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding: 0;
  margin: 0;
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

  h1{
    font-size: 3.875rem;
    line-height: 3.8125rem;
    font-weight: bold;
    text-transform: none;
    font-family: "Montserrat", sans-serif;
    line-height: 4.75rem;
    margin: 0;
    padding: 17.1875rem 0 0 3.125rem;
    width: 53.75rem;
  }

  h2{
    font-size: 3.125rem;
    color: var(--text-muted);
    margin: 0;
    padding: 1.25rem 0 0 3.125rem;
  }
`;

export default function Header() {
  return (
    <StyledJumbotron fluid>
      <Container fluid>
        <Row noGutters>
          <Col xs={6}>
            <div className="black">
              <h1>I build high-quality web & mobile applications</h1>
              <h2>Software Developer</h2>
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
