import React from "react"
import styled from "styled-components"
import { Row, Col, Image } from "react-bootstrap"
import profileImage from "../images/profileImage.jpg"

const Styles = styled.div`
  padding: 0;
  margin: 0;

  img {
    max-width: 55%;
    margin-top: 1rem;
    margin-left: 5rem;
    -moz-box-shadow: 5px 10px 10px black;
    -webkit-box-shadow: 5px 10px 10px black;
    box-shadow: 5px 10px 10px black;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
`

export default function about() {
  return (
    <Styles>
      <Row
        key="about"
        id="about"
        className="justify-content-md-center"
        noGutters
      >
        <Row className="justify-content-md-center" noGutters>
          <Col xs={12}>
            <h1>About Me</h1>
            <hr className="hrTitle" />
          </Col>
        </Row>
        <Row className="justify-content-md-center" noGutters>
          <Col xs={12} md={{ span: 4, offset: 2 }}>
            <p>
              Since graduating from the University of the West of Scotland two
              years ago where I obtained a BSc with First Class Honours in
              Computer Games Development, I have been working as a Unity
              developer. My current role has seen me work on a number of
              existing and new mobile applications, where I have been
              responsible for both the design and development of these
              applications.
            </p>
            <p>
              In my spare time I enjoy creating my own games and applications,
              which has seen me release a small number of games on the Google
              Play store and Amazon App Store. I also enjoy taking part in game
              jams and following along with various online courses/tutorials to
              help boost my skills and knowledge.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <Image src={profileImage} thumbnail />
          </Col>
        </Row>
      </Row>
    </Styles>
  )
}
