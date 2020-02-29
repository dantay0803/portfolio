import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

const Styles = styled.div`
  padding: 0;
  margin: 0;
  margin-bottom: 5rem;
  text-align: center;

  a {
    color: var(--highlight);
  }

  .contactLinks {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }

  .fa-4x {
    color: var(--highlight);
  }
`;

export default function contact() {
  return (
    <Styles>
      <Row
        key="contact"
        id="contact"
        className="justify-content-md-center"
        noGutters
      >
        <Row className="justify-content-md-center" noGutters>
          <Col xs={12}>
            <h1>Get in Touch</h1>
            <hr className="hrTitle" />
            <p>
              Looking to speak with me about something or just want to stay up
              to date with my work?
            </p>
            <p>Just follow the links below</p>
            <Row>
              <Col xs={12} md={3}>
                <a
                  href="mailto:daniel@danielt.co.uk"
                  rel="noopener noreferrer"
                  className="contactLinks"
                >
                  <FontAwesomeIcon icon={faEnvelopeSquare} size="4x" />
                  <p>Email</p>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a
                  href="https://www.linkedin.com/in/danielt0803/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contactLinks"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="4x" />
                  <p>LinkedIn</p>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a
                  href="https://twitter.com/dantay0803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contactLinks"
                >
                  <FontAwesomeIcon icon={faTwitterSquare} size="4x" />
                  <p>Twitter</p>
                </a>
              </Col>
              <Col xs={12} md={3}>
                <a
                  href="https://github.com/dantay0803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contactLinks"
                >
                  <FontAwesomeIcon icon={faGithubSquare} size="4x" />
                  <p>GitHub</p>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Styles>
  );
}
