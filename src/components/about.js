import React from "react"
import styled from "styled-components"
import { Row, Col, Image } from "react-bootstrap"
import Underline from "./underline"
import profileImage from "../images/profileImage.jpg"

const Styles = styled.div`
  padding: 0;
  margin: 0;
  margin-bottom: 5rem;
  color: white;

  a {
    color: var(--portfolio-blue);
  }

  img {
    width: 250px;
    height: 250px;
    margin-top: 1rem;
    margin-bottom: 2rem;
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
            <Underline />
            <Image src={profileImage} roundedCircle />
          </Col>
        </Row>
        <Row noGutters>
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
            <p>
              Check out some of my thoughts and opinions at the links below.
            </p>
            <ul>
              <li>
                <a
                  href="http://calmdowntom.com/2013/09/game-sales-yay-or-nay/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Game Sales... Yay or Nay?
                </a>
              </li>
              <li>
                <a
                  href="http://calmdowntom.com/2013/10/top-15-metal-gear-solid-moments/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Top 15 Metal Gear Solid Moments
                </a>
              </li>
              <li>
                <a
                  href="http://calmdowntom.com/2013/12/daniel-taylors-top-5-games-of-2013/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Daniel Taylor's Top 5 Games of 2013
                </a>
              </li>
              <li>
                <a
                  href="http://calmdowntom.com/2013/12/calmdowntoms-goty-awards-2013/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CalmDownTom’s GOTY Awards 2013
                </a>
              </li>
              <li>
                <a
                  href="http://calmdowntom.com/2014/02/the-best-games-of-last-gen-bioshock/#comments"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Best Games of Last Gen: Bioshock
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Row>
    </Styles>
  )
}
