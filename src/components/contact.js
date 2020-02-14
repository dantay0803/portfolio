import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FiMail, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

const Styles = styled.div`
  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .contact-links {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-colums: repeat(4, 1fr);
    grid-gap: 5em;
    justify-items: center;
    align-items: center;
  }

  .contact-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export default function contact() {
  return (
    <Styles>
      <Container key="contact" id="contact" fluid>
        <h1>Contact</h1>
        <hr className="hrTitle" />
        <div className="contact-info">
          <p>
            Looking to speak with me about something or just want to stay up to
            date with my work?
          </p>
          <p>Just follow the links below</p>
          <div className="contact-links">
            <a
              href="mailto:danielt0803@outlook.com"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FiMail />
              <p>Email</p>
            </a>
            <a
              href="https://www.linkedin.com/in/danielt0803/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FiLinkedin />
              <p>LinkedIn</p>
            </a>
            <a
              href="https://twitter.com/dantay0803"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FiTwitter />
              <p>Twitter</p>
            </a>
            <a
              href="https://github.com/dantay0803"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FiGithub />
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </Container>
    </Styles>
  );
}
