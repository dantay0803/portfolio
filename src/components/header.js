import React from 'react';
import styled from 'styled-components';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import headerImage from '../assets/images/headerImage.jpg';

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
`;

export default function Header() {
  return (
    <StyledJumbotron fluid>
      <Container fluid>
        <Row noGutters>
          <Col xs={6}>
            <div className="black">
              <h1 className="headerTitle">
                I build high-quality web & mobile applications
              </h1>
              <h2 className="headerSubtitle">Software Developer</h2>
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
