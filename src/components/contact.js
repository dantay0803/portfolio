import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FiMail, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

const Styles = styled.div`
  z-index: 1;
  margin-bottom: 10rem;

  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
  }

  .contact-links {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5em;
    justify-items: center;
    align-items: center;
    margin-top: 3rem;
  }

  .contact-link {
    background-color: var(--background-secondary);
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(0, 0, 0);
    box-shadow: 0 0.625rem 0.375rem rgba(0, 0, 0, 1);
    transition: all 0.75s ease-in-out;
    margin: 0;
    padding: 0;
  }

  .contact-link:hover {
    background-color: var(--highlight);
    transition: all 0.75s ease-in-out;
  }

  svg {
    stroke-width: 1;
    transition: all 0.75s ease-in-out;
  }

  .contact-link:hover svg {
    color: var(--text-primary);
    transition: all 0.75s ease-in-out;
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
            <br />
            Just follow the links below
          </p>
          <div className="contact-links">
            <a
              href="mailto:danielt0803@outlook.com"
              rel="noopener noreferrer"
              className="contact-link"
              key="contact-email"
              title="Link to send me an email"
            >
              <FiMail size={65} alt="Email Image" />
            </a>
            <a
              href="https://www.linkedin.com/in/danielt0803/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              key="contact-linkedin"
              title="Link to my LinkedIn profile"
            >
              <FiLinkedin size={65} alt="LinkedIn Logo" />
            </a>
            <a
              href="https://twitter.com/dantay0803"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              key="contact-twitter"
              title="Link to my personal Twitter"
            >
              <FiTwitter size={65} alt="Twitter Logo" />
            </a>
            <a
              href="https://github.com/dantay0803"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              key="contact-github"
              title="Link to my personal GitHub"
            >
              <FiGithub size={65} alt="GitHub Logo" />
            </a>
          </div>
        </div>
      </Container>
    </Styles>
  );
}
